<template>
  <div class="main">
    <coords-dialog
      ref="DialogRef"
      style="position: absolute"
    />
    <div :class="$style.map_controls">
      <v-card :elevation="5">
        <v-btn
          icon="mdi-minus"
          @click="zoomAnimate(-1)"
          rounded="0"
          flat
          size="40"
        ></v-btn>
        <v-btn
          icon="mdi-plus"
          @click="zoomAnimate(1)"
          rounded="0"
          flat
          size="40"
        ></v-btn>
      </v-card>
      <v-spacer class="my-5"></v-spacer>
      <v-tooltip text="Set location manually">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-crosshairs-gps"
            :elevation="5"
            size="40"
            @click="DialogRef?.show"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-spacer class="my-5"></v-spacer>
      <v-tooltip :text="`Current region - ${store.currentSave?.data?.m_Dict?.boot?.m_SceneName}`">
        <template v-slot:activator="{ props }">
          <v-icon
              v-bind="props"
              color="grey"
          >
            mdi-help-circle-outline
          </v-icon>
        </template>
      </v-tooltip>
    </div>
    <div :class="$style.map_search">
      <v-card
        width="250px"
        :elevation="5"
      >
        <v-autocomplete
          placeholder="Search for location"
          single-line
          density="compact"
          class="autocomplete"
          variant="solo"
          hide-details
          :items="mapData.availableLocations"
          item-title="name"
          @update:modelValue="manuSelect"
          return-object
          clearable
        ></v-autocomplete>
      </v-card>
    </div>
    <div
      ref="mapElement"
      style="width: 100vw; height: calc(100vh - 96px)"
      class=""
    >
      <v-card
          :elevation="5"
          id="popup"
          width="25em"
          rounded="lg"
          color="transparent"
      >
        <v-fade-transition>
          <v-img
              class="align-end text-white"
              height="200"
              :src="selectedPoint.screenshotPath"
              cover
              :gradient="`to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 73%, rgba(0,0,0,0.5) 100%`"
          >
            <v-card-title>{{ selectedPoint.name }}</v-card-title>
            <v-card-actions>
              <v-btn
                  @click="setNewPosition(selectedPoint.position)"
                  :disabled="selectedPoint.name === ''"
                  variant="tonal"
                  color="white"
                  size="large"
              >
                TRAVEL
              </v-btn>
            </v-card-actions>

          </v-img>
        </v-fade-transition>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, onMounted, reactive, computed } from 'vue';
import store from '../../store';
import { Map, View, Overlay } from 'ol';
import Vector from 'ol/source/Vector';
import { Geometry } from 'ol/geom';
import GeoJSON from 'ol/format/GeoJSON';
import CoordsDialog from './CoordsDialog.vue';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import Projection from 'ol/proj/Projection';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';

import markerIcon from '../../assets/marker.png';
import markerLocationIcon from '../../assets/marker_location.png';

//TYPES
import GameRegion from 'src/tldSave/types/generated/enums/GameRegion';
import { AvailableLocation } from 'src/tldSave/availableLocations';
import { Vector as VectorLayer } from 'ol/layer';

const mapElement = ref<HTMLElement>();
const DialogRef = ref<InstanceType<typeof CoordsDialog>>();

const mapRoot = ref<Map | null>(null);

const selectedPoint: AvailableLocation = reactive({
  name: '',
  position: [0, 0, 0],
  id: '',
  screenshotPath: '',
});

interface MapData {
  source: string;
  center: [number, number];
  zoom: number;
  size: [number, number];
  extent: [number, number, number, number];
  extentLimit: [number, number, number, number];
  region: GameRegion;
  position: [number, number, number];
  availableLocations: AvailableLocation[];
}

const mapData = computed((): MapData => {
  return store.mapData;
});

function setNewPosition(position: [number, number, number]): void {
  if (!position) return;
  store.newPosition(position);
}

function zoomAnimate(index: number): void {
  const view = mapRoot.value?.getView();
  if (!view) return;
  const currentZoom = view.getZoom() ?? 3;
  const minZoom = view.getConstrainedZoom(0) ?? 0;
  const targetZoom = Math.max(currentZoom + index, minZoom);
  view.cancelAnimations();
  view.animate({
    zoom: targetZoom,
    duration: 200,
  });
}

function centerOnPoint(coordinates: [number, number]): void {
  const view = mapRoot.value?.getView();
  if (!view) return;
  const currentZoom = Math.max(view.getZoom() ?? 4, 3);
  view.cancelAnimations();
  view.animate({
    zoom: currentZoom,
    center: coordinates,
    duration: 250,
  });
}

function manuSelect(e: AvailableLocation | null): void {
  if (!e && selectedPoint.name !== '' || e == null) {
    selectedPoint.name = '';
    return mapRoot.value?.getOverlayById('popup')?.setPosition(undefined);
  }
  centerOnPoint([e.position[0], e.position[2]]);
  mapRoot.value
    ?.getOverlayById('popup')
    ?.setPosition([e.position[0], e.position[2]]);
  selectedPoint.name = e.name;
  selectedPoint.id = e.id;
  selectedPoint.screenshotPath = e.screenshotPath;
  selectedPoint.position = e.position;
}

watch(
  mapData,
  () => {
    renderMap();
  },
  { immediate: true }
);

function createGeoJSON() {
  return JSON.stringify({
    type: 'FeatureCollection',
    features: (() => {
      if (!mapData.value?.availableLocations) return [];
      return mapData.value.availableLocations.map((location) => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [location.position[0], location.position[2]],
          },
          properties: {
            name: location.name,
            id: location.id,
            fullCoordinates: location.position,
            screenshotPath: location.screenshotPath,
          },
        };
      });
    })(),
  });
}

function getLayerByName<T>(name: string): T | undefined {
  const layers = mapRoot.value?.getLayers().getArray();
  return layers?.find((layer) => layer.getProperties().name === name) as T;
}

function renderMap() {
  const mainVectorLayer =
    getLayerByName<VectorLayer<Vector<Geometry>>>('mainVectorLayer');
  const playerVectorLayer =
    getLayerByName<VectorLayer<Vector<Geometry>>>('PlayerVectorLayer');
  const mainImageLayer = getLayerByName<ImageLayer<Static>>('mainImageLayer');
  if (!mainVectorLayer || !mainImageLayer || !playerVectorLayer) return;
  mainVectorLayer.setSource(
    new Vector({
      features: new GeoJSON().readFeatures(createGeoJSON()),
    })
  );

  const projection = new Projection({
    code: 'tld-image',
    units: 'pixels',
    extent: mapData.value?.extent,
  });

  mainImageLayer.setSource(
    new Static({
      url: mapData.value?.source ?? '',
      projection: projection,
      imageExtent: mapData.value?.extent,
    })
  );

  playerVectorLayer.setSource(
    new Vector({
      features: [
        new Feature({
          geometry: new Point([
            mapData.value?.position[0],
            mapData.value?.position[2],
          ]),
          name: 'Player',
        }),
      ],
    })
  );

  mapRoot.value?.setView(
    new View({
      zoom: mapData.value?.zoom,
      center: [mapData.value?.position[0], mapData.value?.position[2]],
      projection: projection,
      extent: mapData.value?.extentLimit,
    })
  );
}

onMounted(() => {
  nextTick(() => {
    mapRoot.value = new Map({
      controls: [],
      target: mapElement.value,
      overlays: [
        new Overlay({
          element: document.getElementById('popup') as HTMLElement,
          position: undefined,
          id: 'popup',
        }),
      ],
      layers: [
        new ImageLayer({
          properties: {
            name: 'mainImageLayer',
          },
        }),
        new VectorLayer({
          properties: {
            name: 'mainVectorLayer',
          },
          renderBuffer: 1000,
          style: new Style({
            image: new Icon({
              scale: 0.5,
              src: markerLocationIcon,
              color: 'rgb(255, 0, 107)',
            }),
          }),
        }),
        new VectorLayer({
          properties: {
            name: 'PlayerVectorLayer',
          },
          renderBuffer: 1000,
          style: new Style({
            image: new Icon({
              scale: 1,
              src: markerIcon,
            }),
          }),
        }),
      ],
    });
    renderMap();
    mapRoot.value.on('pointermove', function (e) {
      const map = mapRoot.value;
      const pixel = map?.getEventPixel(e.originalEvent);
      if (!pixel) return;
      const features = map?.getFeaturesAtPixel(pixel) || [];
      const closestFeature = features.find(
        (feature) => feature.get('name') !== 'Player'
      );
      const hit = closestFeature !== undefined;
      (map?.getTarget() as HTMLElement).style.cursor = hit ? 'pointer' : '';
    });

    mapRoot.value.on('click', function (evt) {
      const map = mapRoot.value;
      const feature = map?.forEachFeatureAtPixel(evt.pixel, function (feature) {
        if (feature.get('name') !== 'Player') return feature;
      });
      if (!feature) {
        selectedPoint.name = '';
        return map?.getOverlayById('popup')?.setPosition(undefined);
      }
      const coordiantes = feature.get('fullCoordinates');
      centerOnPoint([coordiantes[0], coordiantes[2]]);
      map
        ?.getOverlayById('popup')
        ?.setPosition([coordiantes[0], coordiantes[2]]);
      selectedPoint.name = feature.get('name');
      selectedPoint.id = feature.get('id');
      selectedPoint.screenshotPath = feature.get('screenshotPath');
      selectedPoint.position = coordiantes;
    });
  });
});
</script>

<style lang="scss" module>
.map_container {
  //height: calc(80vh - 96px);
  width: 100vw;
}

.map_controls {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 2;
}

.map_search {
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 2;
}
</style>

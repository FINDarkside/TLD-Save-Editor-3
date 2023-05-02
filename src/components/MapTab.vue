<template>
  <div class="container">
    <map-component></map-component>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, reactive } from 'vue';
import MapComponent from './map/MapComponent.vue';
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.6em 3em;
  align-items: center;
  position: relative;
  height: 100vh;
}

.map_container {
  height: calc(80vh - 96px);
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

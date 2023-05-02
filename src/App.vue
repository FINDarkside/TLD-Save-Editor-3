<template>
  <v-app>
    <v-main :class="$style.app">
      <div :class="$style.topBar">
        <v-select
          v-model="selectedSave"
          :items="store.availableSaves"
          item-title="name"
          item-value="file"
          label="Select save"
          append-icon="mdi-refresh"
          @click:append="store.refreshAvailableSaves()"
          variant="plain"
          flat
          :loading="store.loadingSaves"
          :disabled="store.loadingSaves"
          hide-details
        ></v-select>
        <v-btn class="ml-5" @click="store.saveCurrent()" flat>Save</v-btn>
      </div>

      <TabSwitch v-if="store.currentSave" />

      <div
        class="d-flex fill-height"
        v-if="store.loadingSaves && !store.currentSave"
      >
        <v-col cols="12">
          <v-row class="justify-center align-center fill-height">
            <v-progress-circular :model-value="loader" size="150"
              ><div class="text-center">
                Loading<br />{{
                  `${store.loadingInfo.currentIndex}/${store.loadingInfo.totalCount}`
                }}
              </div></v-progress-circular
            >
          </v-row>
        </v-col>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { effect, onMounted, ref, watch, computed } from 'vue';
import store from './store';
import TabSwitch from './components/TabSwitch.vue';

const selectedSave = ref<undefined | string>(undefined);

const loader = computed((): number => {
  if (!store.loadingSaves) return 100;
  return (
    (100 / store.loadingInfo.totalCount) * store.loadingInfo.currentIndex || 0
  );
});

effect(() => {
  if (selectedSave.value) store.loadSave(selectedSave.value);
});

onMounted(() => {
  store.refreshAvailableSaves();
});
</script>

<style>
html {
  overflow: auto !important;
}
</style>

<style module>
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 7px;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <v-app>
    <v-main :class="$style.app">
      <div :class="$style.topBar">
        <v-select
          v-model="selectedSave"
          :items="store.availableSaves"
          item-title="name"
          item-value="file"
          placeholder="Select save"
          variant="solo"
          flat
          :loading="store.loadingSaves"
          :disabled="store.loadingSaves"
          hide-details
          density="compact"
          hide-selected
        ></v-select>
        <v-icon class="mx-5" @click="store.refreshAvailableSaves()">mdi-refresh</v-icon>
        <v-btn variant="flat" v-if="selectedSave" @click="undoChanges()" flat height="48">Reload</v-btn>
        <v-btn variant="flat" @click="store.saveCurrent()" flat height="48">Save</v-btn>
      </div>
      <v-divider></v-divider>

      <TabSwitch v-if="store.currentSave && !store.loadingSaves" />

      <div
        class="d-flex fill-height"
        v-if="store.loadingSaves"
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
import { effect, onMounted, ref, computed } from 'vue';
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

function undoChanges() {
  if (selectedSave.value) store.loadSave(selectedSave.value);
}
</script>

<style>
html {
  overflow: hidden !important;
}
</style>

<style module>
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 7px;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <v-app>
    <v-main :class="$style.app">
      <div :class="$style.topBar">
        <v-select
          v-model="selectedSave"
          :items="store.availableSaves"
          item-title="name"
          item-value="file"
          label="Current save"
          variant="plain"
          flat
          hide-details
        ></v-select>
        <v-btn @click="store.saveCurrent()" flat>Save</v-btn>
      </div>

      <TabSwitch v-if="store.currentSave" />


    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { effect, onMounted, ref, watch } from 'vue'
import store from './store'
import TabSwitch from './components/TabSwitch.vue';

const selectedSave = ref<undefined | string>(undefined)

effect(() => {
  if (selectedSave.value)
    store.loadSave(selectedSave.value)
})

onMounted(() => {
  store.refreshAvailableSaves()
});

</script>

<style>
html {
  overflow: auto;
}
</style>

<style module>
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
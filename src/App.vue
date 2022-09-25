<template>
  <v-app>
    <v-main :class="$style.app">
      <div :class="$style.topBar">
        <v-select
          :items="items"
          item-value="value"
          item-title="name"
          label="Current save"
          variant="plain"
          flat
          hide-details
        ></v-select>
        <v-btn @click="store.saveCurrent()">Save</v-btn>
      </div>

      <TabSwitch />


    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import store from './store'
import TabSwitch from './components/TabSwitch.vue';

const tab = ref(null)

const items = ref([{ name: 'Save 1', value: 'file1' }, { name: 'Save 1', value: 'file2' }])
const select = ref<undefined | string>()

onMounted(() => {
  console.log('asd')
  if (!store.currentSave) {
    console.log('MOUNT');
    store.loadSave('C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox1')
  }
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
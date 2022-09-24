<template>
  <v-app>
    <v-main>
      <div class="topBar">
        <v-select
          :items="items"
          item-value="value"
          item-title="name"
          label="Current save"
          variant="underlined"
          hide-details
        ></v-select>
        <v-btn @click="store.saveCurrent()">Save</v-btn>
      </div>

      <TabSwitch />


    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import store from './store'
import TabSwitch from './components/TabSwitch.vue';

const tab = ref(null)

const items = ref([{ name: 'Save 1', value: 'file1' }, { name: 'Save 1', value: 'file2' }])
const select = ref<undefined | string>()

store.loadSave('C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox4');
</script>

<style>
html {
  overflow-x: hidden;
}

.topBar{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
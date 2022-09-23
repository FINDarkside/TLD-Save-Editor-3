<template>
  <v-app>
    <v-main>
      <div>
        <v-select
          :items="items"
          item-value="value"
          item-title="name"
          label="Current save"
          variant="underlined"
        ></v-select>
      </div>
      <div>
        <v-btn @click="store.saveCurrent()">Save</v-btn>
      </div>

      <PlayerTab></PlayerTab>


    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Inventory from './components/tabs/Inventory.vue'
import store from './store'
import PlayerTab from './components/tabs/PlayerTab.vue';

const tab = ref(null)

const items = ref([{ name: 'Save 1', value: 'file1' }, { name: 'Save 1', value: 'file2' }])
const select = ref<undefined | string>()

store.loadSave('C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox1');
</script>

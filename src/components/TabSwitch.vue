<template>
  <div :class="$style.container">
    <v-tabs v-model="store.selectedTab" :class="$style.tabs">
      <v-tab v-for="tab in tabs">{{ tab.name }}</v-tab>
    </v-tabs>
    <template v-for="(tab, i) in tabs">
      <component :is="tab.component" v-if="i === store.selectedTab"></component>
    </template>
  </div>
</template>

<script setup lang="ts">
import { h, shallowRef, ref, watch } from 'vue';
import InventoryTab from './InventoryTab.vue';
import PlayerTab from './PlayerTab.vue';
import MapTab from './MapTab.vue';
import store from 'src/store';

const tabs = shallowRef([
  { name: 'Player', component: PlayerTab },
  { name: 'Inventory', component: InventoryTab },
  { name: 'Map', component: MapTab }
]);
</script>

<style lang="scss" module>
.container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #333;
}

.tabs {
  border-bottom: 1px solid #333;
  overflow: initial !important;
}
</style>
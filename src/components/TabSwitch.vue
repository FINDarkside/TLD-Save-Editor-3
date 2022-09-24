<template>

  <div class="container">
    <v-tabs
      v-model="selectedTab"
    >
      <v-tab v-for="tab in tabs">{{ tab.name }}</v-tab>
    </v-tabs>
    <template v-for="(tab, i) in tabs">
      <component
        :is="tab.component"
        v-show="i === selectedTab"
      ></component>
    </template>
  </div>
</template>

<script setup lang="ts">
import G from 'glob';
import { h, shallowRef, ref, watch } from 'vue'
import InventoryTab from './InventoryTab.vue';
import PlayerTab from './PlayerTab.vue';

const tabs = shallowRef([
  { name: 'Player', component: PlayerTab },
  { name: 'Inventory', component: InventoryTab },
])
const selectedTab = ref(0)

</script>

<style lang="scss" scoped>

</style>
<template>

  <div class="container">
    <v-list class="itemListPanel">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :active="selectedItem === item.value"
        @click="selectedItem = item.value"
      >
        <v-list-item-title> {{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>

    <div
      v-if="selectedItem"
      class="itemContainer"
    >
      Stackable: {{ selectedItem.gear?.stackable }}
    </div>
  </div>

</template>

<script setup lang="ts">
import store from '../store'
import { ref, watch, toRaw } from 'vue';
import { computed } from '@vue/reactivity';

const items = computed(() => store.currentSave?.data?.m_Dict.global?.inventory?.items?.map((item) => ({ title: item?.m_PrefabName, value: item })))
const selectedItem = ref(null as null | NonNullable<typeof items.value>[number]['value'])

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}

.itemListPanel {
  flex-shrink: 0;
  width: 20em;
  height: 100%;
}

.itemContainer {
  margin: 2em;
  overflow-wrap: break-word;
  min-width: 0;
}
</style>
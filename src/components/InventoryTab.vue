<template>
  <div :class="$style.container">
    <v-list :class="$style.itemListPanel">
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

    <ItemView
      v-if="selectedItem"
      :class="$style.itemContainer"
      :item="selectedItem"
    >
    </ItemView>
  </div>
</template>

<script setup lang="ts">
import store from '../store'
import { ref, watch, toRaw } from 'vue';
import { computed } from '@vue/reactivity';
import ItemView from './ItemView.vue';

const items = computed(() => store.currentSave?.data?.m_Dict.global?.inventory?.items?.map((item) => ({ title: item?.m_PrefabName, value: item })))
const selectedItem = ref(null as null | NonNullable<typeof items.value>[number]['value'])

</script>

<style lang="scss" module>
.container {
  overflow-y: hidden;
  display: flex;
}

.itemListPanel {
  width: 20em;
  overflow-y: auto;
  height: 100%;
}

.itemContainer {
  margin: 2em;
  min-width: 0;
  flex-grow: 1;
}
</style>
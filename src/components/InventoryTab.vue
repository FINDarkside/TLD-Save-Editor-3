<template>
  <div :class="$style.container">
    <v-list :class="$style.itemListPanel">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :active="selectedItem === item"
        @click="selectedItem = item"
      >
        <v-list-item-title> {{item?.m_PrefabName}}</v-list-item-title>
      </v-list-item>
    </v-list>

    <div
      :class="$style.itemContainer"
      v-if="selectedItem"
    >
      <!-- Don't allow deleting water supplys because user can't get them back -->
      <v-btn
        variant="outlined"
        @click="deleteItem"
        v-if="!selectedItem.m_PrefabName.startsWith('GEAR_WaterSupply')"
      >Delete</v-btn>
      <ItemView
        v-if="selectedItem"
        :item="selectedItem"
      >
      </ItemView>
    </div>

  </div>
</template>

<script setup lang="ts">
import store from '../store'
import { ref, watch, toRaw } from 'vue';
import { computed } from '@vue/reactivity';
import ItemView from './ItemView.vue';

const items = computed(() => store.currentSave?.data?.m_Dict.global?.inventory?.items)
const selectedItem = ref(null as null | NonNullable<typeof items.value>[number])

const deleteItem = () => {
  if (!selectedItem.value || !items.value) return;
  const index = items.value.indexOf(selectedItem.value);
  if (index < 0) return;
  items.value.splice(index, 1)
  selectedItem.value = null;
}

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
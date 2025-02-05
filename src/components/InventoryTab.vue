<template>
  <div class="overflow-hidden d-flex flex-column">
    <div :class="$style.toolbar">
      <v-select
        v-model="selectedItemCategory"
        :items="availableCategories"
        item-title="name"
        label="Category"
        variant="solo"
        flat
        single-line
        hide-details
        return-object
        density="comfortable"
        width="45vw"
      ></v-select>
      <v-select
        v-model="selectedItemToAdd"
        :items="availableItemsToShow"
        item-title="displayName"
        label="Item to add"
        variant="solo"
        flat
        single-line
        hide-details
        return-object
        density="comfortable"
        height="48"
        width="45vw"
      ></v-select>
      <v-btn
        :class="$style.addItemButton"
        height="48px"
        flat
        @click="addItem"
      >Add item</v-btn>
    </div>
    <v-divider></v-divider>

    <div :class="$style.container">
      <v-list :class="$style.itemListPanel">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :active="selectedItem === item"
          @click="selectedItem = item"
        >
          <v-list-item-title> {{ getGearDisplayName(item?.m_PrefabName) }}</v-list-item-title>
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
          v-if="!selectedItem.m_PrefabName?.startsWith('GEAR_WaterSupply')"
        >Delete</v-btn>
        <ItemView
          v-if="selectedItem"
          :item="selectedItem"
        >
        </ItemView>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import store from '../store'
import type { PartialDeep } from 'type-fest'
import { ref } from 'vue'
import { computed, toRaw } from 'vue'
import { useI18n } from 'vue-i18n';
import ItemView from './ItemView.vue'
import availableItems from 'src/tldSave/availableItems'
import { ItemCategory } from 'src/tldSave/availableItems'

const { t } = useI18n()

const selectedItemToAdd = ref<typeof availableItems[number] & { displayName: string }>()
const items = computed(() => {
  const items = store.currentSave?.data?.m_Dict?.global?.inventory?.items
  if (items && items.length) {
    items.sort((a, b) => {
      const sA = getGearDisplayName(a?.m_PrefabName) || ''
      const sB = getGearDisplayName(b?.m_PrefabName) || ''
      return sA.localeCompare(sB)
    })
  }
  return items
})

const selectedItem = ref(null as null | NonNullable<typeof items.value>[number])
const selectedItemCategory = ref<ItemCategory>(ItemCategory.FirstAid)

const availableCategories = Object.values(ItemCategory)
const availableItemsToShow = computed(() => availableItems
  .filter(item => item.category === selectedItemCategory.value)
  .map(item => ({ ...item, displayName: getGearDisplayName(item.name) }))
)

function getGearDisplayName(name: Optional<string>) {
  if (name == null) return null;
  return t(`gear.${name}`, {}, { default: name })
}


function addItem() {
  const itemToAdd = toRaw(selectedItemToAdd.value);
  console.log(itemToAdd);
  if (!itemToAdd) return
  const newItem: PartialDeep<NonNullable<typeof items.value>[0]> = {
    m_PrefabName: itemToAdd.name,
    gear: {
      ...structuredClone(itemToAdd.defaultData),
      m_Rotation: [0, 0, 0, 0],
      m_Position: [0, 0, 0],
      m_NormalizedCondition: 1,
      // TODO: Global.TimeOfDay.m_HoursPlayedNotPausedProxy
      m_HoursPlayed: 0,
      m_InstanceIDProxy: Math.round(Math.random() * 2147483647),
      m_GearItemSaveVersion: 4
    }
  }
  console.log(newItem)
  store.global?.inventory?.items?.push(newItem)
  selectedItem.value = newItem
}

const deleteItem = () => {
  if (!selectedItem.value || !items.value) return;
  const index = items.value.indexOf(selectedItem.value);
  if (index < 0) return;
  items.value.splice(index, 1)
  selectedItem.value = null;
}

</script>

<style lang="scss" module>
.toolbar {
  display: flex;
}

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
  padding: 2em;
  min-width: 0;
  flex-grow: 1;
  overflow-y: auto;
}

.addItemButton {
  height: 100% !important;
}
</style>

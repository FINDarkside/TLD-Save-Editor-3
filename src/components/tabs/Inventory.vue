<template>

  <div v-for="item in items">
    {{item.m_PrefabName}}
  </div>
</template>

<script setup lang="ts">
import store from '../../store'
import { ref } from 'vue';

const items = ref(store.currentSave?.data.m_Dict.global.inventory.m_SerializedItems)

</script>
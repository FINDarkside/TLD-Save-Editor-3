<template>
  <div :class="$style.container">
    <map-component></map-component>
  </div>
</template>

<script setup lang="ts">
import MapComponent from './map/MapComponent.vue';
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.6em 3em;
  align-items: center;
  position: relative;
  height: calc(100vh - 96px)
}
</style>

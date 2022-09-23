<template>

  <div v-if="condition">
    <v-slider
      v-model="condition.m_CurrentHPProxy"
      class="align-center"
      :max="100"
      :min="0"
    >
    </v-slider>
  </div>

</template>

<script setup lang="ts">
import store from '../../store'
import { computed, reactive, ref, watch } from 'vue';

const condition = computed(() => store.currentSave?.data.m_Dict.global.condition);



</script>
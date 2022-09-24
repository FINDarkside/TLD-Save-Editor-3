<template>

  <div class="container">
    <template v-if="condition">
      Health
      <v-slider
        class="input align-center"
        v-model="condition.m_CurrentHPProxy"
        :max="100"
        :min="0"
        hide-details
      >
      </v-slider>
    </template>

    <template v-if="condition">
      <v-switch
        class="fullRow"
        v-model="condition.m_Invulnerable"
        label="Invulnerable"
        color="primary"
        hide-details
        density="compact"
      ></v-switch>
      <v-switch
        class="fullRow"
        v-model="condition.m_NeverDieProxy"
        label="Never die"
        color="red"

        hide-details
        density="compact"
      ></v-switch>
    </template>
    <template v-if="global?.hunger">
      Reserver calories
      <v-text-field
        class="input"
        v-model="global.hunger.m_CurrentReserveCaloriesProxy"
        variant="outlined"
        hide-details
        density="compact"
      >
      </v-text-field>
    </template>
    <template v-if="global?.thirst">
      Thirst
      <v-slider
        class="input align-center"
        v-model="global.thirst.m_CurrentThirstProxy"
        :max="100"
        :min="0"
        hide-details
      >
      </v-slider>
    </template>
    <template v-if="global?.fatigue">
      Fatigue
      <v-slider
        class="input align-center"
        v-model="global.fatigue.m_CurrentFatigueProxy"
        :max="100"
        :min="0"
        hide-details
        density="compact"
      >
      </v-slider>
    </template>
    <template v-if="global?.freezing">
      Freezing
      <v-slider
        class="input align-center"
        v-model="global.freezing.m_CurrentFreezingProxy"
        :max="100"
        :min="0"
        hide-details
      >
      </v-slider>
    </template>

  </div>

</template>

<script setup lang="ts">
import store from '../store'
import { computed, reactive, ref, watch } from 'vue';
import { freemem } from 'os';

const global = computed(() => store.global);
const condition = computed(() => store.global?.condition);


</script>

<style lang="scss" scoped>
.container {
  margin: 2em;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.6em 3em;
  align-items: center;
}

.fullRow {
  grid-column: 1 / -1;
  margin-right: auto;
}

.inputGroup {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input {
  max-width: 20em;
}
</style>
<template>
  <div :class="$style.container">
    <template v-if="condition">
      Health
      <v-slider
        :class="[$style.input, 'align-center']"
        v-model="condition.m_CurrentHPProxy"
        :max="100"
        :min="0"
        hide-details
      >
        <template v-slot:append>
          <div :class="$style.slider_append">
            {{
              condition.m_CurrentHPProxy ? round(condition.m_CurrentHPProxy) : 0
            }}
            <span :class="$style.suffix">%</span>
          </div>
        </template>
      </v-slider>
    </template>

    <template v-if="condition">
      <v-switch
        :class="$style.fullRow"
        v-model="condition.m_Invulnerable"
        label="Invulnerable"
        color="primary"
        hide-details
        density="compact"
      ></v-switch>
      <v-switch
        :class="$style.fullRow"
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
        :class="$style.input"
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
        :class="[$style.input, 'align-center']"
        v-model="global.thirst.m_CurrentThirstProxy"
        :max="100"
        :min="0"
        hide-details
      >
        <template v-slot:append>
          <div :class="$style.slider_append">
            {{
              global.thirst.m_CurrentThirstProxy
              ? round(global.thirst.m_CurrentThirstProxy)
              : 0
            }}
            <span :class="$style.suffix">%</span>
          </div>
        </template>
      </v-slider>
    </template>
    <template v-if="global?.fatigue">
      Fatigue
      <v-slider
        :class="[$style.input, 'align-center']"
        v-model="global.fatigue.m_CurrentFatigueProxy"
        :max="100"
        :min="0"
        hide-details
        density="compact"
      >
        <template v-slot:append>
          <div :class="$style.slider_append">
            {{
              global.fatigue.m_CurrentFatigueProxy
              ? round(global.fatigue.m_CurrentFatigueProxy)
              : 0
            }}
            <span :class="$style.suffix">%</span>
          </div>
        </template>
      </v-slider>
    </template>
    <template v-if="global?.freezing">
      Freezing
      <v-slider
        :class="[$style.input, 'align-center']"
        v-model="global.freezing.m_CurrentFreezingProxy"
        :max="100"
        :min="0"
        hide-details
      >
        <template v-slot:append>
          <div :class="$style.slider_append">
            {{
              global.freezing.m_CurrentFreezingProxy
              ? round(global.freezing.m_CurrentFreezingProxy)
              : 0
            }}
            <span :class="$style.suffix">%</span>
          </div>
        </template>
      </v-slider>
    </template>
  </div>
</template>

<script setup lang="ts">
import store from '../store';
import { computed } from 'vue';

const global = computed(() => store.global);
const condition = computed(() => store.global?.condition);

function round(value: number) {
  return Math.round(value);
}
</script>

<style lang="scss" module>
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
  max-width: 25em;
}

.slider_append {
  margin-left: 0.5em;
  width: 60px;

  .suffix {
    color: #9e9e9e;
  }
}
</style>

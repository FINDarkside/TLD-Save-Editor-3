<template>
  <div
    :class="$style.container"
    v-if="gear"
  >
    Health
    <v-slider
      v-model="gear.m_NormalizedCondition"
      :max="1"
      :min="0"
      hide-details
    />

    <template v-if="gear?.stackable">
      Amount
      <v-text-field
        v-model="gear.stackable.m_UnitsProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.food">
      Calories remaining
      <v-text-field
        v-model="gear.food.m_CaloriesRemainingProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
      Calories total
      <v-text-field
        v-model="gear.food.m_CaloriesTotal"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.liquid">
      Amount (liters)
      <v-text-field
        v-model="gear.liquid.m_LiquidLitersProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.flashlight">
      Battery charge
      <v-text-field
        v-model="gear.flashlight.m_CurrentBatteryCharge"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.kerosene">
      Amount (liters)
      <v-text-field
        v-model="gear.kerosene.m_CurrentFuelLitersProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.clothing">
      Frozen
      <v-slider
        v-model="gear.clothing.m_PercentFrozen"
        :max="100"
        :min="0"
        hide-details
      />
      Wet
      <v-slider
        v-model="gear.clothing.m_PercentWet"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.weapon">
      Loaded rounds
      <v-text-field
        v-model="gear.weapon.m_RoundsInClipProxy"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.water">
      Amount (liters)
      <v-text-field
        v-model="gear.water.m_VolumeProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.inProgress">
      Completed %
      <v-slider
        v-model="gear.inProgress.m_PercentComplete"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.evolve">
      Time evolving
      <v-text-field
        v-model="gear.evolve.m_TimeSpentEvolvingGameHours"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.research">
      Elapsed reserach hours
      <v-text-field
        v-model="gear.research.m_ElapsedHours"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.bodyHarvest">
      Meat available (kg)
      <v-text-field
        v-model="gear.bodyHarvest.m_MeatAvailableKG"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
      Hide amount
      <v-text-field
        v-model="gear.bodyHarvest.m_HideAvailableUnits"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
      Guts amount
      <v-text-field
        v-model="gear.bodyHarvest.m_GutAvailableUnits"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.powder">
      Amount (kg)
      <v-text-field
        v-model="gear.powder.m_WeightKG"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
      />
    </template>
    <template v-if="gear?.millable">
      Restoration progress
      <v-slider
        v-model="gear.millable.m_RestorationProgress"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    JSON
    <v-textarea
      v-model="gearJson"
      variant="outlined"
      hide-details
      density="compact"
      :row-height="20"
    >
    </v-textarea>
  </div>
</template>

<script setup lang="ts">
import type tldParser from 'src/tldSave/tldParser'
import type { Get } from 'type-fest'
import { computed, PropType } from 'vue';
import store from 'src/store'

const asd = store.currentSave?.data?.m_Dict.global?.inventory?.items?.[0];

type GearItem = NonNullable<typeof asd>

//type GearItem = NonNullable<Get<ReturnType<typeof tldParser['parse']>, 'm_Dict.global.inventory.items.0'>>

const props = defineProps({
  item: Object as (PropType<GearItem>)
})

const gear = computed(() => props.item?.gear)

const gearJson = computed({
  get() {
    return JSON.stringify(gear.value, null, 2)
  },
  set(val: string) {
    if (!props.item) return
    props.item.gear = JSON.parse(val)
  }
});

</script>

<style module>
.container {
  flex: 1;
  margin-top: 1em;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.6em 3em;
  align-items: center;
  align-content: flex-start;
}

.input {
  max-width: 20em;
}
</style>
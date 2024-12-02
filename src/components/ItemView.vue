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
        v-model.number="gear.stackable.m_UnitsProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.stackable.m_UnitsProxy = gear.stackable.m_UnitsProxy || 0"
      />
    </template>
    <template v-if="gear?.food">
      Calories remaining
      <v-text-field
        v-model.number="gear.food.m_CaloriesRemainingProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.food.m_CaloriesRemainingProxy = gear.food.m_CaloriesRemainingProxy || 0"
      />
      Calories total
      <v-text-field
        v-model.number="gear.food.m_CaloriesTotal"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.food.m_CaloriesTotal = gear.food.m_CaloriesTotal || 0"
      />
    </template>
    <template v-if="gear?.liquid">
      Amount (liters)
      <v-text-field
        v-model.number="gear.liquid.m_LiquidLitersProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.liquid.m_LiquidLitersProxy = gear.liquid.m_LiquidLitersProxy || 0"
      />
    </template>
    <template v-if="gear?.flashlight">
      Battery charge
      <v-text-field
        v-model.number="gear.flashlight.m_CurrentBatteryCharge"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.flashlight.m_CurrentBatteryCharge = gear.flashlight.m_CurrentBatteryCharge || 0"
      />
    </template>
    <template v-if="gear?.kerosene">
      Amount (liters)
      <v-text-field
        v-model.number="gear.kerosene.m_CurrentFuelLitersProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.kerosene.m_CurrentFuelLitersProxy = gear.kerosene.m_CurrentFuelLitersProxy || 0"
      />
    </template>
    <template v-if="gear?.clothing">
      Frozen
      <v-slider
        v-model.number="gear.clothing.m_PercentFrozen"
        :max="100"
        :min="0"
        hide-details
      />
      Wet
      <v-slider
        v-model.number="gear.clothing.m_PercentWet"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.weapon">
      Loaded rounds
      <v-text-field
        v-model.number="gear.weapon.m_RoundsInClipProxy"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.water">
      Amount (liters)
      <v-text-field
        v-model.number="gear.water.m_VolumeProxy"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.water.m_VolumeProxy = gear.water.m_VolumeProxy || 0"
      />
    </template>
    <template v-if="gear?.inProgress">
      Completed %
      <v-slider
        v-model.number="gear.inProgress.m_PercentComplete"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    <template v-if="gear?.evolve">
      Time evolving
      <v-text-field
        v-model.number="gear.evolve.m_TimeSpentEvolvingGameHours"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.evolve.m_TimeSpentEvolvingGameHours = gear.evolve.m_TimeSpentEvolvingGameHours || 0"
      />
    </template>
    <template v-if="gear?.research">
      Elapsed reserach hours
      <v-text-field
        v-model.number="gear.research.m_ElapsedHours"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.research.m_ElapsedHours = gear.research.m_ElapsedHours || 0"
      />
    </template>
    <template v-if="gear?.bodyHarvest">
      Meat available (kg)
      <v-text-field
        v-model.number="gear.bodyHarvest.m_MeatAvailableKG"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.bodyHarvest.m_MeatAvailableKG = gear.bodyHarvest.m_MeatAvailableKG || 0"
      />
      Hide amount
      <v-text-field
        v-model.number="gear.bodyHarvest.m_HideAvailableUnits"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.bodyHarvest.m_HideAvailableUnits = gear.bodyHarvest.m_HideAvailableUnits || 0"
      />
      Guts amount
      <v-text-field
        v-model.number="gear.bodyHarvest.m_GutAvailableUnits"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.bodyHarvest.m_GutAvailableUnits = gear.bodyHarvest.m_GutAvailableUnits || 0"
      />
    </template>
    <template v-if="gear?.powder">
      Amount (kg)
      <v-text-field
        v-model.number="gear.powder.m_WeightKG"
        variant="outlined"
        hide-details
        density="compact"
        type="number"
        @blur="gear.powder.m_WeightKG = gear.powder.m_WeightKG || 0"
      />
    </template>
    <template v-if="gear?.millable">
      Restoration progress
      <v-slider
        v-model.number="gear.millable.m_RestorationProgress"
        :max="100"
        :min="0"
        hide-details
      />
    </template>
    Gear name
    <v-text-field
      :value="item?.m_PrefabName"
      variant="outlined"
      hide-details
      density="compact"
    />
    JSON
    <v-textarea
      v-model="gearJson"
      variant="outlined"
      hide-details
      density="compact"
      :row-height="200"
      :class="$style.jsonArea"
    >
    </v-textarea>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import store from 'src/store'

const asd = store.currentSave?.data?.m_Dict?.global?.inventory?.items?.[0];
type GearItem = NonNullable<typeof asd>

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

<style module lang="scss">
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

.jsonArea {
  height: 30em;

  textarea {
    height: 100%;
  }
}
</style>
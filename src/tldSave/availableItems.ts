import LiquidQuality from './types/generated/enums/LiquidQuality';
import store from 'src/store';
import BedRollState from './types/generated/enums/BedRollState';
import FlareState from './types/generated/enums/FlareState';
import TorchState from './types/generated/enums/TorchState';
import SnareState from './types/generated/enums/SnareState';
import DecalColour from './types/generated/enums/DecalColour';

export enum ItemCategory {
  FirstAid = 'FirstAid',
  Clothing = 'Clothing',
  Food = 'Food',
  Tools = 'Tools',
  Materials = 'Materials',
  Books = 'Books',
  Collectible = 'Collectible',
  Unknown = 'Unknown',
}

const tmpGearItem = store.currentSave?.data?.m_Dict?.global?.inventory?.items?.[0]?.gear;
type GearItem = NonNullable<typeof tmpGearItem>;

interface ItemInfo {
  name: string;
  category: ItemCategory;
  defaultData?: Partial<GearItem>;
}

const createGear = (name: string, category: ItemCategory, defaultData?: Partial<GearItem>) => {
  return {
    name,
    category,
    defaultData,
  };
};

const createFirstAid = (name: string, defaultData?: Partial<GearItem>) => createGear(name, ItemCategory.FirstAid, defaultData);
const createTool = (name: string, defaultData?: Partial<GearItem>) => createGear(name, ItemCategory.Tools, defaultData);
const createMaterial = (name: string, defaultData?: Partial<GearItem>) => createGear(name, ItemCategory.Materials, defaultData);
const createBook = (name: string, defaultData?: Partial<GearItem>) => createGear(name, ItemCategory.Books, defaultData);
const createUnknown = (name: string, defaultData?: Partial<GearItem>) => createGear(name, ItemCategory.Unknown, defaultData);

const createClothing = (name: string): ItemInfo => ({
  name,
  category: ItemCategory.Clothing,
});

const createCollectible = (name: string): ItemInfo => ({
  name,
  category: ItemCategory.Collectible,
});

const createFood = (name: string, defaultData: Partial<GearItem>): ItemInfo => {
  return {
    name,
    category: ItemCategory.Food,
    defaultData: {
      ...defaultData,
      food: { m_Packaged: true, ...defaultData.food },
    },
  };
};

const availableItems: ItemInfo[] = [
  // Firstaid
  createFirstAid('GEAR_BottleAntibiotics', { stackable: { m_UnitsProxy: 6 } }),
  createFirstAid('GEAR_BottleHydrogenPeroxide', {
    liquid: { m_LiquidLitersProxy: 0.5, m_LiquidQuality: LiquidQuality.NonPotable },
  }),
  createFirstAid('GEAR_BottlePainKillers', { stackable: { m_UnitsProxy: 6 } }),
  createFirstAid('GEAR_HeavyBandage', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_OldMansBeardDressing', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_WaterPurificationTablets', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_EmergencyStim'),
  createFirstAid('GEAR_ReishiPrepared', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_BirchbarkPrepared', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_BirchbarkTea', { food: { m_CaloriesRemainingProxy: 100 } }),
  createFirstAid('GEAR_CompressionBandage'),
  createFirstAid('GEAR_EmergencyStim'),
  // TODO: Check
  createFirstAid('GEAR_Insulin'),
  createFirstAid('GEAR_ReishiTea', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: check
  createFirstAid('GEAR_RosehipsPrepared', { stackable: { m_UnitsProxy: 1 } }),
  createFirstAid('GEAR_RoseHipTea', { food: { m_CaloriesRemainingProxy: 100 } }),
  createFirstAid('GEAR_SodaEnergy', { food: { m_CaloriesRemainingProxy: 100 } }),
  createFirstAid('GEAR_WaterPurificationTablets', { stackable: { m_UnitsProxy: 4 } }),

  // Clothing
  createClothing('GEAR_Jeans'),
  createClothing('GEAR_WorkBoots'),
  createClothing('GEAR_WoolSweater'),
  createClothing('GEAR_CottonScarf'),
  createClothing('GEAR_FleeceMittens'),
  createClothing('GEAR_BasicWoolHat'),
  createClothing('GEAR_CottonSocks'),
  createClothing('GEAR_AstridBoots'),
  createClothing('GEAR_AstridGloves'),
  createClothing('GEAR_AstridJacket'),
  createClothing('GEAR_AstridJeans'),
  createClothing('GEAR_AstridSweater'),
  createClothing('GEAR_AstridToque'),
  createClothing('GEAR_Balaclava'),
  createClothing('GEAR_TechnicalBalaclava'),
  createClothing('GEAR_AviatorCap'),
  createClothing('GEAR_BallisticVest'),
  createClothing('GEAR_BaseballCap'),
  createClothing('GEAR_BasicBoots'),
  createClothing('GEAR_BasicGloves'),
  createClothing('GEAR_BasicShoes'),
  createClothing('GEAR_BasicWinterCoat'),
  createClothing('GEAR_BasicWoolHat'),
  createClothing('GEAR_BasicWoolScarf'),
  createClothing('GEAR_BearEar'),
  createClothing('GEAR_BearSkinCoat'),
  createClothing('GEAR_CargoPants'),
  createClothing('GEAR_ClimbingSocks'),
  createClothing('GEAR_CombatBoots'),
  createClothing('GEAR_CombatPants'),
  createClothing('GEAR_CottonHoodie'),
  createClothing('GEAR_CottonScarf'),
  createClothing('GEAR_CottonShirt'),
  createClothing('GEAR_CottonSocks'),
  createClothing('GEAR_CottonSocksStart'),
  createClothing('GEAR_CowichanSweater'),
  createClothing('GEAR_Crampons'),
  createClothing('GEAR_DeerSkinBoots'),
  createClothing('GEAR_DeerSkinPants'),
  createClothing('GEAR_DownParka'),
  createClothing('GEAR_DownSkiJacket'),
  createClothing('GEAR_DownVest'),
  createClothing('GEAR_EarMuffs'),
  createClothing('GEAR_FishermanSweater'),
  createClothing('GEAR_FleeceMittens'),
  createClothing('GEAR_FleeceSweater'),
  createClothing('GEAR_Gauntlets'),
  createClothing('GEAR_GreyMotherBoots'),
  createClothing('GEAR_HeavyParka'),
  createClothing('GEAR_HeavyWoolSweater'),
  createClothing('GEAR_ImprovisedHat'),
  createClothing('GEAR_ImprovisedMittens'),
  createClothing('GEAR_InsulatedBoots'),
  createClothing('GEAR_InsulatedPants'),
  createClothing('GEAR_InsulatedVest'),
  createClothing('GEAR_Jeans'),
  createClothing('GEAR_JeremiahsCoat'),
  createClothing('GEAR_LeatherShoes'),
  createClothing('GEAR_LightParka'),
  createClothing('GEAR_LongUnderwear'),
  createClothing('GEAR_LongUnderwearStart'),
  createClothing('GEAR_LongUnderwearWool'),
  createClothing('GEAR_MackinawJacket'),
  createClothing('GEAR_MilitaryParka'),
  createClothing('GEAR_Mittens'),
  createClothing('GEAR_MooseHideBag'),
  createClothing('GEAR_MooseHideCloak'),
  createClothing('GEAR_MuklukBoots'),
  createClothing('GEAR_NewsprintInsulation'),
  createClothing('GEAR_NewsprintBootStuffing'),
  createClothing('GEAR_PlaidShirt'),
  createClothing('GEAR_PremiumWinterCoat'),
  createClothing('GEAR_QualityWinterCoat'),
  createClothing('GEAR_RabbitskinHat'),
  createClothing('GEAR_RabbitSkinMittens'),
  createClothing('GEAR_SkiBoots'),
  createClothing('GEAR_SkiGloves'),
  createClothing('GEAR_SkiJacket'),
  createClothing('GEAR_TeeShirt'),
  createClothing('GEAR_Toque'),
  createClothing('GEAR_WillBoots'),
  createClothing('GEAR_WillBootsStart'),
  createClothing('GEAR_WillPants'),
  createClothing('GEAR_WillPantsStart'),
  createClothing('GEAR_WillParka'),
  createClothing('GEAR_WillParka_Table'),
  createClothing('GEAR_WillParka_Tossed'),
  createClothing('GEAR_WillShirt'),
  createClothing('GEAR_WillShirtStart'),
  createClothing('GEAR_WillSweater'),
  createClothing('GEAR_WillSweaterStart'),
  createClothing('GEAR_WillToque'),
  createClothing('GEAR_WolfSkinCape'),
  createClothing('GEAR_WolfSkinCapeTallTales'),
  createClothing('GEAR_WoolShirt'),
  createClothing('GEAR_WoolSocks'),
  createClothing('GEAR_WoolSweater'),
  createClothing('GEAR_WoolWrap'),
  createClothing('GEAR_WoolWrapCap'),
  createClothing('GEAR_WorkBoots'),
  createClothing('GEAR_WorkGloves'),
  createClothing('GEAR_WorkPants'),

  // Food
  createFood('GEAR_Carrot', { stackable: { m_UnitsProxy: 1 } }),
  createFood('GEAR_Potato', { stackable: { m_UnitsProxy: 1 } }),
  createFood('GEAR_AirlineFoodChick', { food: { m_CaloriesRemainingProxy: 620 } }),
  createFood('GEAR_AirlineFoodVeg', { food: { m_CaloriesRemainingProxy: 560 } }),
  createFood('GEAR_BeefJerky', { food: { m_CaloriesRemainingProxy: 350 } }),
  createFood('GEAR_CandyBar', { food: { m_CaloriesRemainingProxy: 250 } }),
  createFood('GEAR_CannedBeans', { food: { m_CaloriesRemainingProxy: 600 } }),
  createFood('GEAR_CannedSardines', { food: { m_CaloriesRemainingProxy: 300 } }),
  createFood('GEAR_CattailStalk', { food: { m_CaloriesRemainingProxy: 150 }, stackable: { m_UnitsProxy: 1 } }),
  createFood('GEAR_CoffeeCup', { food: { m_CaloriesRemainingProxy: 100 } }),
  createFood('GEAR_CoffeeTin', { stackable: { m_UnitsProxy: 6 } }),
  createFood('GEAR_CondensedMilk', { food: { m_CaloriesRemainingProxy: 750 } }),
  // TODO: Check if I need to set weight for these
  createFood('GEAR_CookedBigMouthBass_TallTales', { food: { m_CaloriesRemainingProxy: 3750 } }),
  createFood('GEAR_CookedCohoSalmon', { food: { m_CaloriesRemainingProxy: 1650 } }),
  createFood('GEAR_CookedLakeWhiteFish', { food: { m_CaloriesRemainingProxy: 540 } }),
  createFood('GEAR_CookedMeatBear', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_CookedMeatDeer', { food: { m_CaloriesRemainingProxy: 800 } }),
  createFood('GEAR_CookedMeatMoose', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_CookedMeatRabbit', { food: { m_CaloriesRemainingProxy: 450 } }),
  createFood('GEAR_CookedMeatWolf', { food: { m_CaloriesRemainingProxy: 700 } }),
  createFood('GEAR_CookedRainbowTrout', { food: { m_CaloriesRemainingProxy: 410 } }),
  createFood('GEAR_CookedSmallMouthBass', { food: { m_CaloriesRemainingProxy: 780 } }),
  createFood('GEAR_Crackers', { food: { m_CaloriesRemainingProxy: 600 } }),
  createFood('GEAR_DogFood', { food: { m_CaloriesRemainingProxy: 500 } }),
  createFood('GEAR_EnergyBar', { food: { m_CaloriesRemainingProxy: 500 } }),
  createFood('GEAR_GranolaBar', { food: { m_CaloriesRemainingProxy: 300 } }),
  createFood('GEAR_GreenTeaCup', { food: { m_CaloriesRemainingProxy: 100 } }),
  createFood('GEAR_GreenTeaPackage', { stackable: { m_UnitsProxy: 6 } }),
  createFood('GEAR_HomeMadeSoup', { food: { m_CaloriesRemainingProxy: 600 } }),
  createFood('GEAR_KetchupChips', { food: { m_CaloriesRemainingProxy: 300 } }),
  createFood('GEAR_MapleSyrup', { food: { m_CaloriesRemainingProxy: 850 } }),
  createFood('GEAR_MRE', { food: { m_CaloriesRemainingProxy: 1750 } }),
  createFood('GEAR_PeanutButter', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_PinnacleCanPeaches', { food: { m_CaloriesRemainingProxy: 450 } }),
  createFood('GEAR_CannedCorn', { food: { m_CaloriesRemainingProxy: 450 } }),
  createFood('GEAR_PumpkinPie', { food: { m_CaloriesRemainingProxy: 2000 } }),
  createFood('GEAR_PumpkinPieDarkwalker', { food: { m_CaloriesRemainingProxy: 300 } }),
  createFood('GEAR_RawBigBass', { food: { m_CaloriesRemainingProxy: 1100 } }),
  createFood('GEAR_RawBigMouthBass_TallTales', { food: { m_CaloriesRemainingProxy: 3750 } }),
  createFood('GEAR_RawCohoSalmon', { food: { m_CaloriesRemainingProxy: 1000 } }),
  createFood('GEAR_RawLakeWhiteFish', { food: { m_CaloriesRemainingProxy: 500 } }),
  createFood('GEAR_RawMeatBear', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_RawMeatDeer', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_RawMeatMoose', { food: { m_CaloriesRemainingProxy: 900 } }),
  createFood('GEAR_RawMeatRabbit', { food: { m_CaloriesRemainingProxy: 500 } }),
  createFood('GEAR_RawMeatWolf', { food: { m_CaloriesRemainingProxy: 800 } }),
  createFood('GEAR_RawRainbowTrout', { food: { m_CaloriesRemainingProxy: 440 } }),
  createFood('GEAR_RawSmallMouthBass', { food: { m_CaloriesRemainingProxy: 1000 } }),
  createFood('GEAR_Soda', { food: { m_CaloriesRemainingProxy: 250 } }),
  createFood('GEAR_SodaGrape', { food: { m_CaloriesRemainingProxy: 250 } }),
  createFood('GEAR_SodaOrange', { food: { m_CaloriesRemainingProxy: 250 } }),
  createFood('GEAR_TomatoSoupCan', { food: { m_CaloriesRemainingProxy: 300 } }),
  createFood('GEAR_BearQuarter', {
    bodyHarvest: {
      m_MeatAvailableKG: 40,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 10,
      m_Condition: 100,
    },
  }),
  createFood('GEAR_MooseQuarter', {
    bodyHarvest: {
      m_MeatAvailableKG: 35,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 10,
      m_Condition: 100,
    },
  }),
  createFood('GEAR_PtarmiganCarcass', {
    bodyHarvest: {
      m_MeatAvailableKG: 1,
      m_FeathersAvailableUnits: 1,
      m_Condition: 100,
      m_QuarterBagWasteMultiplier: 1,
    },
  }),
  createFood('GEAR_RabbitCarcass', {
    bodyHarvest: {
      m_MeatAvailableKG: 1,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 1,
      m_Condition: 100,
      m_QuarterBagWasteMultiplier: 1,
    },
  }),
  createFood('GEAR_StagQuarter', {
    bodyHarvest: {
      m_MeatAvailableKG: 10,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 2,
      m_Condition: 100,
      m_QuarterBagWasteMultiplier: 1,
    },
  }),
  createFood('GEAR_TimberwolfQuarter', {
    bodyHarvest: {
      m_MeatAvailableKG: 5,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 2,
      m_Condition: 100,
    },
  }),
  createFood('GEAR_WolfCarcass', {
    bodyHarvest: {
      m_MeatAvailableKG: 3,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 2,
      m_Condition: 100,
      m_QuarterDurationMinutes: 10,
    },
  }),
  createFood('GEAR_WolfQuarter', {
    bodyHarvest: {
      m_MeatAvailableKG: 4.3,
      m_HideAvailableUnits: 1,
      m_GutAvailableUnits: 2,
      m_Condition: 100,
    },
  }),

  // Tools
  createTool('GEAR_BedRoll', { bed: { m_BedRollState: BedRollState.Rolled } }),
  createTool('GEAR_BearSkinBedRoll', { bed: { m_BedRollState: BedRollState.Rolled } }),
  createTool('GEAR_RecycledCan'),
  createTool('GEAR_Arrow', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_ArrowHead', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_ArrowShaft', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BearSpear', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BearSpearBroken', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: Check these 3
  createTool('GEAR_BearSpearBrokenStory', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BearSpearRelic', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BlueFlare', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BearSpearStory', { flare: { m_StateProxy: FlareState.Fresh, m_HoursPlayed: 0 } }),
  createTool('GEAR_BoltCutters'),
  createTool('GEAR_Bow'),
  createTool('GEAR_Bow_Woodwrights'),
  createTool('GEAR_Brand', { torch: { m_StateProxy: TorchState.Fresh } }),
  createTool('GEAR_BrokenArrow'),
  createTool('GEAR_BrokenRifle'),
  createTool('GEAR_Bullet', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_CanOpener'),
  // TODO: Check why "m_InspectSerialized": "{\"m_SkipInspectVO\":true}"
  createTool('GEAR_CarBattery'),
  createTool('GEAR_Charcoal'),
  createTool('GEAR_CookingPot'),
  createTool('GEAR_CookingPotDummy'),
  createTool('GEAR_Detonator'),
  createTool('GEAR_ElevatorCrank'),
  createTool('GEAR_FireAxe'),
  createTool('GEAR_FishingLine', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: Check
  createTool('GEAR_FixedRifle'),
  createTool('GEAR_FlareA', { flare: { m_StateProxy: FlareState.Fresh } }),
  createTool('GEAR_FlareGun', { weapon: { m_Clip: [] } }),
  createTool('GEAR_FlareGunAmmoSingle', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_FlareGunAmmoSingle_SurvivorMission', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: Check
  createTool('GEAR_FlareGunCase_hangar'),
  createTool('GEAR_Flashlight', { flashlight: { m_CurrentBatteryCharge: 1 } }),
  createTool('GEAR_GunpowderCan', { powder: { m_WeightKG: 0.5 } }),
  createTool('GEAR_Hacksaw'),
  createTool('GEAR_Hammer'),
  createTool('GEAR_HandheldShortwave'),
  createTool('GEAR_Hatchet'),
  createTool('GEAR_HatchetImprovised'),
  createTool('GEAR_HighQualityTools'),
  createTool('GEAR_Hook', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_HookAndLine'),
  createTool('GEAR_JeremiahKnife'),
  createTool('GEAR_JerrycanRusty', { liquid: { m_LiquidLitersProxy: 3, m_LiquidQuality: LiquidQuality.NonPotable } }),
  createTool('GEAR_KeroseneLampB', { m_CurrentHPProxy: 0.25 }),
  createTool('GEAR_KeroseneLamp_Spelunkers', { m_CurrentHPProxy: 0.25 }),
  createTool('GEAR_Knife'),
  createTool('GEAR_KnifeImprovised'),
  createTool('GEAR_LampFuel', { liquid: { m_LiquidLitersProxy: 0.25, m_LiquidQuality: LiquidQuality.NonPotable } }),
  createTool('GEAR_LampFuelFull', { liquid: { m_LiquidLitersProxy: 0.5, m_LiquidQuality: LiquidQuality.NonPotable } }),
  createTool('GEAR_Line', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_MagnifyingLens'),
  // TODO: CHeck
  createTool('GEAR_NoiseMaker'),
  createTool('GEAR_Prybar'),
  createTool('GEAR_RecycledCan'),
  createTool('GEAR_Revolver', { weapon: { m_Clip: [] } }),
  createTool('GEAR_RevolverAmmoBox', { stackable: { m_UnitsProxy: 12 } }),
  createTool('GEAR_RevolverAmmoCasing', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_Rifle', { weapon: { m_Clip: [] } }),
  createTool('GEAR_Rifle_Vaughns', { weapon: { m_Clip: [] } }),
  createTool('GEAR_Rifle_Barbs', { weapon: { m_Clip: [] } }),
  createTool('GEAR_Rifle_Curators', { weapon: { m_Clip: [] } }),
  createTool('GEAR_RifleAmmoBox', { stackable: { m_UnitsProxy: 6 } }),
  createTool('GEAR_RifleAmmoCasing', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_RifleCleaningKit'),
  createTool('GEAR_RifleHuntingLodge'),
  createTool('GEAR_SewingKit'),
  createTool('GEAR_SharpeningStone'),
  createTool('GEAR_Shovel'),
  createTool('GEAR_SimpleTools'),
  createTool('GEAR_Snare', { snare: { m_State: SnareState.Default } }),
  createTool('GEAR_SpearHead'),
  createTool('GEAR_SprayPaintCan', { sprayPaint: { m_Colour: DecalColour.Red } }),
  createTool('GEAR_SprayPaintCanGlyphA', { sprayPaint: { m_Colour: DecalColour.Red } }),
  createTool('GEAR_StumpRemover'),
  createTool('GEAR_SurvivalElevatorCrank'),
  createTool('GEAR_Torch', { torch: { m_StateProxy: TorchState.Fresh } }),
  createTool('GEAR_WoodMatches', { stackable: { m_UnitsProxy: 12 } }),
  createTool('GEAR_PackMatches', { stackable: { m_UnitsProxy: 12 } }),
  createTool('GEAR_Accelerant', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: Check
  createTool('GEAR_AccelerantGunpowder'),
  createTool('GEAR_AccelerantKerosene', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_AccelerantMedium', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_Firestriker'),
  createTool('GEAR_FlintAndSteel'),

  // Materials
  createMaterial('GEAR_ArrowHead', { stackable: { m_UnitsProxy: 1 }, inProgress: { m_PercentComplete: 100 } }),
  createMaterial('GEAR_BearHide', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_BearHideDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_BirchSapling', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_BirchSaplingDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Cloth', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ClothSheet', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_CrowFeather', { stackable: { m_UnitsProxy: 1 } }),
  // TODO: "m_InspectSerialized": "{\"m_SkipInspectVO\":true}"
  createMaterial('GEAR_DustingSulfur', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ElevatorParts'),
  // TODO: "m_InspectSerialized": "{\"m_SkipInspectVO\":true}"
  createMaterial('GEAR_ElevatorPartsDead', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Firelog', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Gut', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_GutDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Hardwood', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_KnifeScrapMetal'),
  createMaterial('GEAR_Leather', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_LeatherDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_LeatherHide', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_LeatherHideDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_LeatherStrips', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_MapleSapling', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_MapleSaplingDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_MooseHide', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_MooseHideDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Nylon', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_OldMansBeardHarvested', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_RabbitPelt', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_RabbitPeltDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ReclaimedWoodB', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ReishiMushroom', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_RoseHip', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ScrapLead', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_ScrapMetal', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Softwood', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Stick', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Stone', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_WolfPelt', { stackable: { m_UnitsProxy: 1 }, evolve: {} }),
  createMaterial('GEAR_WolfPeltDried', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_BarkTinder', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BookA', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BookB', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BookC', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BookD', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_BookF', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_CashBundle', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_CattailTinder', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_Coal', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_Newsprint', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_NewsprintRoll', { stackable: { m_UnitsProxy: 1 } }),
  createTool('GEAR_PaperStack', { stackable: { m_UnitsProxy: 1 } }),
  createMaterial('GEAR_Tinder', { stackable: { m_UnitsProxy: 1 } }),

  // Books
  createBook('GEAR_BookArchery'),
  createBook('GEAR_BookCarcassHarvesting'),
  createBook('GEAR_BookCooking'),
  createBook('GEAR_BookFireStarting'),
  createBook('GEAR_BookGunsmithing'),
  createBook('GEAR_BookIceFishing'),
  createBook('GEAR_BookMending'),
  createBook('GEAR_BookRevolverFirearm'),
  createBook('GEAR_BookRifleFirearm'),
  createBook('GEAR_BookRifleFirearmAdvanced'),
  createBook('GEAR_BookTallTalesFishing'),
  createBook('GEAR_BookTallTalesGlowCave'),
  createBook('GEAR_BookTallTalesStag'),
  createBook('GEAR_BookTallTalesYeti'),

  // Collectible
  createCollectible('GEAR_RecipeCardFishcakes'),
  createCollectible('GEAR_RecipeCardPancakePeach'),
  createCollectible('GEAR_RecipeCardPieFishermans'),
  createCollectible('GEAR_RecipeCardPieForagers'),
  createCollectible('GEAR_RecipeCardPieMeat'),
  createCollectible('GEAR_RecipeCardPiePredator'),
  createCollectible('GEAR_RecipeCardPorridgeFruit'),
  createCollectible('GEAR_RecipeCardStewMeat'),
  createCollectible('GEAR_RecipeCardStewVegetables'),
  createCollectible('GEAR_WaterTowerNote'),
  createCollectible('GEAR_AuroraHatchCode'),
  createCollectible('GEAR_BackerNote1A'),
  createCollectible('GEAR_BackerNote1B'),
  createCollectible('GEAR_BackerNote1C'),
  createCollectible('GEAR_BackerNote2A'),
  createCollectible('GEAR_BackerNote2B'),
  createCollectible('GEAR_BackerNote2C'),
  createCollectible('GEAR_BackerNote3A'),
  createCollectible('GEAR_BackerNote3B'),
  createCollectible('GEAR_BackerNote3C'),
  createCollectible('GEAR_BackerNote4A'),
  createCollectible('GEAR_BackerNote4B'),
  createCollectible('GEAR_BackerNote4C'),
  createCollectible('GEAR_BankManagerHouseKey'),
  createCollectible('GEAR_BankVaultCode'),
  createCollectible('GEAR_BlackrockAdminNote'),
  createCollectible('GEAR_BlackrockAmmoRoomNote'),
  createCollectible('GEAR_BlackrockCodeNote'),
  createCollectible('GEAR_BlackrockConvictNote1'),
  createCollectible('GEAR_BlackrockConvictNote2'),
  createCollectible('GEAR_BlackrockConvictNote3'),
  createCollectible('GEAR_BlackrockMemo'),
  createCollectible('GEAR_BlackrockSecurityNote'),
  createCollectible('GEAR_BlackrockTowerNote'),
  createCollectible('GEAR_CacheNote_ChurchMarshDir'),
  createCollectible('GEAR_CampOfficeCollectible'),
  createCollectible('GEAR_CanneryCodeNote'),
  createCollectible('GEAR_CanneryMemo'),
  createCollectible('GEAR_CannerySurvivalPath'),
  createCollectible('GEAR_CanyonClimbersCaveNote'),
  createCollectible('GEAR_CanyonDeadClimberNote'),
  createCollectible('GEAR_CanyonFishingHutJournal'),
  createCollectible('GEAR_CanyonMinersNote'),
  createCollectible('GEAR_CaveCacheNote'),
  createCollectible('GEAR_ChurchHymn'),
  createCollectible('GEAR_ChurchNoteEP1'),
  createCollectible('GEAR_ClimbersJournal'),
  createCollectible('GEAR_ConvictCorpseNote'),
  createCollectible('GEAR_DamCollectible1'),
  createCollectible('GEAR_DamControlRoomCodeNote'),
  createCollectible('GEAR_DamElevatorNotice'),
  createCollectible('GEAR_DamExitCodeNote'),
  createCollectible('GEAR_DamFenceKey'),
  createCollectible('GEAR_DamGarbageLetter'),
  createCollectible('GEAR_DamLockerKey'),
  createCollectible('GEAR_DamOfficeKey'),
  createCollectible('GEAR_DamTrailerBCrewNote'),
  ...new Array(11).fill(null).map((v, i) => createCollectible(`GEAR_DarkwalkerDiary${i + 1}`)),
  createCollectible('GEAR_DarkwalkerID'),
  ...new Array(5).fill(null).map((v, i) => createCollectible(`GEAR_DeadmanNote${i + 1}`)),
  createCollectible('GEAR_EmergencyKitNote'),
  createCollectible('GEAR_Ep3_ChurchArtifact'),
  createCollectible('GEAR_Ep3_ChurchFlyer'),
  createCollectible('GEAR_Ep3_ChurchMotelLetter'),
  createCollectible('GEAR_Ep3_ChurchNewsClipping'),
  createCollectible('GEAR_Ep3_ChurchThankyouLetter'),
  createCollectible('GEAR_Ep3_ChurchTheftReport'),
  createCollectible('GEAR_EP3_JoplinBunkerNote'),
  createCollectible('GEAR_EP3_JoplinBunkerNote2'),
  createCollectible('GEAR_EP3_JoplinCacheNote'),
  ...new Array(6).fill(null).map((v, i) => createCollectible(`GEAR_EP3_PatientHistory0${i + 1})`)),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_Ep3ForestTalkers_FTCollectible${i + 1}`)),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_Ep3ForestTalkers_PVCollectible${i + 1}`)),
  createCollectible('GEAR_Ep3HallFlyer'),
  createCollectible('GEAR_Ep3Rosary'),
  createCollectible('GEAR_Ep3TomsMap'),
  createCollectible('GEAR_Ep4_BlackrockEscapeNote1'),
  createCollectible('GEAR_Ep4_BlackrockNoisemakerNote'),
  createCollectible('GEAR_Ep4_BlackrockRationsNote'),
  createCollectible('GEAR_Ep4_ForestTalkerPlans'),
  createCollectible('GEAR_EP4_InfirmaryMeds'),
  createCollectible('GEAR_Ep4_InfirmaryMedsNote'),
  createCollectible('GEAR_Ep4_JaceCarCollectible'),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_Ep4_LetterForestTalker${i + 1}`)),
  createCollectible('GEAR_Ep4_LetterForestTalkerFinal'),
  createCollectible('GEAR_Ep4_MineDangerNote'),
  createCollectible('GEAR_EP4_RooftopKey'),
  createCollectible('GEAR_Ep4_SubStationMemo'),
  createCollectible('GEAR_Ep4ConvictCacheNote1'),
  createCollectible('GEAR_Ep4GoldNugget'),
  createCollectible('GEAR_Ep4LockerKey1'),
  createCollectible('GEAR_Ep4LockerKey2'),
  createCollectible('GEAR_Ep4LockerKey3'),
  createCollectible('GEAR_Ep4LockerKey8'),
  createCollectible('GEAR_Ep4LostWorkerNote'),
  createCollectible('GEAR_Ep4MineGateKey'),
  createCollectible('GEAR_Ep4PowerWorkerID1'),
  createCollectible('GEAR_Ep4PowerWorkerID2'),
  createCollectible('GEAR_Ep4PrisonGateKey'),
  createCollectible('GEAR_Ep4ProsepectorNote'),
  createCollectible('GEAR_Ep4RumourLateEmployee'),
  createCollectible('GEAR_Ep4RumoursHatchLocation'),
  createCollectible('GEAR_Ep4RumoursHermitReport'),
  createCollectible('GEAR_Ep4RumoursLockBoxKey'),
  createCollectible('GEAR_Ep4RumoursPrisonRelease'),
  createCollectible('GEAR_Ep4RumoursRamblings1'),
  createCollectible('GEAR_Ep4RumoursWolfReport'),
  createCollectible('GEAR_Ep4RumoursWolfStudy'),
  createCollectible('GEAR_Ep4SawFarmNote'),
  createCollectible('GEAR_Ep4SteamTunnelCampNote'),
  createCollectible('GEAR_FarmerDepositBoxKey'),
  createCollectible('GEAR_ForestTalkerDamNote'),
  createCollectible('GEAR_ForestTalkerFlyer'),
  createCollectible('GEAR_ForestTalkerHiddenItem'),
  createCollectible('GEAR_ForestTalkerMap'),
  createCollectible('GEAR_ForestTalkerThankyou'),
  createCollectible('GEAR_ForestTalkerThankyou2'),
  createCollectible('GEAR_ForgeBlueprints'),
  createCollectible('GEAR_ForgeCacheNote'),
  createCollectible('GEAR_GMExtraSuppliesNote'),
  createCollectible('GEAR_GreyMotherPearls'),
  createCollectible('GEAR_GreyMotherTrunkKey'),
  createCollectible('GEAR_HankHatchCode'),
  createCollectible('GEAR_HankJournal1'),
  createCollectible('GEAR_HankJournal2'),
  createCollectible('GEAR_HankLockboxKey'),
  createCollectible('GEAR_HankNeiceLetter'),
  createCollectible('GEAR_HardCase'),
  createCollectible('GEAR_HardCase_hangar'),
  createCollectible('GEAR_HC_EP1_FM_TreeRoots_Dir'),
  createCollectible('GEAR_HC_EP1_ML_AlansCave_Dir'),
  createCollectible('GEAR_HC_EP1_ML_ClearCut_Dir'),
  createCollectible('GEAR_HC_EP1_ML_TracksEnt_Dir'),
  createCollectible('GEAR_HC_EP1_RW_HunterLodge_Dir'),
  createCollectible('GEAR_HC_EP1_RW_RavineEnd_Dir'),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_KnowledgeBRbook${i + 1}`)),
  createCollectible('GEAR_KnowledgeCarterDam'),
  ...new Array(4).fill(null).map((v, i) => createCollectible(`GEAR_KnowledgeCollapse${i + 1}`)),
  createCollectible('GEAR_KnowledgeMilton'),
  createCollectible('GEAR_KnowledgeMysteryLake'),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_KnowledgePVbook${i + 1}`)),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_LakeCabinKey${i + 1}`)),
  createCollectible('GEAR_LakeCabinKey8'),
  createCollectible('GEAR_LakeDeerHuntNote'),
  createCollectible('GEAR_LakeIncidentNote'),
  createCollectible('GEAR_LakeLetter1'),
  createCollectible('GEAR_LakesFlareCacheNote'),
  createCollectible('GEAR_LakeTrailerKey1'),
  createCollectible('GEAR_LakeWolfCullNote'),
  createCollectible('GEAR_LetterBundle'),
  createCollectible('GEAR_LilyClimbMap'),
  createCollectible('GEAR_LoreNoteA'),
  createCollectible('GEAR_LoreNoteB'),
  createCollectible('GEAR_LoreNoteC'),
  createCollectible('GEAR_LoreNoteD'),
  createCollectible('GEAR_MedicalSupplies'),
  createCollectible('GEAR_MedicalSupplies_hangar'),
  createCollectible('GEAR_MiltonCaveLetter'),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_MiltonDepositBoxKey${i + 1}`)),
  createCollectible('GEAR_MiltonFlareGunNote'),
  createCollectible('GEAR_MiltonGardenCache'),
  createCollectible('GEAR_MiltonLetter1'),
  createCollectible('GEAR_MiltonLetter2'),
  createCollectible('GEAR_MiltonParkNotice'),
  createCollectible('GEAR_MiltonPostOfficeCollectible1'),
  createCollectible('GEAR_MiltonStoreNotice'),
  createCollectible('GEAR_MinePipeValve'),
  createCollectible('GEAR_MountainTownFarmKey'),
  createCollectible('GEAR_MountainTownFarmNote'),
  createCollectible('GEAR_MountainTownLockBoxKey'),
  createCollectible('GEAR_NoteMCU'),
  createCollectible('GEAR_OldLadyStolenItem'),
  createCollectible('GEAR_PassengerManifest'),
  ...new Array(10).fill(null).map((v, i) => createCollectible(`GEAR_PlaneCrashID${i + 1}`)),
  createCollectible('GEAR_PlantSurvivalNote'),
  createCollectible('GEAR_PostCard_AC_CentralSpire'),
  createCollectible('GEAR_PostCard_AC_TopShelf'),
  createCollectible('GEAR_PostCard_BI_EchoOne-RadioTower'),
  createCollectible('GEAR_PostCard_BR_Canyon'),
  createCollectible('GEAR_PostCard_BR_Prison'),
  createCollectible('GEAR_PostCard_CR_AbandonedLookout'),
  createCollectible('GEAR_PostCard_FM_MuskegOverlook'),
  createCollectible('GEAR_PostCard_FM_ShortwaveTower'),
  createCollectible('GEAR_PostCard_ML_ForestryLookout'),
  createCollectible('GEAR_PostCard_ML_LakeOverlook'),
  createCollectible('GEAR_PostCard_MT_RadioTower'),
  createCollectible('GEAR_PostCard_PV_SignalHill'),
  createCollectible('GEAR_PostCard_RV_Pensive'),
  createCollectible('GEAR_PostCard_TM_AndresPeak'),
  createCollectible('GEAR_PostCard_TM_TailSection'),
  createCollectible('GEAR_PrisonBusNote'),
  createCollectible('GEAR_RadioParts'),
  createCollectible('GEAR_RuralRegionFarmKey'),
  createCollectible('GEAR_ShedCodeNote'),
  createCollectible('GEAR_SteamPipeValve'),
  createCollectible('GEAR_TrailerSupplies'),
  createCollectible('GEAR_TransponderParts'),
  createCollectible('GEAR_UtilitiesBill'),
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_VisorNoteMT${i + 1}`)), //there may be more
  ...new Array(3).fill(null).map((v, i) => createCollectible(`GEAR_VisorNoteML${i + 1}`)),
  ...new Array(1).fill(null).map((v, i) => createCollectible(`GEAR_VisorNoteFM${i + 1}`)),
  createCollectible('GEAR_VisorNoteMTKey1'),
  createCollectible('GEAR_WaterpumpCrank'),
  createCollectible('GEAR_WaterTowerNote'),
  createCollectible('GEAR_WaterTowerNote'),

  // Unknown
  createUnknown('GEAR_AstridBackPack_hangar'),
  createUnknown('GEAR_FoodSupplies_hangar'),
  createUnknown('GEAR_ForestTalkerBloodyItem'),
  createUnknown('GEAR_SurvivalSchoolClothing'),
  createUnknown('GEAR_SurvivalSchoolDeerHunt'),
  createUnknown('GEAR_SurvivalSchoolFishing'),
  createUnknown('GEAR_SurvivalSchoolPlants'),
  createUnknown('GEAR_SurvivalSchoolRabbits'),
  createUnknown('GEAR_SurvivalSchoolWolfHunt'),
  createUnknown('GEAR_TechnicalBackpack'),
  createUnknown('GEAR_ForestTalkerBloodyItem'),

  // Trader quest
  createUnknown('GEAR_BunkerPapers1'),
  createUnknown('GEAR_BunkerPapers2'),
  createUnknown('GEAR_BunkerPapers3'),
  createUnknown('GEAR_BunkerPapers4'),
  createUnknown('GEAR_BunkerSchematic_A'),
  createUnknown('GEAR_BunkerSchematic_B'),
  createUnknown('GEAR_BunkerSchematic_C'),
  createUnknown('GEAR_HiddenWallCache1'),
  createUnknown('GEAR_HiddenWallCache2'),
  createUnknown('GEAR_HiddenWallCache3'),
  createUnknown('GEAR_TraderWyattBonesNote'),
  createUnknown('GEAR_HatchWheel')
];

export default availableItems;

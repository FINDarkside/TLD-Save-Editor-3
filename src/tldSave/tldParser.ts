import type InventorySaveDataProxy from './types/generated/InventorySaveDataProxy';
import type GlobalSaveGameFormat from './types/generated/GlobalSaveGameFormat';
import type ConditionSaveDataProxy from './types/generated/ConditionSaveDataProxy';
import type SlotData from './types/generated/SlotData';
import { parseArray, parseObject } from './parser';
import HungerSaveDataProxy from './types/generated/HungerSaveDataProxy';
import ThirstSaveDataProxy from './types/generated/ThirstSaveDataProxy';
import FatigueSaveDataProxy from './types/generated/FatigueSaveDataProxy';
import FreezingSaveDataProxy from './types/generated/FreezingSaveDataProxy';
import WillpowerSaveDataProxy from './types/generated/WillpowerSaveDataProxy';
import GearItemSaveDataProxy from './types/generated/GearItemSaveDataProxy';
import InventoryItemSaveData from './types/generated/InventoryItemSaveData';
import FoodItemSaveDataProxy from './types/generated/FoodItemSaveDataProxy';
import StackableItemSaveDataProxy from './types/generated/StackableItemSaveDataProxy';
import LiquidItemSaveDataProxy from './types/generated/LiquidItemSaveDataProxy';
import FlareItemSaveDataProxy from './types/generated/FlareItemSaveDataProxy';
import FlashlightItemSaveDataProxy from './types/generated/FlashlightItemSaveDataProxy';
import KeroseneLampItemSaveDataProxy from './types/generated/KeroseneLampItemSaveDataProxy';
import ClothingItemSaveDataProxy from './types/generated/ClothingItemSaveDataProxy';
import GunItemSaveDataProxy from './types/generated/GunItemSaveDataProxy';
import WaterSupplySaveDataProxy from './types/generated/WaterSupplySaveDataProxy';
import BedSaveDataProxy from './types/generated/BedSaveDataProxy';
import SmashableItemSaveDataProxy from './types/generated/SmashableItemSaveDataProxy';
import MatchesItemSaveDataProxy from './types/generated/MatchesItemSaveDataProxy';
import SnareItemSaveDataProxy from './types/generated/SnareItemSaveDataProxy';
import InProgressCraftItemSaveDataProxy from './types/generated/InProgressCraftItemSaveDataProxy';
import TorchItemSaveDataProxy from './types/generated/TorchItemSaveDataProxy';
import EvolveItemSaveData from './types/generated/EvolveItemSaveData';
import ResearchItemSaveData from './types/generated/ResearchItemSaveData';
import BodyHarvestSaveDataProxy from './types/generated/BodyHarvestSaveDataProxy';
import CookingPotItemSaveDataProxy from './types/generated/CookingPotItemSaveDataProxy';
import PowderItemSaveDataProxy from './types/generated/PowderItemSaveDataProxy';
import MillableSaveDataProxy from './types/generated/MillableSaveDataProxy';
import SprayPaintCanItemSaveDataProxy from './types/generated/SprayPaintCanItemSaveDataProxy';

const inventoryParser = parseObject({
  items: parseArray(
    parseObject({
      gear: parseObject({
        stackable: parseObject().from('m_StackableItemSerialized').json().withFields<StackableItemSaveDataProxy>(),
        food: parseObject().from('m_FoodItemSerialized').json().withFields<FoodItemSaveDataProxy>(),
        liquid: parseObject().from('m_LiquidItemSerialized').json().withFields<LiquidItemSaveDataProxy>(),
        flare: parseObject().from('m_FlareItemSerialized').json().withFields<FlareItemSaveDataProxy>(),
        flashlight: parseObject().from('m_FlashlightItemSerialized').json().withFields<FlashlightItemSaveDataProxy>(),
        kerosene: parseObject().from('m_KeroseneLampItemSerialized').json().withFields<KeroseneLampItemSaveDataProxy>(),
        clothing: parseObject().from('m_ClothingItemSerialized').json().withFields<ClothingItemSaveDataProxy>(),
        weapon: parseObject().from('m_WeaponItemSerialized').json().withFields<GunItemSaveDataProxy>(),
        water: parseObject().from('m_WaterSupplySerialized').json().withFields<WaterSupplySaveDataProxy>(),
        bed: parseObject().from('m_BedSerialized').json().withFields<BedSaveDataProxy>(),
        smashable: parseObject().from('m_SmashableItemSerialized').json().withFields<SmashableItemSaveDataProxy>(),
        matches: parseObject().from('m_MatchesItemSerialized').json().withFields<MatchesItemSaveDataProxy>(),
        snare: parseObject().from('m_SnareItemSerialized').json().withFields<SnareItemSaveDataProxy>(),
        inProgress: parseObject().from('m_InProgressItemSerialized').json().withFields<InProgressCraftItemSaveDataProxy>(),
        torch: parseObject().from('m_TorchItemSerialized').json().withFields<TorchItemSaveDataProxy>(),
        // m_CollectibleNoteSerialized
        evolve: parseObject().from('m_EvolveItemSerialized').json().withFields<EvolveItemSaveData>(),
        // m_ObjectGuidSerialized
        // m_MissionObjectSerialized
        research: parseObject().from('m_ResearchItemSerialized').json().withFields<ResearchItemSaveData>(),
        // ownership
        bodyHarvest: parseObject().from('m_BodyHarvestSerialized').json().withFields<BodyHarvestSaveDataProxy>(),
        cookingPot: parseObject().from('m_CookingPotItemSerialized').json().withFields<CookingPotItemSaveDataProxy>(),
        // m_PlacePointGuidSerialized
        // m_PlacePointNameSerialized
        // m_InspectSerialized
        // m_RigidBodySerialized
        powder: parseObject().from('m_PowderItemSerialized').json().withFields<PowderItemSaveDataProxy>(),
        millable: parseObject().from('m_MillableSerialized').json().withFields<MillableSaveDataProxy>(),
        sprayPaint: parseObject().from('m_SprayPaintCanSerialized').json().withFields<SprayPaintCanItemSaveDataProxy>(),
      })
        .from('m_SerializedGear')
        .json()
        .withFields<GearItemSaveDataProxy>(),
    }).withFields<InventoryItemSaveData>()
  ).from('m_SerializedItems'),
})
  .from('m_Inventory_Serialized')
  .json()
  .withFields<InventorySaveDataProxy>();

const tldParser = parseObject({
  m_Dict: parseObject({
    global: parseObject({
      inventory: inventoryParser,
      condition: parseObject().from('m_Condition_Serialized').json().withFields<ConditionSaveDataProxy>(),
      hunger: parseObject().from('m_Hunger_Serialized').json().withFields<HungerSaveDataProxy>(),
      thirst: parseObject().from('m_Thirst_Serialized').json().withFields<ThirstSaveDataProxy>(),
      fatigue: parseObject().from('m_Fatigue_Serialized').json().withFields<FatigueSaveDataProxy>(),
      freezing: parseObject().from('m_Freezing_Serialized').json().withFields<FreezingSaveDataProxy>(),
      willpower: parseObject().from('m_Willpower_Serialized').json().withFields<WillpowerSaveDataProxy>(),
    })
      .json()
      .compressed()
      .withFields<GlobalSaveGameFormat>(),
  }),
})
  .json()
  .compressed()
  .withFields<SlotData>();

const slotParser = parseObject().json().compressed().withFields<SlotData>();

//  const save = tldParser.parse(Buffer.alloc(1));
// save?.m_Dict.global.condition;

export default tldParser;

export { slotParser };

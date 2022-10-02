import { parseArray, parseObject, parseValue } from '../parser';
import BedSaveDataProxy from '../types/generated/BedSaveDataProxy';
import BodyHarvestSaveDataProxy from '../types/generated/BodyHarvestSaveDataProxy';
import ClothingItemSaveDataProxy from '../types/generated/ClothingItemSaveDataProxy';
import CookingPotItemSaveDataProxy from '../types/generated/CookingPotItemSaveDataProxy';
import EvolveItemSaveData from '../types/generated/EvolveItemSaveData';
import FlareItemSaveDataProxy from '../types/generated/FlareItemSaveDataProxy';
import FlashlightItemSaveDataProxy from '../types/generated/FlashlightItemSaveDataProxy';
import FoodItemSaveDataProxy from '../types/generated/FoodItemSaveDataProxy';
import GearItemSaveDataProxy from '../types/generated/GearItemSaveDataProxy';
import GunItemSaveDataProxy from '../types/generated/GunItemSaveDataProxy';
import InProgressCraftItemSaveDataProxy from '../types/generated/InProgressCraftItemSaveDataProxy';
import InspectSaveDataProxy from '../types/generated/InspectSaveDataProxy';
import InventoryItemSaveData from '../types/generated/InventoryItemSaveData';
import type InventorySaveDataProxy from '../types/generated/InventorySaveDataProxy';
import KeroseneLampItemSaveDataProxy from '../types/generated/KeroseneLampItemSaveDataProxy';
import LiquidItemSaveDataProxy from '../types/generated/LiquidItemSaveDataProxy';
import MatchesItemSaveDataProxy from '../types/generated/MatchesItemSaveDataProxy';
import MillableSaveDataProxy from '../types/generated/MillableSaveDataProxy';
import MissionObjectIdentifierSaveProxy from '../types/generated/MissionObjectIdentifierSaveProxy';
import OwnershipOverrideSaveDataProxy from '../types/generated/OwnershipOverrideSaveDataProxy';
import PowderItemSaveDataProxy from '../types/generated/PowderItemSaveDataProxy';
import ResearchItemSaveData from '../types/generated/ResearchItemSaveData';
import RigidBodySaveData from '../types/generated/RigidBodySaveData';
import SmashableItemSaveDataProxy from '../types/generated/SmashableItemSaveDataProxy';
import SnareItemSaveDataProxy from '../types/generated/SnareItemSaveDataProxy';
import SprayPaintCanItemSaveDataProxy from '../types/generated/SprayPaintCanItemSaveDataProxy';
import StackableItemSaveDataProxy from '../types/generated/StackableItemSaveDataProxy';
import TorchItemSaveDataProxy from '../types/generated/TorchItemSaveDataProxy';
import WaterSupplySaveDataProxy from '../types/generated/WaterSupplySaveDataProxy';

const gearParser = parseObject({
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
  // m_CollectibleNoteSerialized not used
  evolve: parseObject().from('m_EvolveItemSerialized').json().withFields<EvolveItemSaveData>(),
  // m_ObjectGuidSerialized is just a string
  missionObject: parseValue<MissionObjectIdentifierSaveProxy[]>().from('m_MissionObjectSerialized').json(),
  research: parseObject().from('m_ResearchItemSerialized').json().withFields<ResearchItemSaveData>(),
  ownership: parseObject().from('m_OwnershipOverrideSerialized').json().withFields<OwnershipOverrideSaveDataProxy>(),
  bodyHarvest: parseObject().from('m_BodyHarvestSerialized').json().withFields<BodyHarvestSaveDataProxy>(),
  cookingPot: parseObject().from('m_CookingPotItemSerialized').json().withFields<CookingPotItemSaveDataProxy>(),
  // m_PlacePointGuidSerialized is just a string
  // m_PlacePointNameSerialized is just a string
  inspect: parseObject().from('m_InspectSerialized').json().withFields<InspectSaveDataProxy>(),
  rigidBody: parseObject().from('m_RigidBodySerialized').json().withFields<RigidBodySaveData>(),
  powder: parseObject().from('m_PowderItemSerialized').json().withFields<PowderItemSaveDataProxy>(),
  millable: parseObject().from('m_MillableSerialized').json().withFields<MillableSaveDataProxy>(),
  sprayPaint: parseObject().from('m_SprayPaintCanSerialized').json().withFields<SprayPaintCanItemSaveDataProxy>(),
})
  .json()
  .withFields<GearItemSaveDataProxy>();

const itemParser = parseObject({
  gear: gearParser.from('m_SerializedGear'),
}).withFields<InventoryItemSaveData>();

const inventoryParser = parseObject({
  items: parseArray(itemParser).from('m_SerializedItems'),
})
  .from('m_Inventory_Serialized')
  .json()
  .withFields<InventorySaveDataProxy>();

export default inventoryParser;

export { gearParser };

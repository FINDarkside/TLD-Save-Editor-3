import type InventorySaveDataProxy from './types/generated/InventorySaveDataProxy';
import type GlobalSaveGameFormat from './types/generated/GlobalSaveGameFormat';
import type ConditionSaveDataProxy from './types/generated/ConditionSaveDataProxy';
import type SlotData from './types/generated/SlotData';
import { parseArray, parseObject, parseValue } from './parser';
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
import GameManagerSaveDataProxy from './types/generated/GameManagerSaveDataProxy';
import HudManagerSaveDataProxy from './types/generated/HudManagerSaveDataProxy';
import TimeOfDaySaveDataProxy from './types/generated/TimeOfDaySaveDataProxy';
import SceneTransitionData from './types/generated/SceneTransitionData';
import WindSaveDataProxy from './types/generated/WindSaveDataProxy';
import ActiveWindSettings from './types/generated/ActiveWindSettings';
import WeatherSaveDataProxy from './types/generated/WeatherSaveDataProxy';
import WeatherTransitionSaveDataProxy from './types/generated/WeatherTransitionSaveDataProxy';
import WeatherSetInstanceSaveData from './types/generated/WeatherSetInstanceSaveData';
import EncumberSaveDataProxy from './types/generated/EncumberSaveDataProxy';
import PlayerManagerSaveDataProxy from './types/generated/PlayerManagerSaveDataProxy';
import PlayerClimbRopeProxy from './types/generated/PlayerClimbRopeProxy';
import PlayerSkillsSaveData from './types/generated/PlayerSkillsSaveData';
import PlayerGameStatsProxy from './types/generated/PlayerGameStatsProxy';
import HypothermiaSaveDataProxy from './types/generated/HypothermiaSaveDataProxy';
import WellFedSaveDataProxy from './types/generated/WellFedSaveDataProxy';
import FrostbiteSaveDataProxy from './types/generated/FrostbiteSaveDataProxy';
import FoodPoisoningSaveDataProxy from './types/generated/FoodPoisoningSaveDataProxy';
import DysenterySaveDataProxy from './types/generated/DysenterySaveDataProxy';
import SprainPainSaveDataProxy from './types/generated/SprainPainSaveDataProxy';
import SprainedAnkleSaveDataProxy from './types/generated/SprainedAnkleSaveDataProxy';
import SprainedWristSaveDataProxy from './types/generated/SprainedWristSaveDataProxy';
import SprainsSaveDataProxy from './types/generated/SprainsSaveDataProxy';
import BurnsSaveDataProxy from './types/generated/BurnsSaveDataProxy';
import BurnsElectricSaveDataProxy from './types/generated/BurnsElectricSaveDataProxy';
import BloodLossSaveDataProxy from './types/generated/BloodLossSaveDataProxy';
import BrokenRibSaveDataProxy from './types/generated/BrokenRibSaveDataProxy';
import InfectionSaveDataProxy from './types/generated/InfectionSaveDataProxy';
import InfectionRiskSaveDataProxy from './types/generated/InfectionRiskSaveDataProxy';
import LogSaveDataProxy from './types/generated/LogSaveDataProxy';
import RestSaveDataProxy from './types/generated/RestSaveDataProxy';
import FlyoverDataProxy from './types/generated/FlyoverDataProxy';
import AchievementSaveData from './types/generated/AchievementSaveData';
import ExperienceModeManagerSaveDataProxy from './types/generated/ExperienceModeManagerSaveDataProxy';
import AuroraManagerSaveDataProxy from './types/generated/AuroraManagerSaveDataProxy';
import PlayerMovementSaveDataProxy from './types/generated/PlayerMovementSaveDataProxy';
import PlayerStruggleSaveDataProxy from './types/generated/PlayerStruggleSaveDataProxy';
import StatContainer from './types/generated/StatContainer';
import EmergencyStimParams from './types/generated/EmergencyStimParams';
import EnergyBoostParams from './types/generated/EnergyBoostParams';
import HeadacheParams from './types/generated/HeadacheParams';
import MusicEventSaveData from './types/generated/MusicEventSaveData';
import ChimneySaveList from './types/generated/ChimneySaveList';
import LinkedChimneySaveData from './types/generated/LinkedChimneySaveData';
import CabinFeverSaveDataProxy from './types/generated/CabinFeverSaveDataProxy';
import IntestinalParasitesSaveDataProxy from './types/generated/IntestinalParasitesSaveDataProxy';
import SnowfallManagerSaveDataProxy from './types/generated/SnowfallManagerSaveDataProxy';
import SnowfallRecordSaveDataProxy from './types/generated/SnowfallRecordSaveDataProxy';
import PlayerAnimationSaveDataProxy from './types/generated/PlayerAnimationSaveDataProxy';
import SkillsManagerSaveData from './types/generated/SkillsManagerSaveData';
import Skill_FirestartingSaveData from './types/generated/Skill_FirestartingSaveData';
import Skill_CarcassHarvestingSaveData from './types/generated/Skill_CarcassHarvestingSaveData';
import Skill_CookingSaveData from './types/generated/Skill_CookingSaveData';
import Skill_IceFishingSaveData from './types/generated/Skill_IceFishingSaveData';
import Skill_RifleSaveData from './types/generated/Skill_RifleSaveData';
import Skill_ArcherySaveData from './types/generated/Skill_ArcherySaveData';
import Skill_ClothingRepairSaveData from './types/generated/Skill_ClothingRepairSaveData';
import Skill_RevolverSaveData from './types/generated/Skill_RevolverSaveData';
import Skill_GunsmithingSaveData from './types/generated/Skill_GunsmithingSaveData';
import FeatEnabledTrackerSaveData from './types/generated/FeatEnabledTrackerSaveData';
import TrustManagerSaveData from './types/generated/TrustManagerSaveData';
import WorldMapSaveData from './types/generated/WorldMapSaveData';
import MapSaveData from './types/generated/MapSaveData';
import BearHuntReduxSaveData from './types/generated/BearHuntReduxSaveData';
import KnowledgeManagerSaveData from './types/generated/KnowledgeManagerSaveData';
import CollectionManagerSaveData from './types/generated/CollectionManagerSaveData';
import AuroraScreenManagerSaveDataProxy from './types/generated/AuroraScreenManagerSaveDataProxy';
import StoryMissionSaveData from './types/generated/StoryMissionSaveData';
import PhoneManagerSaveData from './types/generated/PhoneManagerSaveData';
import BodyCarrySaveDataProxy from './types/generated/BodyCarrySaveDataProxy';
import NPCGlobalSaveData from './types/generated/NPCGlobal';
import PackManagerGlobalDataProxy from './types/generated/PackManagerGlobalDataProxy';
import RockCacheDestroyedInfo from './types/generated/RockCacheDestroyedInfo';
import RockCacheInfoSaveList from './types/generated/RockCacheInfoSaveList';
import Panel_SprayPaintSaveDataProxy from './types/generated/Panel_SprayPaintSaveDataProxy';
import InvisibleEntityManagerGlobalDataProxy from './types/generated/InvisibleEntityManagerGlobalDataProxy';
import ToxicFogManagerSaveDataProxy from './types/generated/ToxicFogManagerSaveDataProxy';
import FearSaveDataProxy from './types/generated/FearSaveDataProxy';
import AnxietySaveDataProxy from './types/generated/AnxietySaveDataProxy';
import SuffocatingSaveDataProxy from './types/generated/SuffocatingSaveDataProxy';
import SceneManagerSaveDataProxy from './types/generated/SceneManagerSaveDataProxy';
import MissionObjectIdentifierSaveProxy from './types/generated/MissionObjectIdentifierSaveProxy';
import OwnershipOverrideSaveDataProxy from './types/generated/OwnershipOverrideSaveDataProxy';
import InspectSaveDataProxy from './types/generated/InspectSaveDataProxy';
import RigidBodySaveData from './types/generated/RigidBodySaveData';
import MissionServicesManagerSaveProxy from './types/generated/MissionServicesManagerSaveProxy';
import MissionObjectiveTableSaveDataProxy from './types/generated/MissionObjectiveTableSaveDataProxy';
import KnowledgeCateogry from './types/generated/enums/KnowledgeCateogry';
import HighResolutionTimerSaveDataProxy from './types/generated/HighResolutionTimerSaveDataProxy';

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
      gameManager: parseObject({
        sceneTransition: parseObject().from('m_SceneTransitionDataSerialized').json().withFields<SceneTransitionData>(),
      })
        .from('m_GameManagerSerialized')
        .json()
        .withFields<GameManagerSaveDataProxy>(),
      hudManager: parseObject().from('m_HudManagerSerialized').json().withFields<HudManagerSaveDataProxy>(),
      timeOfDay: parseObject().from('m_TimeOfDay_Serialized').json().withFields<TimeOfDaySaveDataProxy>(),
      wind: parseObject({
        active: parseObject().from('m_ActiveSettingsSerialized').json().withFields<ActiveWindSettings>(),
        source: parseObject().from('m_SourceSettingsSerialized').json().withFields<ActiveWindSettings>(),
        target: parseObject().from('m_TargetSettingsSerialized').json().withFields<ActiveWindSettings>(),
      })
        .from('m_Wind_Serialized')
        .json()
        .withFields<WindSaveDataProxy>(),
      weather: parseObject().from('m_Weather_Serialized').json().withFields<WeatherSaveDataProxy>(),
      weatherTransition: parseObject({
        currentWeather: parseObject().from('m_CurrentWeatherSetSerialized').json().withFields<WeatherSetInstanceSaveData>(),
      })
        .from('m_WeatherTransition_Serialized')
        .json()
        .withFields<WeatherTransitionSaveDataProxy>(),
      encumber: parseObject().from('m_Encumber_Serialized').json().withFields<EncumberSaveDataProxy>(),
      sandboxManager: parseObject({
        globalBlackBoard: parseObject().from('m_SerializedGlobalBlackboard').json(),
      })
        .from('m_SandboxManagerSerialized')
        .json()
        .withFields<MissionServicesManagerSaveProxy>(),
      storyManager: parseObject({
        globalBlackBoard: parseObject().from('m_SerializedGlobalBlackboard').json(),
      })
        .from('m_StoryManagerSerialized')
        .json()
        .withFields<MissionServicesManagerSaveProxy>(),
      player: parseObject().from('m_PlayerManagerSerialized').json().withFields<PlayerManagerSaveDataProxy>(),
      playerClimbRope: parseObject().from('m_PlayerClimbRopeSerialized').json().withFields<PlayerClimbRopeProxy>(),
      playerSkills: parseObject().from('m_PlayerSkillsSerialized').json().withFields<PlayerSkillsSaveData>(),
      playerGameStats: parseObject().from('m_PlayerGameStatsSerialized').json().withFields<PlayerGameStatsProxy>(),
      hypothermia: parseObject().from('m_HypothermiaSerialized').json().withFields<HypothermiaSaveDataProxy>(),
      wellFed: parseObject().from('m_WellFedSerialized').json().withFields<WellFedSaveDataProxy>(),
      frostBite: parseObject().from('m_FrostbiteSerialized').json().withFields<FrostbiteSaveDataProxy>(),
      foodPoisoning: parseObject().from('m_FoodPoisoningSerialized').json().withFields<FoodPoisoningSaveDataProxy>(),
      dysentery: parseObject().from('m_DysenterySerialized').json().withFields<DysenterySaveDataProxy>(),
      sprainPain: parseObject().from('m_SprainPainSerialized').json().withFields<SprainPainSaveDataProxy>(),
      sprainedAnkle: parseObject().from('m_SprainedAnkleSerialized').json().withFields<SprainedAnkleSaveDataProxy>(),
      sprainedWrist: parseObject().from('m_SprainedWristSerialized').json().withFields<SprainedWristSaveDataProxy>(),
      // m_SprainedWristMajorSerialized deleted
      sprains: parseObject().from('m_SprainsSerialized').json().withFields<SprainsSaveDataProxy>(),
      burns: parseObject().from('m_BurnsSerialized').json().withFields<BurnsSaveDataProxy>(),
      burnsElectric: parseObject().from('m_BurnsElectricSerialized').json().withFields<BurnsElectricSaveDataProxy>(),
      bloodLoss: parseObject().from('m_BloodLossSerialized').json().withFields<BloodLossSaveDataProxy>(),
      brokenRib: parseObject().from('m_BrokenRibSerialized').json().withFields<BrokenRibSaveDataProxy>(),
      infection: parseObject().from('m_InfectionSerialized').json().withFields<InfectionSaveDataProxy>(),
      infectionRisk: parseObject().from('m_InfectionRiskSerialized').json().withFields<InfectionRiskSaveDataProxy>(),
      log: parseObject().from('m_LogSerialized').json().withFields<LogSaveDataProxy>(),
      rest: parseObject().from('m_RestSerialized').json().withFields<RestSaveDataProxy>(),
      flyOver: parseObject().from('m_FlyOverSerialized').json().withFields<FlyoverDataProxy>(),
      achievementManager: parseObject().from('m_AchievementManagerSerialized').json().withFields<AchievementSaveData>(),
      experienceMode: parseObject().from('m_ExperienceModeManagerSerialized').json().withFields<ExperienceModeManagerSaveDataProxy>(),
      auroraManager: parseObject().from('m_AuroraManagerSerialized').json().withFields<AuroraManagerSaveDataProxy>(),
      playerMovement: parseObject().from('m_PlayerMovementSerialized').json().withFields<PlayerMovementSaveDataProxy>(),
      playerStruggle: parseObject().from('m_PlayerStruggleSerialized').json().withFields<PlayerStruggleSaveDataProxy>(),
      // TODO: Fix the broken json before parsing
      // panelStats: parseObject().from('m_PanelStatsSerialized').json().withFields<StatContainer>(),
      emergencyStim: parseObject().from('m_EmergencyStimSerialized').json().withFields<EmergencyStimParams>(),
      energyBoost: parseObject().from('m_EnergyBoostSerialized').json().withFields<EnergyBoostParams>(),
      headache: parseObject().from('m_HeadacheSerialized').json().withFields<HeadacheParams>(),
      musicEvent: parseObject().from('m_MusicEventManagerSerialized').json().withFields<MusicEventSaveData>(),
      chimney: parseObject({
        data: parseArray(parseObject().json().withFields<LinkedChimneySaveData>()).from('m_SerializedChimneyData'),
      })
        .from('m_ChimneyDataSerialized')
        .json()
        .withFields<ChimneySaveList>(),
      cabinFever: parseObject().from('m_CabinFeverSerialized').json().withFields<CabinFeverSaveDataProxy>(),
      intestinalParasites: parseObject().from('m_IntestinalParasitesSerialized').json().withFields<IntestinalParasitesSaveDataProxy>(),
      snowPatch: parseObject({
        records: parseArray(parseObject().json().withFields<SnowfallRecordSaveDataProxy>()).from('m_Records'),
      })
        .from('m_SnowPatchManagerSerialized')
        .json()
        .withFields<SnowfallManagerSaveDataProxy>(),
      playerAnimation: parseObject().from('m_PlayerAnimationSerialized').json().withFields<PlayerAnimationSaveDataProxy>(),
      skillsManager: parseObject({
        fireStarting: parseObject().from('m_Skill_FirestartingSerialized').json().withFields<Skill_FirestartingSaveData>(),
        carcassHarvesting: parseObject().from('m_Skill_CarcassHarvestingSerialized').json().withFields<Skill_CarcassHarvestingSaveData>(),
        cooking: parseObject().from('m_Skill_CookingSerialized').json().withFields<Skill_CookingSaveData>(),
        iceFishing: parseObject().from('m_Skill_IceFishingSerialized').json().withFields<Skill_IceFishingSaveData>(),
        rifle: parseObject().from('m_Skill_RifleSerialized').json().withFields<Skill_RifleSaveData>(),
        archery: parseObject().from('m_Skill_ArcherySerialized').json().withFields<Skill_ArcherySaveData>(),
        clothing: parseObject().from('m_Skill_ClothingRepairSerialized').json().withFields<Skill_ClothingRepairSaveData>(),
        revoler: parseObject().from('m_Skill_RevolverSerialized').json().withFields<Skill_RevolverSaveData>(),
        gunsmithing: parseObject().from('m_Skill_GunsmithingSerialized').json().withFields<Skill_GunsmithingSaveData>(),
      })
        .from('m_SkillsManagerSerialized')
        .json()
        .withFields<SkillsManagerSaveData>(),
      lockCompanions: parseValue<string[]>().from('m_LockCompanionsSerialized').json(),
      featsEnabled: parseObject().from('m_FeatsEnabledSerialized').json().withFields<FeatEnabledTrackerSaveData>(),
      trustManager: parseObject().from('m_TrustManagerSerialized').json().withFields<TrustManagerSaveData>(),
      // TODO: Parse trust stuff
      worldMap: parseObject().from('m_WorldMapDataSerialized').json().withFields<WorldMapSaveData>(),
      mapData: parseObject().from('m_MapDataSerialized').json().withFields<MapSaveData>(),
      // m_BearHuntSerialized deprecated
      bearHuntRedux: parseObject().from('m_BearHuntReduxSerialized').json().withFields<BearHuntReduxSaveData>(),
      knowledgeManager: parseObject({
        trust: parseValue<Record<string, string>>().from('m_TrustDictSerialized').json(),
        knowledge: parseValue<Record<string, KnowledgeCateogry>>().from('m_KnowledgeDictSerialized').json(),
        nameRef: parseValue<Record<string, string>>().from('m_NameRefDictSerialized').json(),
      })
        .from('m_KnowledgeManagerSerialized')
        .json()
        .withFields<KnowledgeManagerSaveData>(),
      unlockedBlueprints: parseValue<string[]>().from('m_UnlockedBlueprintsSerialized').json(),
      // TODO: Deserialize Dictionary<int, string> cairns (invalid json)
      collectionManager: parseObject({
        unlockedAuroraSet: parseValue<string[]>().from('m_UnlockedAuroraSetSerialized').json(),
      })
        .from('m_CollectionManagerSerialized')
        .json()
        .withFields<CollectionManagerSaveData>(),
      auroraScreenManager: parseObject({
        assignedPrefabs: parseValue<Record<string, string>>().from('m_AssignedPrefabsSerialized').json(),
      })
        .from('m_AuroraScreenManagerSerialized')
        .json()
        .withFields<AuroraScreenManagerSaveDataProxy>(),
      storyMission: parseObject().from('m_StoryMissionDataSerialized').json().withFields<StoryMissionSaveData>(),
      phoneManager: parseObject().from('m_PhoneManagerSerialized').json().withFields<PhoneManagerSaveData>(),
      missionObjectiveTable: parseValue<MissionObjectiveTableSaveDataProxy[]>().from('m_MissionObjectiveTableSerialized').json(),
      bodyCarry: parseObject().from('m_BodyCarrySerialized').json().withFields<BodyCarrySaveDataProxy>(),
      npcGlobal: parseObject().from('m_NPCGlobalSerialized').json().withFields<NPCGlobalSaveData>(),
      packManagerGlobal: parseObject().from('m_PackManagerGlobalSerialized').json().withFields<PackManagerGlobalDataProxy>(),
      rockCacheInfo: parseObject().from('m_RockCacheInfoSerialized').json().withFields<RockCacheInfoSaveList>(),
      sprayPaintPanel: parseObject().from('m_SprayPaintPanelInfoSerialized').json().withFields<Panel_SprayPaintSaveDataProxy>(),
      invisibleEntityInfo: parseObject().from('m_InvisibleEntityInfoSerialized').json().withFields<InvisibleEntityManagerGlobalDataProxy>(),
      toxixFogManager: parseObject().from('m_ToxicFogManagerSerialized').json().withFields<ToxicFogManagerSaveDataProxy>(),
      fear: parseObject().from('m_FearSerialized').json().withFields<FearSaveDataProxy>(),
      anxiety: parseObject().from('m_AnxietySerialized').json().withFields<AnxietySaveDataProxy>(),
      suffocating: parseObject().from('m_SuffocatingSerialized').json().withFields<SuffocatingSaveDataProxy>(),
      // TODO: Needs bigint support
      highResolutionTimer: parseValue<HighResolutionTimerSaveDataProxy>().from('m_HighResolutionTimerSerialized').json(),
      sceneManager: parseObject().from('m_SceneManagerSerialized').json().withFields<SceneManagerSaveDataProxy>(),
      // TODO: m_NotificationFlagSerialized has raw GearItem?
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

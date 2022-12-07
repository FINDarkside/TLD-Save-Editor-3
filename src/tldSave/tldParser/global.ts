import { parseArray, parseDictionary, parseObject, parseValue } from '../parser';
import AchievementSaveData from '../types/generated/AchievementSaveData';
import ActiveWindSettings from '../types/generated/ActiveWindSettings';
import AnxietySaveDataProxy from '../types/generated/AnxietySaveDataProxy';
import AuroraManagerSaveDataProxy from '../types/generated/AuroraManagerSaveDataProxy';
import AuroraScreenManagerSaveDataProxy from '../types/generated/AuroraScreenManagerSaveDataProxy';
import BearHuntReduxSaveData from '../types/generated/BearHuntReduxSaveData';
import BloodLossSaveDataProxy from '../types/generated/BloodLossSaveDataProxy';
import BodyCarrySaveDataProxy from '../types/generated/BodyCarrySaveDataProxy';
import BrokenRibSaveDataProxy from '../types/generated/BrokenRibSaveDataProxy';
import BurnsElectricSaveDataProxy from '../types/generated/BurnsElectricSaveDataProxy';
import BurnsSaveDataProxy from '../types/generated/BurnsSaveDataProxy';
import CabinFeverSaveDataProxy from '../types/generated/CabinFeverSaveDataProxy';
import ChimneySaveList from '../types/generated/ChimneySaveList';
import CollectionManagerSaveData from '../types/generated/CollectionManagerSaveData';
import type ConditionSaveDataProxy from '../types/generated/ConditionSaveDataProxy';
import DysenterySaveDataProxy from '../types/generated/DysenterySaveDataProxy';
import EmergencyStimParams from '../types/generated/EmergencyStimParams';
import EncumberSaveDataProxy from '../types/generated/EncumberSaveDataProxy';
import EnergyBoostParams from '../types/generated/EnergyBoostParams';
import KnowledgeCateogry from '../types/generated/enums/KnowledgeCateogry';
import ExperienceModeManagerSaveDataProxy from '../types/generated/ExperienceModeManagerSaveDataProxy';
import FatigueSaveDataProxy from '../types/generated/FatigueSaveDataProxy';
import FearSaveDataProxy from '../types/generated/FearSaveDataProxy';
import FeatEnabledTrackerSaveData from '../types/generated/FeatEnabledTrackerSaveData';
import FlyoverDataProxy from '../types/generated/FlyoverDataProxy';
import FoodPoisoningSaveDataProxy from '../types/generated/FoodPoisoningSaveDataProxy';
import FreezingSaveDataProxy from '../types/generated/FreezingSaveDataProxy';
import FrostbiteSaveDataProxy from '../types/generated/FrostbiteSaveDataProxy';
import GameManagerSaveDataProxy from '../types/generated/GameManagerSaveDataProxy';
import type GlobalSaveGameFormat from '../types/generated/GlobalSaveGameFormat';
import HeadacheParams from '../types/generated/HeadacheParams';
import HighResolutionTimerSaveDataProxy from '../types/generated/HighResolutionTimerSaveDataProxy';
import HudManagerSaveDataProxy from '../types/generated/HudManagerSaveDataProxy';
import HungerSaveDataProxy from '../types/generated/HungerSaveDataProxy';
import HypothermiaSaveDataProxy from '../types/generated/HypothermiaSaveDataProxy';
import InfectionRiskSaveDataProxy from '../types/generated/InfectionRiskSaveDataProxy';
import InfectionSaveDataProxy from '../types/generated/InfectionSaveDataProxy';
import IntestinalParasitesSaveDataProxy from '../types/generated/IntestinalParasitesSaveDataProxy';
import InvisibleEntityManagerGlobalDataProxy from '../types/generated/InvisibleEntityManagerGlobalDataProxy';
import KnowledgeManagerSaveData from '../types/generated/KnowledgeManagerSaveData';
import LinkedChimneySaveData from '../types/generated/LinkedChimneySaveData';
import LogSaveDataProxy from '../types/generated/LogSaveDataProxy';
import MapSaveData from '../types/generated/MapSaveData';
import MissionObjectiveTableSaveDataProxy from '../types/generated/MissionObjectiveTableSaveDataProxy';
import MissionServicesManagerSaveProxy from '../types/generated/MissionServicesManagerSaveProxy';
import MusicEventSaveData from '../types/generated/MusicEventSaveData';
import NPCGlobalSaveData from '../types/generated/NPCGlobal';
import PackManagerGlobalDataProxy from '../types/generated/PackManagerGlobalDataProxy';
import Panel_SprayPaintSaveDataProxy from '../types/generated/Panel_SprayPaintSaveDataProxy';
import PhoneManagerSaveData from '../types/generated/PhoneManagerSaveData';
import PlayerAnimationSaveDataProxy from '../types/generated/PlayerAnimationSaveDataProxy';
import PlayerClimbRopeProxy from '../types/generated/PlayerClimbRopeProxy';
import PlayerGameStatsProxy from '../types/generated/PlayerGameStatsProxy';
import PlayerManagerSaveDataProxy from '../types/generated/PlayerManagerSaveDataProxy';
import PlayerMovementSaveDataProxy from '../types/generated/PlayerMovementSaveDataProxy';
import PlayerSkillsSaveData from '../types/generated/PlayerSkillsSaveData';
import PlayerStruggleSaveDataProxy from '../types/generated/PlayerStruggleSaveDataProxy';
import RestSaveDataProxy from '../types/generated/RestSaveDataProxy';
import RockCacheInfoSaveList from '../types/generated/RockCacheInfoSaveList';
import SceneManagerSaveDataProxy from '../types/generated/SceneManagerSaveDataProxy';
import SceneTransitionData from '../types/generated/SceneTransitionData';
import SkillsManagerSaveData from '../types/generated/SkillsManagerSaveData';
import Skill_ArcherySaveData from '../types/generated/Skill_ArcherySaveData';
import Skill_CarcassHarvestingSaveData from '../types/generated/Skill_CarcassHarvestingSaveData';
import Skill_ClothingRepairSaveData from '../types/generated/Skill_ClothingRepairSaveData';
import Skill_CookingSaveData from '../types/generated/Skill_CookingSaveData';
import Skill_FirestartingSaveData from '../types/generated/Skill_FirestartingSaveData';
import Skill_GunsmithingSaveData from '../types/generated/Skill_GunsmithingSaveData';
import Skill_IceFishingSaveData from '../types/generated/Skill_IceFishingSaveData';
import Skill_RevolverSaveData from '../types/generated/Skill_RevolverSaveData';
import Skill_RifleSaveData from '../types/generated/Skill_RifleSaveData';
import SnowfallManagerSaveDataProxy from '../types/generated/SnowfallManagerSaveDataProxy';
import SnowfallRecordSaveDataProxy from '../types/generated/SnowfallRecordSaveDataProxy';
import SprainedAnkleSaveDataProxy from '../types/generated/SprainedAnkleSaveDataProxy';
import SprainedWristSaveDataProxy from '../types/generated/SprainedWristSaveDataProxy';
import SprainPainSaveDataProxy from '../types/generated/SprainPainSaveDataProxy';
import SprainsSaveDataProxy from '../types/generated/SprainsSaveDataProxy';
import StoryMissionSaveData from '../types/generated/StoryMissionSaveData';
import SuffocatingSaveDataProxy from '../types/generated/SuffocatingSaveDataProxy';
import ThirstSaveDataProxy from '../types/generated/ThirstSaveDataProxy';
import TimeOfDaySaveDataProxy from '../types/generated/TimeOfDaySaveDataProxy';
import ToxicFogManagerSaveDataProxy from '../types/generated/ToxicFogManagerSaveDataProxy';
import TrustManagerSaveData from '../types/generated/TrustManagerSaveData';
import WeatherSaveDataProxy from '../types/generated/WeatherSaveDataProxy';
import WeatherSetInstanceSaveData from '../types/generated/WeatherSetInstanceSaveData';
import WeatherTransitionSaveDataProxy from '../types/generated/WeatherTransitionSaveDataProxy';
import WellFedSaveDataProxy from '../types/generated/WellFedSaveDataProxy';
import WillpowerSaveDataProxy from '../types/generated/WillpowerSaveDataProxy';
import WindSaveDataProxy from '../types/generated/WindSaveDataProxy';
import WorldMapSaveData from '../types/generated/WorldMapSaveData';
import inventoryParser from './inventory';

const globalParser = parseObject({
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
  mapData: parseObject({
    mapSaveDataDict: parseDictionary(parseArray(parseValue().json()).json()).from('m_MapSaveDataDict'),
    detailSurveyPositions: parseDictionary(parseArray(parseValue().json()).json()).from('m_DetailSurveyPositions'),
    surveyedVistaLocations: parseDictionary(parseArray(parseValue().json()).json()).from('m_SurveyedVistaLocations'),
  })
    .from('m_MapDataSerialized')
    .json()
    .withFields<MapSaveData>(),
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
  highResolutionTimer: parseValue<HighResolutionTimerSaveDataProxy>().from('m_HighResolutionTimerSerialized').json(),
  sceneManager: parseObject().from('m_SceneManagerSerialized').json().withFields<SceneManagerSaveDataProxy>(),
  // TODO: m_NotificationFlagSerialized has raw GearItem?
})
  .json()
  .compressed()
  .withFields<GlobalSaveGameFormat>();

export default globalParser;

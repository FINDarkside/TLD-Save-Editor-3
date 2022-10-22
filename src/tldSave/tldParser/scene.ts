import { parseArray, parseObject, parseValue } from '../parser';
import SceneSaveGameFormat from '../types/generated/SceneSaveGameFormat';
import ContainerSaveList from '../types/generated/ContainerSaveList';
import GearSaveList from '../types/generated/GearSaveList';
import ArrowSaveList from '../types/generated/ArrowSaveList';
import FlareGunRoundSaveList from '../types/generated/FlareGunRoundSaveList';
import FireSaveList from '../types/generated/FireSaveList';
import PlayMusicTriggerSaveDataProxy from '../types/generated/PlayMusicTriggerSaveDataProxy';

import { gearParser } from './inventory';
import InventoryItemSaveData from '../types/generated/InventoryItemSaveData';
import FireSaveDataProxy from '../types/generated/FireSaveDataProxy';
import FireSaveData from '../types/generated/FireSaveData';
import HeatSourceSaveDataProxy from '../types/generated/HeatSourceSaveDataProxy';
import CampfireSaveDataProxy from '../types/generated/CampfireSaveDataProxy';
import ContainerItemSaveData from '../types/generated/ContainerItemSaveData';
import ContainerSaveData from '../types/generated/ContainerSaveData';
import ContainerSaveDataProxy from '../types/generated/ContainerSaveDataProxy';
import SafeCrackingSaveDataProxy from '../types/generated/SafeCrackingSaveDataProxy';
import LockSaveDataProxy from '../types/generated/LockSaveDataProxy';
import MissionObjectIdentifierSaveProxy from '../types/generated/MissionObjectIdentifierSaveProxy';
import OwnershipOverrideSaveDataProxy from '../types/generated/OwnershipOverrideSaveDataProxy';
import LoadSceneParentSaveDataProxy from '../types/generated/LoadSceneParentSaveDataProxy';
import LoadSceneSaveDataProxy from '../types/generated/LoadSceneSaveDataProxy';
import DisplayLocationLabelSaveDataProxy from '../types/generated/DisplayLocationLabelSaveDataProxy';
import RandomSpawnObjectSaveList from '../types/generated/RandomSpawnObjectSaveList';
import WaterSourceSaveList from '../types/generated/WaterSourceSaveList';
import BodyHarvestSaveList from '../types/generated/BodyHarvestSaveList';
import SpawnRegionSaveList from '../types/generated/SpawnRegionSaveList';
import DecalProjectorSaveList from '../types/generated/DecalProjectorSaveList';
import SpawnRegionDataProxy from '../types/generated/SpawnRegionDataProxy';
import BodyHarvestSaveDataProxy from '../types/generated/BodyHarvestSaveDataProxy';
import WaterSourceSaveDataProxy from '../types/generated/WaterSourceSaveDataProxy';
import SceneMusicSaveData from '../types/generated/SceneMusicSaveData';
import IceFishingHoleSaveData from '../types/generated/IceFishingHoleSaveData';
import HarvestableSaveDataProxy from '../types/generated/HarvestableSaveDataProxy';
import ReplaceMaterialSaveDataProxy from '../types/generated/ReplaceMaterialSaveDataProxy';
import OpenCloseSaveDataProxy from '../types/generated/OpenCloseSaveDataProxy';
import SwitchBoxSaveDataProxy from '../types/generated/SwitchBoxSaveDataProxy';
import BreakDownSaveData from '../types/generated/BreakDownSaveData';
import RadialObjectSpawnerSaveData from '../types/generated/RadialObjectSpawnerSaveData';
import StickToGroundSaveData from '../types/generated/StickToGroundSaveData';
import RopeAnchorPointSaveData from '../types/generated/RopeAnchorPointSaveData';
import ChimneySaveData from '../types/generated/ChimneySaveData';
import FootstepTrailManagerSaveDataProxy from '../types/generated/FootstepTrailManagerSaveDataProxy';
import FootstepTrailSaveDataProxy from '../types/generated/FootstepTrailSaveDataProxy';
import SnowShelterSaveData from '../types/generated/SnowShelterSaveData';
import SnowShelterSaveList from '../types/generated/SnowShelterSaveList';
import FootstepGroupSaveDataProxy from '../types/generated/FootstepGroupSaveDataProxy';
import SnowShelterDataProxy from '../types/generated/SnowShelterDataProxy';
import LeanToSaveList from '../types/generated/LeanToSaveList';
import LeanToSaveData from '../types/generated/LeanToSaveData';
import LeanToDataProxy from '../types/generated/LeanToDataProxy';
import RockCacheSaveList from '../types/generated/RockCacheSaveList';
import RockCacheSaveData from '../types/generated/RockCacheSaveData';
import RockCacheDataProxy from '../types/generated/RockCacheDataProxy';
import BaseAiSaveList from '../types/generated/BaseAiSaveList';
import BaseAiData from '../types/generated/BaseAiData';
import BaseAiDataProxy from '../types/generated/BaseAiDataProxy';
import ActiveSwitchSaveData from '../types/generated/ActiveSwitchSaveData';
import KeypadSaveData from '../types/generated/KeypadSaveData';
import InteractionOverrideSaveData from '../types/generated/InteractionOverrideSaveData';
import TLDBehaviourTreeManagerProxy from '../types/generated/TLDBehaviourTreeManagerProxy';
import TLDBehaviourTreeOwnerProxy from '../types/generated/TLDBehaviourTreeOwnerProxy';
import BreakableIceComponentSaveDataProxy from '../types/generated/BreakableIceComponentSaveDataProxy';
import BrokenIceSaveDataProxy from '../types/generated/BrokenIceSaveDataProxy';
import AuroraFieldDataProxy from '../types/generated/AuroraFieldDataProxy';
import BearEncounterSaveData from '../types/generated/BearEncounterSaveData';
import PackManagerDataProxyList from '../types/generated/PackManagerDataProxyList';
import SpawnWildlife_TriggerSaveData from '../types/generated/SpawnWildlife_TriggerSaveData';
import BedSaveDataProxy from '../types/generated/BedSaveDataProxy';
import TintMaterialsSaveData from '../types/generated/TintMaterialsSaveData';
import SteamPipeValveSaveList from '../types/generated/SteamPipeValveSaveList';
import SteamPipeValveSaveDataProxy from '../types/generated/SteamPipeValveSaveDataProxy';
import SteamPipeSaveData from '../types/generated/SteamPipeSaveData';
import SteamPipeValveSocketSaveDataProxy from '../types/generated/SteamPipeValveSocketSaveDataProxy';
import SteamPipeSaveList from '../types/generated/SteamPipeSaveList';
import SteamPipeSaveDataProxy from '../types/generated/SteamPipeSaveDataProxy';
import ElevatorSaveDataProxy from '../types/generated/ElevatorSaveDataProxy';
import LightsourceSaveDataProxy from '../types/generated/LightsourceSaveDataProxy';
import WolfDenSaveDataProxy from '../types/generated/WolfDenSaveDataProxy';

const sceneParser = parseObject({
  containerManager: parseObject({
    containers: parseArray(
      parseObject({
        container: parseObject({
          lock: parseObject().from('m_LockSerialized').json().withFields<LockSaveDataProxy>(),
          safeCracking: parseObject().from('m_SafeCrackingSerialized').json().withFields<SafeCrackingSaveDataProxy>(),
          missionObject: parseObject().from('m_MissionObjectSerialized').json().withFields<MissionObjectIdentifierSaveProxy>(),
          ovnershipOverride: parseObject().from('m_OwnershipOverrideSerialized').json().withFields<OwnershipOverrideSaveDataProxy>(),
          items: parseArray(
            parseObject({
              gear: gearParser.from('m_SerializedGear'),
            }).withFields<ContainerItemSaveData>()
          ).from('m_SerializedItems'),
        })
          .from('m_SearializedContainer')
          .json()
          .withFields<ContainerSaveDataProxy>(),
      }).withFields<ContainerSaveData>()
    ).from('m_SerializedContainers'),
  })
    .from('m_ContainerManagerSerialized')
    .json()
    .withFields<ContainerSaveList>(),
  gearManager: parseObject({
    items: parseArray(
      parseObject({
        gear: gearParser.from('m_SearializedGear'),
      }).withFields<InventoryItemSaveData>()
    ).from('m_SerializedItems'),
  })
    .from('m_GearManagerSerialized')
    .json()
    .withFields<GearSaveList>(),
  arrowManager: parseObject().from('m_ArrowManagerSerialized').json().withFields<ArrowSaveList>(),
  flareGunRoundManager: parseObject().from('m_FlareGunRoundManagerSerialized').json().withFields<FlareGunRoundSaveList>(),
  fireManager: parseObject({
    fires: parseArray(
      parseObject({
        fire: parseObject({
          heatSource: parseObject().from('m_HeatSourceSerialized').json().withFields<HeatSourceSaveDataProxy>(),
          campFire: parseObject().from('m_CampfireSerialized').json().withFields<CampfireSaveDataProxy>(),
        })
          .from('m_SearializedFire')
          .json()
          .withFields<FireSaveDataProxy>(),
      }).withFields<FireSaveData>()
    ).from('m_SerializedFires'),
  })
    .from('m_FireManagerSerialized')
    .json()
    .withFields<FireSaveList>(),
  musicTriggers: parseObject({
    triggers: parseArray(parseValue<PlayMusicTriggerSaveDataProxy>().json()).from('strings'),
  })
    .from('m_MusicTriggersSerialized')
    .json(),
  loadSceneTriggers: parseObject({
    triggers: parseArray(parseValue<LoadSceneSaveDataProxy>().json()).from('strings'),
  })
    .from('m_LoadSceneTriggersSerialized')
    .json(),
  loadSceneParent: parseObject({
    parents: parseArray(parseValue<LoadSceneParentSaveDataProxy>().json()).from('strings'),
  })
    .from('m_LoadSceneParentSerialized')
    .json(),
  locationLabels: parseObject({
    labels: parseArray(parseValue<DisplayLocationLabelSaveDataProxy>().json()).from('strings'),
  })
    .from('m_LocationLabelsSerialized')
    .json(),
  randomSpawnObjectManager: parseObject().from('m_RandomSpawnObjectManagerSerialized').json().withFields<RandomSpawnObjectSaveList>(),
  waterSourceManager: parseObject({
    waterSources: parseArray(
      parseObject({
        waterSource: parseObject().from('m_SearializedWaterSource').json().withFields<WaterSourceSaveDataProxy>(),
      })
    ).from('m_SerializedWaterSources'),
  })
    .from('m_WaterSourceManagerSerialized')
    .json()
    .withFields<WaterSourceSaveList>(),
  bodyHarvestManager: parseObject({
    bodyHarvests: parseArray(
      parseObject({
        bodyHarvest: parseObject().from('m_SerializedBodyHarvest').json().withFields<BodyHarvestSaveDataProxy>(),
      })
    ).from('m_SerializedBodyHarvests'),
  })
    .from('m_BodyHarvestManagerSerialized')
    .json()
    .withFields<BodyHarvestSaveList>(),
  spawnRegionManager: parseObject({
    spawnRegions: parseArray(
      parseObject({
        spawnRegion: parseObject().from('m_SearializedSpawnRegion').json().withFields<SpawnRegionDataProxy>(),
      })
    ).from('m_SerializedSpawnRegions'),
  })
    .from('m_SpawnRegionManagerSerialized')
    .json()
    .withFields<SpawnRegionSaveList>(),
  dynamicDecalsManager: parseObject().from('m_DynamicDecalsManagerSerialized').json().withFields<DecalProjectorSaveList>(),
  sceneMusicManager: parseObject().from('m_SceneMusicManagerSerialized').json().withFields<SceneMusicSaveData>(),
  // TODO: Test
  iceFishingHoles: parseObject({
    holes: parseArray(parseValue<IceFishingHoleSaveData>().json()).from('strings'),
  })
    .from('m_IceFishingHolesSerialized')
    .json(),
  harvestables: parseObject({
    harvestables: parseArray(parseValue<HarvestableSaveDataProxy>().json()).from('strings'),
  })
    .from('m_HarvestablesSerialized')
    .json(),
  replaceMaterials: parseObject({
    list: parseArray(parseValue<ReplaceMaterialSaveDataProxy>().json()).from('strings'),
  })
    .from('m_ReplaceMaterialsSerialized')
    .json(),
  openClosers: parseObject({
    list: parseArray(parseValue<OpenCloseSaveDataProxy>().json()).from('strings'),
  })
    .from('m_OpenClosersSerialized')
    .json(),
  switchBox: parseObject({
    list: parseArray(parseValue<SwitchBoxSaveDataProxy>().json()).from('strings'),
  })
    .from('m_SwitchBoxSerialized')
    .json(),
  breakDownObjects: parseObject({
    list: parseArray(parseValue<BreakDownSaveData>().json()).from('strings'),
  })
    .from('m_BreakDownObjectsSerialized')
    .json(),
  radialObjectSpawners: parseObject({
    list: parseArray(parseValue<RadialObjectSpawnerSaveData>().json()).from('strings'),
  })
    .from('m_RadialObjectSpawnersSerialized')
    .json(),
  stickToGroundObjects: parseObject({
    list: parseArray(parseValue<StickToGroundSaveData>().json()).from('strings'),
  })
    .from('m_StickToGroundObjectsSerialized')
    .json(),
  gearSpawnInOldSavesGUIDs: parseValue<string[]>().from('m_GearSpawnInOldSavesGUIDs').json(),
  ropeAnchorPoints: parseObject({
    list: parseArray(parseValue<RopeAnchorPointSaveData>().json()).from('strings'),
  })
    .from('m_RopeAnchorPointsSerialized')
    .json(),
  chimneys: parseObject({
    list: parseArray(parseValue<ChimneySaveData>().json()).from('strings'),
  })
    .from('m_ChimneysSerialized')
    .json(),
  footsteps: parseObject({
    trails: parseArray(
      parseObject({
        footStepGroups: parseArray(parseObject().json().withFields<FootstepGroupSaveDataProxy>()).from('m_FootstepGroups'),
      })
        .json()
        .withFields<FootstepTrailSaveDataProxy>()
    ).from('m_Trails'),
  })
    .from('m_FootstepsSerialized')
    .json()
    .withFields<FootstepTrailManagerSaveDataProxy>(),
  snowShelterManager: parseObject({
    snowShelters: parseArray(
      parseObject({
        snowShelter: parseObject().from('m_SearializedSnowShelter').json().withFields<SnowShelterDataProxy>(),
      }).withFields<SnowShelterSaveData>()
    ).from('m_SerializedSnowShelters'),
  })
    .from('m_SnowShelterManagerSerialized')
    .json()
    .withFields<SnowShelterSaveList>(),
  leanToManager: parseObject({
    leanToList: parseArray(
      parseObject({
        leanTo: parseObject().from('m_SearializedLeanTo').json().withFields<LeanToDataProxy>(),
      }).withFields<LeanToSaveData>()
    ).from('m_SerializedLeanToList'),
  })
    .from('m_LeanToManagerSerialized')
    .json()
    .withFields<LeanToSaveList>(),
  rockCache: parseObject({
    rockCacheList: parseArray(
      parseObject({
        rockCache: parseObject().from('m_SearializedRockCache').json().withFields<RockCacheDataProxy>(),
      }).withFields<RockCacheSaveData>()
    ).from('m_SerializedRockCacheList'),
  })
    .from('m_RockCacheSerialized')
    .json()
    .withFields<RockCacheSaveList>(),
  baseAiManager: parseObject({
    baseAiList: parseArray(
      parseObject({
        baseAi: parseObject().from('m_BaseAiSerialized').json().withFields<BaseAiDataProxy>(),
      }).withFields<BaseAiData>()
    ).from('m_SerializedBaseAI'),
  })
    .from('m_BaseAiManagerSerialized')
    .json()
    .withFields<BaseAiSaveList>(),
  activeSwitches: parseValue<ActiveSwitchSaveData[]>().from('m_ActiveSwitchesSerialized').json(),
  keyPads: parseValue<KeypadSaveData[]>().from('m_KeypadsSerialized').json(),
  interactionOverrides: parseValue<InteractionOverrideSaveData[]>().from('m_InteractionOverridesSerialized').json(),
  TLDBehaviourTreeManager: parseObject({
    TLDBehaviourTreeOwnerList: parseArray(
      parseObject({
        blackboard: parseObject().from('m_Blackboard').json(),
      }).withFields<TLDBehaviourTreeOwnerProxy>()
    ).from('m_TLDBehaviourTreeOwnerProxyList'),
  })
    .from('m_TLDBehaviourTreeManagerSerialized')
    .json()
    .withFields<TLDBehaviourTreeManagerProxy>(),
  breakableIce: parseObject({
    list: parseArray(
      parseObject({
        brokenIce: parseObject().from('m_BrokenIceData').json().withFields<BrokenIceSaveDataProxy>(),
      })
        .withFields<BreakableIceComponentSaveDataProxy>()
        .json()
    ).from('strings'),
  })
    .from('m_BreakableIceSerialized')
    .json(),
  auroraFields: parseObject({
    fields: parseArray(
      parseObject({
        auroraField: parseObject().from('m_AuroraFieldSerialized').json().withFields<AuroraFieldDataProxy>(),
      })
    ).from('m_SerializedFields'),
  })
    .from('m_AuroraFieldsSerialized')
    .json(),
  quarteringSiteCarrion: parseObject().from('m_QuarteringSiteCarrionSerialized').json(),
  bearEncounter: parseObject({
    list: parseArray(parseValue<BearEncounterSaveData>().json()).from('strings'),
  })
    .from('m_BearEncountersSerialized')
    .json(),
  dialogueModeRigFP: parseValue().from('m_DialogueModeRigFPSerialized').json(),
  scriptLight: parseValue().from('m_ScriptLightSerialized').json(),
  persistentControllerState: parseValue().from('m_PersistentControllerStateSerialized').json(),
  packManager: parseObject().from('m_PackManagerSerialized').json().withFields<PackManagerDataProxyList>(),
  auroraElectrolizerController: parseValue().from('m_AuroraElectrolizerControllerSerialized').json(),
  prefabSpawn: parseValue().from('m_PrefabSpawnSerialized').json(),
  spawnWildlife_TriggerSerialized: parseValue<SpawnWildlife_TriggerSaveData[]>().from('m_SpawnWildlife_TriggerSerialized').json(),
  // TODO: m_NPCSerialized
  placeableManager: parseValue().from('m_PlaceableManagerSerialized').json(),
  bed: parseObject({
    list: parseArray(parseValue<BedSaveDataProxy>().json()).from('strings'),
  })
    .from('m_BedSerialized')
    .json(),
  animatedInteraction: parseValue().from('m_AnimatedInteractionSerialized').json(),
  tintMaterials: parseObject({
    list: parseArray(parseValue<TintMaterialsSaveData>().json()).from('strings'),
  })
    .from('m_TintMaterialsSerialized')
    .json(),
  entityWard: parseValue().from('m_EntityWardSerialized').json(),
  steamPipeValve: parseObject({
    steamPipeValves: parseArray(
      parseObject({
        data: parseObject().from('m_SerializedData').json().withFields<SteamPipeValveSaveDataProxy>(),
      }).withFields<SteamPipeSaveData>()
    ).from('m_SerializedSteamPipeValves'),
    steamPipeValveSockets: parseArray(
      parseObject({
        data: parseObject().from('m_SerializedData').json().withFields<SteamPipeValveSocketSaveDataProxy>(),
      }).withFields<SteamPipeSaveData>()
    ).from('m_SerializedSteamPipeValveSockets'),
  })
    .from('m_SteamPipeValveSerialized')
    .json()
    .withFields<SteamPipeValveSaveList>(),
  steamPipe: parseObject({
    steamPipes: parseArray(
      parseObject({
        data: parseObject().from('m_SerializedData').json().withFields<SteamPipeSaveDataProxy>(),
      })
    ).from('m_SerializedSteamPipes'),
  })
    .from('m_SteamPipeSerialized')
    .json()
    .withFields<SteamPipeSaveList>(),
  elevator: parseObject({
    list: parseArray(parseValue<ElevatorSaveDataProxy>().json()).from('strings'),
  })
    .from('m_ElevatorSerialized')
    .json(),
  lightsource: parseObject({
    list: parseArray(parseValue<LightsourceSaveDataProxy>().json()).from('strings'),
  })
    .from('m_LightsourceSerialized')
    .json(),
  wolfDen: parseObject({
    list: parseArray(parseValue<WolfDenSaveDataProxy>().json()).from('strings'),
  })
    .from('m_WolfDenSerialized')
    .json(),
})
  .json()
  .compressed()
  .withFields<SceneSaveGameFormat>();

export default sceneParser;

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

const sceneParser = parseObject({
  containerManager: parseObject().from('m_ContainerManagerSerialized').json().withFields<ContainerSaveList>(),
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
  fireManager: parseObject().from('m_FireManagerSerialized').json().withFields<FireSaveList>(),
  musicTriggers: parseObject({
    triggers: parseArray(parseValue<PlayMusicTriggerSaveDataProxy>().json()).from('strings'),
  })
    .from('m_MusicTriggersSerialized')
    .json(),
})
  .json()
  .compressed()
  .withFields<SceneSaveGameFormat>();

export default sceneParser;

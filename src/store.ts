import { readdir, readFile, writeFile } from 'fs/promises';
import lzf from 'lzfjs';
import { reactive, toRaw } from 'vue';
import tldParser, { slotParser } from './tldSave/tldParser';
import parser from './tldSave/tldParser';
import async, { forEach } from 'async';
import path from 'path';
import GameRegion from 'src/tldSave/types/generated/enums/GameRegion';
import availableLocations from 'src/tldSave/availableLocations';
import mapHelper from 'src/tldSave/mapHelper';
import { AvailableLocation } from 'src/tldSave/availableLocations';

interface GameSave {
  file: string;
  data: ReturnType<(typeof parser)['parse']>;
}

interface SaveSlot {
  file: string;
  name: string;
}

interface MapData {
  source: string;
  center: [number, number];
  zoom: number;
  size: [number, number];
  extent: [number, number, number, number];
  extentLimit: [number, number, number, number];
  region: GameRegion;
  position: [number, number, number];
  availableLocations: AvailableLocation[];
}

const store = {
  selectedTab: 0,

  availableSaves: [] as SaveSlot[],
  currentSave: undefined as undefined | GameSave,
  loadingSaves: false,
  loadingInfo: {
    totalCount: 0,
    currentIndex: 0,
  },

  get global() {
    return this.currentSave?.data?.m_Dict?.global;
  },

  get screenshot() {
    return this.currentSave?.data?.m_Dict?.screenshot?.m_Encoded;
  },

  get mapData(): MapData {
    const reg = this.currentSave?.data?.m_Dict?.boot?.m_SceneName;
    const region =
      (reg && GameRegion[reg as keyof typeof GameRegion]) ||
      GameRegion.UnknownRegion;
    const pos = this.currentSave?.data?.m_Dict?.global?.player
      ?.m_SaveGamePosition || [0, 0, 0];
    const availableLocs = (region && availableLocations[region]) || [];
    const map = region && mapHelper.get(region);
    const center: [number, number] = map ? map.originOffset : [-1000, -1000];
    const source = map ? map.path : '';
    const size: [number, number] = map ? map.size : [2000, 2000];
    const whiteSpace = 500;
    const extent: [number, number, number, number] = [
      center[0],
      center[1],
      size[0] + center[0],
      size[1] + center[1],
    ];
    const extentLimit: [number, number, number, number] = [
      extent[0] - whiteSpace,
      extent[1] - whiteSpace,
      extent[2] + whiteSpace,
      extent[3] + whiteSpace,
    ];

    return {
      region,
      position: pos,
      availableLocations: availableLocs,
      center,
      source,
      zoom: 3,
      size,
      extent: extent,
      extentLimit: extentLimit,
    };
  },

  async newPosition(pos: [number, number, number]) {
    if (!pos || !this.global?.player?.m_SaveGamePosition) return;
    this.global.player.m_SaveGamePosition = pos;
  },

  async refreshAvailableSaves() {
    this.loadingSaves = true;
    this.availableSaves = [];
    const saveFileRegex =
      /^(ep[0-9])?(sandbox|challenge|story|relentless)[0-9]+$/;

    if (!process.env.LOCALAPPDATA) throw new Error('LOCALAPPDATA is not set');

    const saveFolder = path.join(
      process.env.LOCALAPPDATA,
      'Hinterland',
      'TheLongDark'
    );
    const files = (await readdir(saveFolder)).filter((file) =>
      saveFileRegex.test(file)
    );
    const survivalFiles = (
      await readdir(path.join(saveFolder, 'Survival'))
    ).filter((file) => saveFileRegex.test(file));

    this.loadingInfo.totalCount = files.length + survivalFiles.length;

    const slots = await async.mapSeries(files, async (file: string) => {
      const fileFullPath = path.join(saveFolder, file);
      const buf = await readFile(fileFullPath);
      const slotData = slotParser.parse(buf);
      this.loadingInfo.currentIndex++;
      return {
        file: fileFullPath,
        name: slotData?.m_DisplayName || 'Unnkown',
      };
    });

    await forEach(survivalFiles, async (file: string) => {
      const fileFullPath = path.join(saveFolder, 'Survival', file);
      const buf = await readFile(fileFullPath);
      const slotData = slotParser.parse(buf);
      this.loadingInfo.currentIndex++;
      slots.unshift({
        file: fileFullPath,
        name: slotData?.m_DisplayName || 'Unnkown',
      });
    });

    this.loadingSaves = false;
    this.loadingInfo = {
      totalCount: 0,
      currentIndex: 0,
    };
    this.availableSaves = slots;
  },
  async loadSave(file: string) {
    console.time('read save');
    const buf = await readFile(file);
    console.timeEnd('read save');
    console.time('parse save');
    const saveData = tldParser.parse(buf);
    console.timeEnd('parse save');
    saveData?.m_Dict?.global?.fatigue?.m_CurrentFatigueProxy;
    this.currentSave = {
      file,
      data: saveData,
    };
  },
  async saveCurrent() {
    if (!this.currentSave) return;
    const data = structuredClone(toRaw(this.currentSave.data));
    if (!data) throw new Error(`data is null`);
    const buf = tldParser.serialize(data);
    if (!buf) throw new Error(`buf is null`);
    await writeFile(this.currentSave.file, buf);

    // const buf1 = await readFile(
    //   'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox1'
    // );
    // const decrypted = lzf.decompress(buf1).toString();
    // const afterDecrypted = lzf.decompress(buf).toString();

    // writeFile('./saveOriginal.json', decrypted);
    // writeFile('./saveAfter.json', afterDecrypted);
  },
};

export default reactive(store);

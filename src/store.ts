import { readdir, readFile, writeFile } from 'fs/promises';
import lzf from 'lzfjs';
import { reactive, toRaw } from 'vue';
import tldParser, { slotParser } from './tldSave/tldParser';
import parser from './tldSave/tldParser';
import async from 'async';
import path from 'path';

interface GameSave {
  file: string;
  data: ReturnType<typeof parser['parse']>;
}

interface SaveSlot {
  file: string;
  name: string;
}

const store = {
  selectedTab: 0,

  availableSaves: [] as SaveSlot[],
  currentSave: undefined as undefined | GameSave,

  get global() {
    return this.currentSave?.data?.m_Dict?.global;
  },

  async refreshAvailableSaves() {
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
    const slots = await async.mapSeries(files, async (file: string) => {
      const fileFullPath = path.join(saveFolder, file);
      const buf = await readFile(fileFullPath);
      const slotData = slotParser.parse(buf);
      return {
        file: fileFullPath,
        name: slotData?.m_Name || '',
      };
    });

    this.availableSaves = slots;
  },
  async loadSave(file: string) {
    const buf = await readFile(file);
    const saveData = tldParser.parse(buf);
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

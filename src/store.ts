import { readFile, writeFile } from 'fs/promises';
import lzf from 'lzfjs';
import { reactive, toRaw } from 'vue';
import tldParser from './tldSave/tldParser';
import parser from './tldSave/tldParser';
import JSON5 from 'json5';

interface GameSave {
  file: string;
  data: ReturnType<typeof parser['parse']>;
}

const store = {
  selectedTab: 0,

  currentSave: undefined as undefined | GameSave,

  get global() {
    return this.currentSave?.data?.m_Dict?.global;
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

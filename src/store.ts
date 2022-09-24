import { readFile, writeFile } from 'fs/promises';
import { reactive } from 'vue';
import tldParser from './tldSave/tldParser';
import parser from './tldSave/tldParser';

interface GameSave {
  file: string;
  data: ReturnType<typeof parser['parse']>;
}

const store = {
  currentSave: undefined as undefined | GameSave,

  get global() {
    return this.currentSave?.data?.m_Dict.global;
  },

  async loadSave(file: string) {
    const buf = await readFile(file);
    const saveData = tldParser.parse(buf);
    console.log(saveData);
    console.log(saveData?.m_Dict.global);
    this.currentSave = {
      file,
      data: saveData,
    };
  },
  async saveCurrent() {
    if (!this.currentSave) return;
    const data = this.currentSave.data;
    if (!data) throw new Error(`data is null`);
    const buf = tldParser.serialize(data);
    if (!buf) throw new Error(`buf is null`);
    await writeFile(this.currentSave.file, buf);
  },
};

export default reactive(store);

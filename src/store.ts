import { readFile, writeFile } from 'fs/promises';
import { reactive } from 'vue';
import tldParser from './tldSave/tldParser';
import parser from './tldSave/tldParser';

interface GameSave {
  file: string;
  data: ReturnType<typeof parser['parse']>;
}

const store = reactive({
  currentSave: undefined as undefined | GameSave,

  async loadSave(file: string) {
    const buf = await readFile(file);
    const saveData = tldParser.parse(buf);
    this.currentSave = {
      file,
      data: saveData,
    };
  },
  async saveCurrent() {
    if (!this.currentSave) return;
    const buf = tldParser.serialize(this.currentSave.data);
    await writeFile(this.currentSave.file, buf);
  },
});

export default store;

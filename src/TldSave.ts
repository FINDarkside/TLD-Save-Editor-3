import lzf from 'lzfjs';
import { Global, SaveRoot } from './saveType';

export default class TldSave {
  private dict;
  private global;
  constructor(save: SaveRoot) {
    this.dict = save.m_Dict;
    this.global = this.parseGlobal(save);
  }

  private parseGlobal(save: SaveRoot): Global {
    const globalBuf = new Uint8Array(save.m_Dict.global as number[]);
    const globalJson = lzf.decompress(globalBuf).toString();
    const globalObj = JSON.parse(globalJson);
    return globalObj;
  }
}

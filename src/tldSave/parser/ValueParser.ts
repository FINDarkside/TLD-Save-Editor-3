import lzf from 'lzfjs';
import json from 'src/util/json';
import Parser, { ParserOptions } from './Parser';

export class ValueParser<OutputType, InputType = any> {
  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;

  constructor() {}

  parse(data: any, options?: ParserOptions) {
    let result: any = data;
    if (this.isCompressed) result = lzf.decompress(result);
    if (this.isJson) result = json.parse(result);
    return result as OutputType;
  }

  serialize(data: InputType) {
    if (data == null) return data;
    let result: any = data;
    if (this.isJson) result = json.stringify(result);
    if (this.isCompressed) result = lzf.compress(result);
    return result as OutputType;
  }

  from(field: string) {
    this.fromField = field;
    return this;
  }

  json() {
    this.isJson = true;
    return this as unknown as ValueParser<OutputType, string>;
  }

  compressed() {
    this.isCompressed = true;
    return this as unknown as ValueParser<OutputType, Uint8Array>;
  }
}

import { SaveRoot } from '../saveType';
import parse from './index';

const tldParser = parse({
  m_Dict: parse({
    global: parse({}).json().compressed(),
  }),
}).withFields<SaveRoot>();

const asd = tldParser.parse({} as any);


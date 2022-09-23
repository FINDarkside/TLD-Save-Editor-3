import { reactive } from 'vue';
import parser from './tldSave/tldParser';

const state = reactive({
  currentSave: null as null | ReturnType<typeof parser['parse']>,
});

export default state;

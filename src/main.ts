import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import { createI18n } from 'vue-i18n';
import enUS from 'locales/en.json';
import type { MessageSchema } from 'locales/schema';

const i18n = createI18n<
  {
    message: MessageSchema;
  },
  'en-US',
  false
>({
  locale: 'en-US',
  legacy: false,
  messages: {
    'en-US': enUS,
  },
});

loadFonts();

createApp(App)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });

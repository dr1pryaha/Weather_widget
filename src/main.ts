import { createApp } from 'vue';
import App from './App.vue';
import WidgetCopy from './components/WidgetCopy.ce.vue';
import router from './router';
import store from './store';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import { defineCustomElement } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

library.add(faUserSecret);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');

const MyWidgetComponent = defineCustomElement(WidgetCopy);
// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('weather-widget', MyWidgetComponent);

export default vuetify;

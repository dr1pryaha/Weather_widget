import { createApp } from 'vue';
import App from './App.vue';
import WidgetComponent from './components/WidgetComponent.ce.vue';
import { defineCustomElement } from 'vue';

createApp(App).mount('#app');

const MyWidgetComponent = defineCustomElement(WidgetComponent);
// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('weather-widget', MyWidgetComponent);

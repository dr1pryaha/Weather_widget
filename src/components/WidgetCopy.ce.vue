<template>
  <div class="widget-card">
    <div class="widget-gear">
      <svg
        @click="showContextMenu = !showContextMenu"
        class="gear-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
        />
      </svg>
      <ContextMenu v-if="showContextMenu"></ContextMenu>
    </div>

    <div class="widget-card-item">
      <div class="widget-card-item__content">
        <span class="widget-card-title">Florida</span>

        <div class="widget-card-subtitle">
          <font-awesome-icon icon="fa-solid fa-user-secret" />
          <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
          <i icon="mdi-alert" size="18" color="error" class="me-1 pb-1"></i>
          <span>Extreme Weather Alert</span>
        </div>
      </div>
    </div>

    <div class="widget-card-text">
      <div class="widget-card-text__row">
        <h2 class="widget-card-text__col text-h2">64&deg;F</h2>
        <div class="widget-card-text__col text-right">
          <svg
            class="text-right-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="widget-card-info">
      <div class="widget-card-info-wind">
        <div class="info-wind__prepand">
          <font-awesome-icon class="icon-wind" icon="fa-solid fa-wind" />
        </div>
        <div class="info-wind-speed">123 km/h</div>
      </div>

      <div class="widget-card-info-precipitation">
        <div class="info-precipitation__prepand">
          <font-awesome-icon
            class="icon-precipitation"
            icon="fa-solid fa-cloud-sun-rain"
          />
        </div>
        <div class="info-precipitation-probable">48%</div>
      </div>
    </div>

    <hr class="widget-card-divider" />

    <div class="widget-card-actions">
      <button class="widget-card-actions-btn" @click="expand = !expand">
        {{ !expand ? 'Full Report' : 'Hide Report' }}
      </button>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="6"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="primary"
            density="compact"
            hide-details
            show-ticks="always"
            thumb-size="10"
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { APIWeatherResponse } from '../interfaces/APIWeatherResponse';
import ContextMenu from '@/components/ContextMenu.ce.vue';

@Options({
  props: {
    iswidgetshown: Boolean,
  },
  components: {
    ContextMenu,
  },
})
export default class WidgetCopy extends Vue {
  labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' };
  expand = false;
  time = 0;
  forecast = [
    { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
    {
      day: 'Wednesday',
      icon: 'mdi-white-balance-sunny',
      temp: '22\xB0/14\xB0',
    },
    { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
  ];
  showContextMenu = false;
  temperature: number;
  API =
    'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=658b619abc07fc8e4c68187ec60efc61';

  getApi = async () => {
    console.log(this);

    return fetch(this.API)
      .then((response) => response.json())
      .then<APIWeatherResponse>((res) => res);
  };

  async created() {
    const weatherResponse = await this.getApi();
    console.log(weatherResponse);
    this.temperature = weatherResponse.temperature;
  }
}
</script>

<style>
.widget-card {
  max-width: 368px;
  margin: 0 auto;
  display: block;
  overflow: hidden;
  overflow-wrap: break-word;
  position: relative;
  padding: 0;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0px;
  border-radius: 4px;
  margin-bottom: 26px;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.widget-gear {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 10px;
}

.gear-icon,
.icon-delete,
.icon-arrow {
  font-size: 18px;
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.widget-card-item {
  align-items: center;
  display: grid;
  flex: none;
  grid-template-areas: 'prepend content append';
  grid-template-columns: max-content auto max-content;
  padding: 0.625rem 1rem;
}

.widget-card-item__content {
  align-self: center;
  grid-area: content;
  overflow: hidden;
}

.widget-card-title {
  display: block;
  flex: none;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  -webkit-hyphens: auto;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  word-break: normal;
  word-wrap: break-word;
}

.widget-card-subtitle {
  display: block;
  flex: none;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.0178571429em;
  opacity: 0.5;
  overflow: hidden;
  padding: 0 1rem;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}

.widget-card-text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  padding: 1rem;
  text-transform: none;
}

.widget-card-text__row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}

.widget-card-text__col {
  flex: 0 0 50%;
  max-width: 50%;
}

.text-h2 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  font-family: 'Roboto', sans-serif !important;
  text-transform: none !important;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
}

.text-right {
  text-align: right;
}

.text-right-icon {
  font-size: 88px;
  height: 88px;
  width: 88px;
  fill: yellow;
}

.widget-card-info {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
}

.widget-card-info-wind,
.widget-card-info-precipitation {
  align-items: center;
  display: grid;
  flex: none;
  grid-template-areas: 'prepend content append';
  grid-template-columns: max-content auto max-content;
  outline: none;
  max-width: 100%;
  padding: 4px 16px;
  position: relative;
  text-decoration: none;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  border-radius: 0;
  min-height: 32px;
}

.info-wind__prepand,
.info-precipitation__prepand {
  align-items: center;
  align-self: center;
  display: flex;
  grid-area: prepend;
}

.icon-wind,
.icon-precipitation {
  -webkit-margin-end: 32px;
  margin-inline-end: 32px;
  opacity: 0.5;
}

.info-wind-speed,
.info-precipitation-probable {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  opacity: 0.5;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1rem;
  text-transform: none;
}

.widget-card-divider {
  display: block;
  flex: 1 1 100%;
  height: 0px;
  max-height: 0px;
  opacity: 0.3;
  transition: inherit;
  border-style: solid;
  border-width: thin 0 0 0;
}

.widget-card-actions {
  align-items: center;
  display: flex;
  flex: none;
  min-height: 52px;
  padding: 0.5rem;
}

.widget-card-actions-btn {
  padding: 0 8px;
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  font-size: 0.875rem;
  min-width: 64px;
  padding: 0 16px;
  text-transform: uppercase;
  outline: 0;
  align-items: center;
  border-radius: 4px;
  display: inline-grid;
  grid-template-areas: 'prepend content append';
  grid-template-columns: max-content auto max-content;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  max-width: 100%;
  outline: none;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  height: 45px;
  cursor: pointer;
}

.context-menu__wrapper {
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  transition: inherit;
  width: 100%;
  will-change: opacity;
  opacity: 0.46;
  background-color: rgb(33, 33, 33);
  border-color: rgb(33, 33, 33);
}

.context-menu {
  width: 250px;
  height: 250px;
  background-color: #e4fcf9;
  position: absolute;
  top: 30px;
  z-index: 1;
  padding: 10px;
}

.context-menu-title {
  margin: 0 0 10px 0;
}

.context-menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 5px;
  border: 1px solid #feffdf;
  border-radius: 4px;
  cursor: pointer;
}

.context-menu-item:hover {
  background-color: #feffdf;
}

.icon-delete:hover {
  fill: #f56262;
  cursor: pointer;
}

.context-menu-input {
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 1px solid cadetblue;
  padding: 0;
  margin: 10px 0;
  outline: none;
}

.input-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon-arrow:hover {
  fill: cadetblue;
}
</style>

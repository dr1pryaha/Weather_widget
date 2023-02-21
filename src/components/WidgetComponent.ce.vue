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
      <ContextMenu
        v-if="showContextMenu"
        :cities="cities"
        :deleteCity="deleteCity"
        :addCity="addCity"
        :putCityFirst="putCityFirst"
      ></ContextMenu>
    </div>

    <div class="widget-card-item">
      <div class="widget-card-item__content">
        <span class="widget-card-title">{{ cityName }}</span>

        <div class="widget-card-subtitle">
          <span>{{ descriptionWeather }}</span>
        </div>
      </div>
    </div>

    <div class="widget-card-text">
      <div class="widget-card-text__row">
        <h2 class="widget-card-text__col text-h2">{{ temperature }}&deg;C</h2>
        <div class="widget-card-text__col text-right">
          <img
            class="text-right-icon"
            :src="`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`"
          />
        </div>
      </div>
    </div>

    <div class="widget-card-info">
      <div class="widget-card-info-wind">
        <div class="info-wind__prepand">
          <svg
            class="icon-wind"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
            />
          </svg>
        </div>
        <div class="info-wind-speed">{{ windSpeed }} km/h</div>
      </div>

      <div class="widget-card-info-precipitation">
        <div class="info-precipitation__prepand">
          <svg
            class="icon-rain"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
            />
          </svg>
        </div>
        <div class="info-precipitation-probable">{{ humidity }} %</div>
      </div>
    </div>

    <hr class="widget-card-divider" />

    <div class="widget-card-actions">
      <button class="widget-card-actions-btn" @click="expand = !expand">
        {{ !expand ? 'Весь отчет' : 'Скрыть отчет' }}
      </button>
    </div>

    <div v-if="expand">
      <transition-group>
        <div
          v-for="item in fullReportWeather()"
          :key="item.id"
          class="full-report-item"
        >
          <div class="full-report-item__content" data-no-activator="">
            <div class="full-report-item-title">{{ item.info }}</div>
            <div class="full-report-item-subtitle">{{ item.result }}</div>
          </div>
        </div>
      </transition-group>
    </div>
    <ErrorModal
      :showModalError="showModalError"
      :visiblilityModalError="visiblilityModalError"
    ></ErrorModal>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { APIWeatherResponse } from '../interfaces/APIWeatherResponse';
import ContextMenu from '@/components/ContextMenu.vue';
import ErrorModal from '@/components/ErrorModal.vue';

@Options({
  components: {
    ContextMenu,
    ErrorModal,
  },
})
export default class WidgetComponent extends Vue {
  expand = false;

  cities: Array<{ id: number | null; cityName: string | null }> =
    localStorage.storedData ? JSON.parse(localStorage.storedData) : [];

  deleteCity(id: number) {
    this.cities = this.cities.filter((item) => {
      return item.id !== id;
    });
  }

  addCity(nameOfCity: string) {
    const existedCity = this.cities.find((item) => {
      return nameOfCity === item.cityName;
    });
    if (existedCity === undefined && nameOfCity.length !== 0) {
      this.cities = [
        ...this.cities,
        {
          id: this.cities.length + 1,
          cityName: nameOfCity,
        },
      ];
    }
  }

  putCityFirst(id: number) {
    const cityChanged = this.cities.find((item) => {
      return id === item.id;
    });
    if (cityChanged !== undefined) {
      this.cities = this.cities.filter((item) => {
        return item.id !== id;
      });
      this.cities.unshift(cityChanged);
    }
    this.showContextMenu = !this.showContextMenu;
  }

  showContextMenu = false;

  temperature: number | null = null;
  cityName: string | null = null;
  descriptionWeather: string | null = null;
  windSpeed: number | null = null;
  weatherIcon: string | null = null;
  humidity: number | null = null;
  tempFeelsLike: number | null = null;
  pressure: number | null = null;
  tempMax: number | null = null;
  tempMin: number | null = null;

  fullReportWeather = () => {
    return [
      {
        id: 0,
        info: 'Температура ощущается как (\u00B0C)',
        result: this.tempFeelsLike,
      },
      {
        id: 1,
        info: 'Атмосферное давление (мм рт. ст.)',
        result: this.pressure,
      },
      {
        id: 2,
        info: 'Максимальная температура (\u00B0C)',
        result: this.tempMax,
      },
      {
        id: 3,
        info: 'Минимальная температура (\u00B0C)',
        result: this.tempMin,
      },
    ];
  };

  visiblilityModalError = false;

  showModalError() {
    this.visiblilityModalError = !this.visiblilityModalError;
  }

  latitude: string | null = null;
  longitude: string | null = null;

  async getPosition(): Promise<void | GeolocationPosition> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    )
      .then((position: unknown) => {
        const {
          coords: { latitude, longitude },
        } = position as GeolocationPosition;
        this.latitude = latitude.toFixed(2);
        this.longitude = longitude.toFixed(2);
      })
      .catch((error) => console.log(error));
  }

  getApiUrlParams(): string {
    if (this.cities.length > 0) {
      return `q=${this.cities[0].cityName}`;
    } else if (this.latitude && this.longitude) {
      return `lat=${this.latitude}&lon=${this.longitude}`;
    }
    return `q=Moscow`;
  }

  getApiUrl = () => {
    return `https://api.openweathermap.org/data/2.5/weather?${this.getApiUrlParams()}&appid=658b619abc07fc8e4c68187ec60efc61&units=metric&lang=ru`;
  };

  getWeatherResponse = async () => {
    return fetch(this.getApiUrl())
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.showModalError();
        }
      })
      .then<APIWeatherResponse>((res) => res);
  };

  setWatchers() {
    this.$watch(
      'cities',
      (newCities) => {
        localStorage.storedData = JSON.stringify(newCities);
        this.setData();
      },
      { deep: true }
    );
  }

  //для первого запроса, когда cities пустой массив
  setDefaultData() {
    if (this.cities.length === 0) {
      this.cities[0] = { id: 1, cityName: this.cityName };
    }
  }

  async setData() {
    try {
      const weatherResponse = await this.getWeatherResponse();
      this.cityName = weatherResponse.name;
      this.temperature = Math.ceil(weatherResponse.main.temp);
      this.descriptionWeather =
        weatherResponse.weather[0].description.toUpperCase();
      this.windSpeed = weatherResponse.wind.speed;
      this.humidity = weatherResponse.main.humidity;
      this.weatherIcon = weatherResponse.weather[0].icon;
      this.tempFeelsLike = Math.ceil(weatherResponse.main.feels_like);
      this.pressure = weatherResponse.main.pressure;
      this.tempMax = Math.ceil(weatherResponse.main.temp_max);
      this.tempMin = Math.ceil(weatherResponse.main.temp_min);
      this.setDefaultData();
    } catch (error) {
      console.log(error);
    }
  }

  async created() {
    this.setWatchers();
    await this.getPosition();
    this.setData();
  }
}
</script>

<style>
.widget-card {
  max-width: 368px;
  margin: 30px auto;
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
  border-style: solid;
  border-width: 0px;
  border-radius: 4px;
  margin-bottom: 26px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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

.gear-icon:hover {
  fill: #5f9ea0;
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
  font-size: 12px;
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
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em;
  font-family: 'Roboto', sans-serif;
  text-transform: none;
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
  background-color: #ffe4c4;
  border-radius: 50%;
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
}

.icon-wind,
.icon-rain {
  -webkit-margin-end: 32px;
  margin-inline-end: 32px;
  opacity: 0.5;
  height: 18px;
  width: 18px;
}

.info-wind-speed,
.info-precipitation-probable {
  -webkit-box-orient: vertical;
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
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
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
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0;
  border-style: solid;
  border-width: 0;
  height: 45px;
  cursor: pointer;
}

.widget-card-actions-btn:hover {
  background-color: #ffdd97;
}

.context-menu {
  width: 250px;
  height: 300px;
  background-color: #fffcee;
  position: absolute;
  top: 30px;
  z-index: 1;
  padding: 10px;
}

.context-menu-items {
  height: 150px;
  overflow-y: scroll;
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
  background-color: #ffdd97;
}

.icon-delete:hover {
  fill: #a63431;
  cursor: pointer;
}

.context-menu-input {
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #5f9ea0;
  padding-left: 10px;
  margin: 10px 0;
  outline: none;
}

.input-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon-arrow:hover {
  fill: #5f9ea0;
}

.full-report-item {
  min-height: 48px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
}

.full-report-item__content {
  align-self: center;
  grid-area: content;
  overflow: hidden;
}

.full-report-item-title {
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  word-wrap: break-word;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  line-height: 1.5rem;
  text-transform: none;
}

.full-report-item-subtitle {
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

.errorBar {
  position: fixed;
  inset: -10px 0px 0px;
  z-index: 109;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  opacity: 1;
  transition: visibility 0ms ease 0ms, opacity 300ms ease 0ms;
}

.errorBarSection {
  overflow: hidden;
  position: absolute;
  top: 10%;
  left: 40%;
  width: 18vw;
  padding: 1px 14px 14px;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  transform: translateX(0px);
  transition: all 300ms ease 100ms;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);
  border-radius: 15px;
}

.errorBarHeader {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 4px;
}

.headerCrossBtn {
  margin-top: 10px;
  flex: 0 0 auto;
  align-self: flex-end;
  outline: none;
  cursor: pointer;
}

.headerCross {
  vertical-align: middle;
  box-sizing: content-box;
  cursor: inherit;
}

.errorTitle {
  text-align: left;
  color: #881c1c;
  font-size: 20px;
}

.errorDelivery {
  color: #d15656;
  cursor: pointer;
}

.errorDelivery:hover {
  border-color: transparent;
  color: #e88282;
}

.errorText {
  text-align: left;
  font-size: 16px;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>

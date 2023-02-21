<template>
  <div class="context-menu">
    <h3 class="context-menu-title">Settings</h3>
    <div class="context-menu-items custom-scroll">
      <draggable :list="cities">
        <transition-group>
          <div
            @click="putCityFirst(item.id)"
            v-for="item in cities"
            :key="item.id"
            class="context-menu-item"
          >
            <span class="item-name">{{ item.cityName }}</span>
            <svg
              @click.stop="deleteCity(item.id)"
              class="icon-delete"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
              />
            </svg>
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="input-wrapper">
      <input
        v-model="nameOfCity"
        type="text"
        placeholder="Добавьте город"
        class="context-menu-input"
      />
      <svg
        @click="handleArrowClick()"
        class="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        />
      </svg>
    </div>
    <!-- <div class="context-menu-actions">
      <button
        @click="setStorageData()"
        :disabled="cities"
        class="context-menu-actions-btn"
      >
        Сохранить настройки
      </button>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import { VueDraggableNext } from 'vue-draggable-next';

class Props {
  cities: Array<{ id: number; name: string }> = prop({
    required: true,
  });
  deleteCity: () => void = prop({
    required: true,
  });
  addCity: (name: string) => void = prop({
    required: true,
  });
  putCityFirst: (id: number) => void = prop({
    required: true,
  });
}

@Options({
  components: {
    draggable: VueDraggableNext,
  },
})
export default class WidgetCopy extends Vue.with(Props) {
  nameOfCity = '';

  handleArrowClick() {
    this.addCity(this.nameOfCity);
    this.nameOfCity = '';
  }
}
</script>
<style>
.context-menu {
  width: 250px;
  height: 250px;
  background-color: brown;
}
</style>

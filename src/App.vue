<template>
  <ButtonAddWidget :showWidget="showWidget"></ButtonAddWidget>
  <WidgetComponent :iswidgetshown="isWidgetShown"></WidgetComponent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WidgetComponent from '@/components/WidgetComponent.ce.vue';

import ButtonAddWidget from '@/components/ButtonAddWidget.vue';
import './css/app.css';

@Options({
  components: {
    WidgetComponent,
    ButtonAddWidget,
  },
})
export default class App extends Vue {
  carts = [];

  isWidgetShown = false;

  showWidget(): boolean {
    return (this.isWidgetShown = !this.isWidgetShown);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

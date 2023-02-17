<template>
  <ButtonAddWidget></ButtonAddWidget>
  <WidgetComponent :showWidget="showWidget"></WidgetComponent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import WidgetComponent from '@/components/WidgetComponent.vue'; // @ is an alias to /src
import ButtonAddWidget from '@/components/ButtonAddWidget.vue';

@Options({
  components: {
    WidgetComponent,
    ButtonAddWidget,
  },
})
export default class App extends Vue {
  data() {
    return {
      carts: [],
      showWidget: true,
    };
  }
  // methods:{
  //   isShownWidget(): boolean{
  //   return this.showWidget = !this.showWidget
  //   }
  //  }
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

<template>
  <div class="button-component">
    <button
      class="btn__add"
      @click="showWidget"
      icon="mdi-plus"
      size="x-large"
      color="primary"
    >
      <svg
        class="icon-plus"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    showWidget: Function,
  },
})
export default class ButtonAddWidget extends Vue {}
</script>
<style scoped>
.btn__add {
  width: 62px;
  height: 62px;
  background-color: #6200ee;
  border-radius: 50%;
  min-width: 0;
  padding: 0;
}

.icon-plus {
  fill: #fff;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.button-component {
  margin: 0, auto;
  margin-top: 30px;
}

.btn__add:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.btn__add:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #642db3;
}
</style>

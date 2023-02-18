<template>
  <v-container @click="showWidget">
    <v-row justify="space-between" class="text-center">
      <v-col>
        <v-btn icon="mdi-plus" size="x-large" color="primary"></v-btn>
      </v-col>
    </v-row>
  </v-container>
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

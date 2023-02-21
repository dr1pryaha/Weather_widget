<template>
  <div class="errorBar" v-if="this.visiblilityModalError">
    <section class="errorBarSection">
      <div class="errorBarHeader">
        <a class="headerCrossBtn" @click="showModalError">
          <svg
            class="headerCross"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.4042 0.806603C2.20894 0.611341 1.89236 0.611341 1.6971 0.806603L0.636437 1.86726C0.441175 2.06253 0.441175 2.37911 0.636437 2.57437L5.23259 7.17052L0.989897 11.4132C0.794635 11.6085 0.794635 11.9251 0.989897 12.1203L2.05056 13.181C2.24582 13.3762 2.5624 13.3762 2.75766 13.181L7.00036 8.93829L11.243 13.181C11.4383 13.3762 11.7549 13.3762 11.9501 13.181L13.0108 12.1203C13.2061 11.925 13.2061 11.6085 13.0108 11.4132L8.76812 7.17052L13.3643 2.57438C13.5595 2.37912 13.5595 2.06254 13.3643 1.86728L12.3036 0.806615C12.1083 0.611353 11.7918 0.611353 11.5965 0.806615L7.00036 5.40276L2.4042 0.806603Z"
              fill="#222222"
            ></path>
          </svg>
        </a>
      </div>
      <slot name="title"><h2 class="errorTitle">Error!</h2></slot>
      <slot name="text"
        ><h3 class="errorText">
          City is undefined.
          <a @click="showModalError" class="errorDelivery">Please, try again</a>
        </h3></slot
      >
    </section>
  </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';

class Props {
  visiblilityModalError: boolean = prop({
    required: true,
  });
  showModalError: () => void = prop({
    required: true,
  });
}

@Options({
  components: {},
})
export default class ErrorModal extends Vue.with(Props) {}
</script>
<style></style>

<template>
  <div class="c-rating">
    <img
      class="c-rating__icon"
      src="@/assets/star-icon.svg"
    >
    <strong>
      {{ `${score}${hideScale ? '' : '/' + scale}` }}
    </strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    scale: {type: Number, default: 10},
    hideScale: {type: Boolean, default: false},
    score: {type: [Number, String], required: true}
  },
  setup () {
    return {};
  }
});
</script>

<style scoped lang="scss">
  .c-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;

    &__icon {
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
</style>

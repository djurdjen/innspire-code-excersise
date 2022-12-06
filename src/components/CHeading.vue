<template>
  <div>
    <component
      :is="`h${level}`"
      :class="[
        `c-heading c-h${levelForStyling}`,
      ]"
    >
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHasSlot } from "@/composables/useHasSlot";

export default defineComponent({
  name: "CHeading",
  props: {
    level: { type: [Number, String], default: 1 },
    styleLevel: {type: [Number, String], default: null}
  },
  setup(props) {
    const hasDefaultSlot = useHasSlot();

    return {
      hasDefaultSlot,
      levelForStyling: props.styleLevel || props.level
    };
  }
});
</script>

<style scoped lang="scss">

.c-heading {
  margin: 0;
}
.c-h1 {
  font-size: 24px;
  @include media-query('md') {
    font-size: 32px;
  }}

.c-h2 {
  font-size: 18px;
  @include media-query('md') {
    font-size: 24px;
  }
}

.c-h3 {
  font-size: 14px;
  @include media-query('md') {
    font-size: 20px;
  }
}


</style>

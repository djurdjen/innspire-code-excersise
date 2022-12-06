<template>
  <div class="c-spinner">
    <div class="c-spinner__spinner" />
    <div
      v-if="hasDefaultSlot"
      class="c-spinner__text"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { useHasSlot } from '@/composables/useHasSlot';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CSpinner',
  setup(){
    const hasDefaultSlot = useHasSlot();
    return {
      hasDefaultSlot
    };
  }
});
</script>

<style scoped lang="scss">
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.c-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgb(250, 250, 250);
    border-radius: 100%;
    animation: spin 0.7s linear infinite;
    border-top: 4px solid var(--color-primary);
  }
  &__text {
    margin-top: 20px;
    display: block;
    color: gray;
  }
}
</style>

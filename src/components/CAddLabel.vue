<template>
  <button
    :class="['c-add-label', {'c-add-label--added': added}]"
    @click="$emit('click')"
  >
    <div :class="['c-add-label__icon', {'c-add-label__icon--added': added}]" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    added: {type: Boolean, default: false}
  },
  emits: ['click']
});
</script>

<style scoped lang="scss">
  .c-add-label {
    width: 30px;
    height: 50px;
    display: block;
    border: none;
    background-color: rgba(0,0,0, 0.3);
    cursor: pointer;
    position: relative;

    &--added {
      background-color: green;
    }

    &__icon {
      &::before, &:after {
        content: '';
        display: block;
        width: 20px;
        height: 5px;
        position: absolute;
        background-color: white;
        left: 6px;
        top: 28px;
        transition: all ease-in-out 300ms;
      }

      &::after {
        transition: all ease-in-out 300ms;
        transform: rotate(-90deg);
      }

      &--added {
        &:before {
          transition: all ease-in-out 300ms;
          width: 10px;
          transform: rotate(45deg);
        }
        &::after {
          transition: all ease-in-out 300ms;
          width: 18px;
          top: 25px;
          left: 9px;
          transform: rotate(135deg);
        }
      }
    }
  }
</style>

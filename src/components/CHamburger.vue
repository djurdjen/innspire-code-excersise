<template>
  <div :class="['c-hamburger', {'c-hamburger--open': open}]">
    <span />
    <span />
    <span />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CHamburger',
  props: {
    open: {type: Boolean, default: false}
  }
});
</script>

<style lang="scss" scoped>
.c-hamburger {
  width: 60px;
  height: 45px;
  position: relative;
  transform: rotate(0deg) scale(0.5);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 18px;
    }

    &:nth-child(3) {
      top: 36px;
    }
  }

  &--open {
      span {
        &:nth-child(1) {
          top: 18px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &:nth-child(3) {
          top: 18px;
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
}
</style>

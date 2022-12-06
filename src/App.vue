<template>
  <main class="app">
    <nav class="app__navigation">
      <CHeading
        class="app__navigation__heading"
        :level="1"
      >
        Best of Tom Hanks
      </CHeading>
      <div
        :class="['app__navigation__items', {'app__navigation__items--visible-for-mobile': menuOpen}]"
        @click="(menuOpen = false)"
      >
        <router-link :to="{name: 'MovieOverview'}">
          Overview
        </router-link>
        <router-link :to="{name: 'MovieFavourites'}">
          Favourites
        </router-link>
      </div>
      <CHamburger
        class="app__navigation__hamburger"
        :open="menuOpen"
        @click="(menuOpen = !menuOpen)"
      />
    </nav>
    <div class="app__container">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CHamburger from './components/CHamburger.vue';
import CHeading from './components/CHeading.vue';

export default defineComponent({
  components: { CHeading, CHamburger },
  setup() {
    return {
      menuOpen: ref(false)
    };
  }
});
</script>

<style lang="scss">
.app {
  &__navigation {
    padding: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(212, 175, 112);
    background-color: var(--color-primary);
    height: 58px;
    justify-content: space-between;

    @include media-query('md') {
      justify-content: flex-start;
    }

    &__heading {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid rgb(212, 175, 112);
    }

    &__hamburger {
      display: block;
      @include media-query('md') {
        display: none;
      }
    }

    &__items {
      position: fixed;
      background-color: white;
      top: 58px;
      left: 0;
      right: 0;
      bottom:0;
      z-index: 20;
      display: none;
      flex-direction: column;
      flex-grow: 1;

      &--visible-for-mobile {
        display: flex;
      }

      a {
        display: block;
        padding: 12px;
      }

      @include media-query('md') {
        position: static;
        display: block;
        z-index: 0;
        background-color: transparent;

        a {
          padding: 0;
        }
      }
    }

    a {
      text-decoration: none;
      font-size: 20px;
      margin-right: 20px;
      display: inline;
      font-weight: 100;

      &.router-link-active {
        font-weight: 800;
        text-decoration: underline;
      }
    }
  }
}
</style>

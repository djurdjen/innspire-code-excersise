<template>
  <div :class="['c-movie-entry']">
    <div
      v-if="hasPrefix"
      class="c-movie-entry__prefix"
    >
      <slot name="prefix" />
    </div>
    <component 
      :is="element"
      :to="to"
      :class="['c-movie-entry__link', {'c-movie-entry__link--has-prefix': hasPrefix}]"
    >
      <div class="c-movie-entry__description">
        <CHeading :level="2">
          {{ title }} - {{ year }}
        </CHeading>
        <p class="c-movie-entry__plot">
          {{ plot }}
        </p>
      </div>
      <div class="c-movie-entry__meta">
        <CRating 
          hide-scale 
          :score="rating"
          class="c-movie-entry__rating" 
        />
        <img
          class="c-movie-entry__image"
          :src="image"
          :name="`cover image for ${title}`"
        >
      </div>
    </component>
  </div>
</template>

<script lang="ts">
import { useHasSlot } from '@/composables/useHasSlot';
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';
import CAddLabel from './CAddLabel.vue';
import CHeading from './CHeading.vue';
import CRating from './CRating.vue';

export default defineComponent({
  name: 'CMovieEntry',
  components: { CHeading, CRating, CAddLabel },
  props: {
    title: { type: String, required: true },
    rating: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String, required: true },
    plot: { type: String, required: true },
    to: { type: [Object as () => Partial<RouteLocation> | null], default: null }
  },
  setup(props) {
    const hasPrefix = useHasSlot('prefix');
    const element = computed(() => {
      if (props.to) {
        return 'router-link';
      } else {
        return 'div';
      }
    });
    return { element, hasPrefix };
  }
});
</script>

<style scoped lang="scss">
.c-movie-entry {
  position: relative;
  border-bottom: 1px solid rgb(214, 214, 214);

  &__prefix {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 10;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 8px 8px 8px 16px;
    transition: all 200ms ease-in-out;
    position: relative;
    min-height: 90px;

    &--has-prefix {
      padding-left: 60px;
    }

    &:hover {
      background-color: rgb(221, 221, 221);
      transition: all 200ms ease-in-out;
    }
  }

  &__description {
    min-width: 0;
  }

  &__meta {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__plot {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: none;

    @media (min-width: 475px) {
      display: block;
    }
  }

  &__rating {
    margin: 0 24px;
  }

  &__image {
    display: none;
    object-fit: cover;
    width: 60px;
    height: 90px;

    @include media-query('md') {
      display: block;
    }
  }
  
}
</style>

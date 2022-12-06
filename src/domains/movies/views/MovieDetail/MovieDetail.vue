<template>
  <Teleport to="body">
    <div class="movie-detail">
      <div
        class="movie-detail__overlay"
        @click="$emit('closed')"
      />
      <div class="movie-detail__container">
        <div
          class="movie-detail__close-icon"
          @click="$emit('closed')"
        >
          ✕
        </div>
        <div
          v-if="isReady"
          class="movie-detail__meta"
        >
          <div class="movie-detail__description">
            <CHeading
              :level="3"
              :style-level="1"
            >
              {{ title }} ({{ year }})
            </CHeading>
            <CRating
              class="movie-detail__rating"
              :score="rating"
            />
            <p>{{ plot }}</p>
            <ul class="movie-detail__meta__list-data">
              <li><strong>Director(s):</strong> {{ directors }}</li>
              <li><strong>Stars:</strong> {{ stars }}</li>
              <li><strong>Genre:</strong> {{ genre }}</li>
              <li><strong>Runtime:</strong> {{ runtime }}</li>
              <li><strong>Languages:</strong> {{ languages }}</li>
              <li><strong>Release date:</strong> {{ releaseDate }}</li>
            </ul>
            <p class="movie-detail__more-info">
              For more info about this movie check
              <a
                :href="`https://www.imdb.com/title/${id}`"
                target="_blank"
              >IMDB</a>
            </p>
          </div>
          <div class="movie-detail__image">
            <img :src="image">
          </div>
        </div>
        <CSpinner
          v-else
          class="movie-detail__spinner"
        >
          Let's fetch this masterpiece...
        </CSpinner>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import CHeading from '@/components/CHeading.vue';
import CRating from '@/components/CRating.vue';
import CSpinner from '@/components/CSpinner.vue';
import { defineComponent } from 'vue';
import { MovieDetailViewModel } from '../../view-models/MovieDetailViewModel';

export default defineComponent({
  components: { CHeading, CRating, CSpinner },
  props: {
    id: { type: String, required: true }
  },
  emits: ['closed'],
  setup(props) {
    const viewModel = new MovieDetailViewModel(props.id);
    return {
      isReady: viewModel.isReady,
      ...viewModel.viewModelRefs
    };
  }
});
</script>

<style scoped lang="scss">
.movie-detail {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: pointer;
  }

  &__container {
    border-radius: 6px;
    max-width: 764px;
    width: 100%;
    padding: 24px;
    background-color: white;
    z-index: 10;
    margin: 0 12px;
    position: relative;
    z-index: 10;
  }

  &__meta {
    display: flex;
    flex-direction: row;

    &__list-data {
      margin: 12px 0;
      list-style: none;
    }
  }

  &__more-info {
    padding-top: 12px;
    display: block;
    font-style: italic;
  }

  &__image {
    display: none;
    margin-top: 40px;

    @include media-query('md') {
      display: block;
    }

    img {
      max-width: 200px;
    }
  }

  &__spinner {
    margin-top: 40px;
  }

  &__rating {
    margin: 12px 0;
  }

  &__close-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 2px solid black;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>

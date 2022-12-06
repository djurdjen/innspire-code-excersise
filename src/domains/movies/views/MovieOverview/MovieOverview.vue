<template>
  <div class="movie-overview">
    <div
      v-if="isReady"
      class="movie-overview__data"
    >
      <div
        v-for="entry in paginatedData"
        :key="entry.id" 
        class="movie-overview__data__entry"
      >
        <CMovieEntry 
          :title="entry.title"
          :year="entry.year"
          :image="entry.image"
          :rating="entry.rating"
          :plot="entry.plot"
          :to="{name: 'MovieDetail', params: {id: entry.id}}"
        >
          <template #prefix>
            <CAddLabel 
              :added="isFavourite(entry.id)" 
              class="movie-overview__data__entry__favourite"
              @click="toggleFavouriteMovie(entry.id)"
            />
          </template>
        </CMovieEntry>
      </div>
      <div class="movie-overview__show-more">
        <button
          v-if="!reachedMaximumEntries"
          @click="setResultMultiplier"
        >
          Show more
        </button>
      </div>
    </div>
    <CSpinner
      v-else
      class="movie-overview__spinner"
    >
      Fetching the Hanks...
    </CSpinner>
    <router-view @closed="navigateBackToParent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MovieOverviewComposable } from './MovieOverviewComposable';
import CHeading from '@/components/CHeading.vue';
import CMovieEntry from '@/components/CMovieEntry.vue';
import { useRouter } from 'vue-router';
import CAddLabel from '@/components/CAddLabel.vue';
import localStorageHelper, { LOCAL_STORAGE_KEYS } from '@/services/localstorage';
import CSpinner from '@/components/CSpinner.vue';

export default defineComponent({
  name: 'MovieOverview',
  components: { CHeading, CMovieEntry, CAddLabel, CSpinner },
  setup() {
    const composable = new MovieOverviewComposable().getComposable();
    const router = useRouter();
    const favourites = ref<string[]>(localStorageHelper.get(LOCAL_STORAGE_KEYS.FAVOURITE_FILMS) || []);

    function navigateBackToParent () {
      router.push({name: 'MovieOverview'});
    }

    function toggleFavouriteMovie (id: string) {
      const newFavouritesList = favourites.value.includes(id) ? favourites.value.filter(f => f !== id) : [...favourites.value, id];
      favourites.value = newFavouritesList;
      localStorageHelper.set(LOCAL_STORAGE_KEYS.FAVOURITE_FILMS, newFavouritesList);
    }

    function isFavourite (id: string) {
      return favourites.value.includes(id);
    }

    return {
      navigateBackToParent,
      toggleFavouriteMovie,
      isFavourite,
      ...composable
    };
  }
});

</script>

<style lang="scss" scoped>
  .movie-overview {
    &__data {
      display: flex;
      flex-direction: column;

      &__entry {
        $entry: &;

        position: relative;

        &:last-child {
          border-bottom: 0;
        }

        &__favourite {
          margin-left: 12px;
        }
      }
    }
    &__show-more {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 36px;

      button {
        cursor: pointer;
        padding: 12px;
        font-size: 16px;
      }
    }

    &__spinner {
      margin-top: 36px;
    }
  }
</style>

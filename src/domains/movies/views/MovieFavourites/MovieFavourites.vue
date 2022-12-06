<template>
  <div class="movie-favourites">
    <template v-if="(data.length && isReady)">
      <div
        v-for="entry in data"
        :key="entry.id" 
        class="movie-favourites__entry"
      >
        <CMovieEntry 
          :title="entry.title"
          :year="entry.year"
          :image="entry.image"
          :rating="entry.rating"
          :plot="entry.plot"
          :to="{name: 'MovieFavouritesDetail', params: {id: entry.id}}"
        >
          <template #prefix>
            <CAddLabel 
              added 
              class="movie-favourites__label"
              @click="removeFavouriteMovie(entry.id)"
            />
          </template>
        </CMovieEntry>
      </div>
    </template>

    <div
      v-else-if="isReady"
      class="movie-favourites__empty"
    >
      <span>You have not yet added any favorites</span>
      <router-link :to="{name: 'MovieOverview'}">
        Go add some!
      </router-link>
    </div>

    <CSpinner
      v-else
      class="movie-favourites__spinner"
    >
      Fetching the Hanks...
    </CSpinner>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { getOrCreateAllMoviesModel } from '@/domains/movies/view-models/AllMoviesViewModel';
import localStorageHelper, { LOCAL_STORAGE_KEYS } from '@/services/localstorage';
import CMovieEntry from '@/components/CMovieEntry.vue';
import CAddLabel from '@/components/CAddLabel.vue';
import CSpinner from '@/components/CSpinner.vue';

export default defineComponent({
  components: { CMovieEntry, CAddLabel, CSpinner },
  setup() {
    const model = getOrCreateAllMoviesModel();
    const favourites = ref<string[]>(localStorageHelper.get(LOCAL_STORAGE_KEYS.FAVOURITE_FILMS) || []);
    const data = computed(() => model.viewModelRefs.data.value.filter(d => favourites.value.includes(d.id)));

    function removeFavouriteMovie(id: string) {
      const payload = favourites.value.filter(f => f !== id);
      favourites.value = payload;
      localStorageHelper.set(LOCAL_STORAGE_KEYS.FAVOURITE_FILMS, favourites.value.filter(f => f !== id));
    }
    return {
      data,
      isReady: model.isReady,
      removeFavouriteMovie
    };
  }
});
</script>

<style lang="scss" scoped>
.movie-favourites {
  &__label {
    margin-left: 12px;
  }
  &__empty {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 36px;

    span, a {
      color: grey;
    }
  }

  &__spinner {
    margin-top: 36px;
  }
}
</style>

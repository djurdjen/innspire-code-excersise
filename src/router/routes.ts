import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieOverview',
    component: () => import(/* webpackChunkName: "MovieOverview" */ '../domains/movies/views/MovieOverview/MovieOverview.vue'),
    children: [
      {
        props: true,
        path: '/movie/:id',
        name: 'MovieDetail',
        component: () => import(/* webpackChunkName: "MovieOverview" */ '../domains/movies/views/MovieDetail/MovieDetail.vue')
      }
    ]
  },

  {
    path: '/favourites',
    name: 'MovieFavourites',
    component: () => import(/* webpackChunkName: "MovieFavourites" */ '../domains/movies/views/MovieFavourites/MovieFavourites.vue'),
    children: [
      {
        props: true,
        path: '/favourites/:id',
        name: 'MovieFavouritesDetail',
        component: () => import(/* webpackChunkName: "MovieFavourites" */ '../domains/movies/views/MovieDetail/MovieDetail.vue')
      }
    ]
  }
];

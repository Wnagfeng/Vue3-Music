import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import MvVue from '@/views/Mv.vue';
import MyMusicVue from '@/views/MyMusic.vue';
import RankingVue from '@/views/Ranking.vue';
import SongMapVue from '@/views/SongMap.vue';
import SongPersongVue from '@/views/SongPersong.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingVue,
    },
    {
      path: '/songmap',
      name: 'songmap',
      component: SongMapVue,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/MV',
      name: 'MV',
      component: MvVue,
    },
    {
      path: '/songpersong',
      name: 'songpersong',
      component: SongPersongVue,
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusicVue,
    },
  ],
});

export default router;

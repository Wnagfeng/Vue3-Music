import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getBannerData, getPlaylistdata } from '../server/home';
import type { HomeType } from './Types/Home.type';
export const useHomeStore = defineStore('HomeStore', {
  state: (): HomeType => {
    return {
      banners: [],
      type: '华语',
      playlists: [],
    };
  },
  actions: {
    async fetchGetBannerData() {
      const res = await getBannerData();
      this.banners = res.banners;
    },
    async changecurrentnav(nav: string) {
      this.fetchGetPaylistData(nav);
      this.type = nav;
    },
    async fetchGetPaylistData(nav: string) {
      const res = await getPlaylistdata(nav);
      this.playlists = res.playlists;
    },
  },
});

import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getBannerData, getPlaylistdata, GetNewDisData } from '../server/home';
import type { HomeType } from './Types/Home.type';
export const useHomeStore = defineStore('HomeStore', {
  state: (): HomeType => {
    return {
      banners: [], //轮播图数据
      type: '华语', //热门推荐歌单第一次请求
      playlists: [], //好歌推荐
      area: 'ALL', //新碟上架第一次请求
      NewDisData: [], //新碟上架
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
      this.playlists = [];
      const res = await getPlaylistdata(nav);
      this.playlists = res.playlists;
    },
    async fetchGetNewDisListData(area = '全部', type = 'new') {
      switch (area) {
        case '全部':
          this.area = 'ALL';
          break;
        case '华语':
          this.area = 'ZH';
          break;
        case '欧美':
          this.area = 'EA';
          break;
        case '韩国':
          this.area = 'KR';
          break;
        case '日本':
          this.area = 'JP';
          break;
        default:
          break;
      }
      this.NewDisData = [];
      const res = await GetNewDisData(this.area, type);
      this.NewDisData = res.albums.slice(0, 15);
    },
  },
});

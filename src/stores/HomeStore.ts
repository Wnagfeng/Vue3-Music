import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  getBannerData,
  getPlaylistdata,
  GetNewDisData,
  GetTopPlaylists,
  GetPayListToTopPlayListsId,
} from '../server/home';
import type { HomeType } from './Types/Home.type';
export const useHomeStore = defineStore('HomeStore', {
  state: (): HomeType => {
    return {
      banners: [], //轮播图数据
      type: '华语', //热门推荐歌单第一次请求
      playlists: [], //好歌推荐
      area: 'ALL', //新碟上架第一次请求
      NewDisData: [], //新碟上架
      TopPayListS: [], //首页四个榜单数据
      TopPaylistData: [], //每个歌单的数据
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
      const limit = 15;
      const offset = 0;
      const res = await GetNewDisData(this.area, type, limit, offset);
      this.NewDisData = res.albums.slice(0, 15);
    },
    // 获取首页各个榜单数据
    async fetchGetTopPlaylists() {
      const res = await GetTopPlaylists();
      const data = res.list.slice(0, 3);
      this.TopPayListS = data;
      for (const item of data) {
        const id = item.id;
        this.FetchGetPayListToTopPlayListsId(id);
      }
    },
    // 根据榜单数据获取到榜单内容
    async FetchGetPayListToTopPlayListsId(id: number) {
      const res = await GetPayListToTopPlayListsId(id);
      this.TopPaylistData.push(res.playlist);
      console.log(res);
    },
  },
});

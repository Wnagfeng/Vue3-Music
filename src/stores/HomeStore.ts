
import { defineStore } from 'pinia';
import {
  getBannerData,
  getPlaylistdata,
  GetNewDisData,
  GetTopPlaylists,
  GetPayListToTopPlayListsId,
  GetALLMV,
  GetHomeDideoData,
  GetHotSongPersong,
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
      HomeALlMv: [], //首页mv数据
      ALlMvarea: '全部',
      DideoData: [], //电台数据
      HotPersongdata: [], //热门歌手数据
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
    async FetchchangeMustNewMvNav(nav: string) {
      this.ALlMvarea = nav;
      this.fetchGetHomeAllMv();
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
      this.TopPaylistData = [];
      const res = await GetPayListToTopPlayListsId(id);
      this.TopPaylistData.push(res.playlist);
    },
    async fetchGetHomeAllMv() {
      this.HomeALlMv = [];
      const area = this.ALlMvarea;
      const limit = 12;
      const offset = 0;
      const res = await GetALLMV(area, limit, offset);
      this.HomeALlMv = res.data;
    },
    async FetchGetHomeDideoData() {
      const res = await GetHomeDideoData();
      this.DideoData = res.djRadios;
    },
    async fetchGetHotSongPersong() {
      const res = await GetHotSongPersong();
      const data = res.artists;
      const data1 = res.artists.slice(0, 15);
      const data2 = res.artists.slice(15, 30);
      const data3 = res.artists.slice(30, 45);
      const Result = [data1, data2, data3];
      this.HotPersongdata = Result;
    },
  },
});

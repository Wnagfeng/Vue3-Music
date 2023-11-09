import { defineStore } from 'pinia';
import { GetSongPersong } from '@/server/SongPersong';
import type { SongPersongData } from './Types/SongPersong.type';
export const UseSongPersongStore = defineStore('SongPersongStore', {
  state: (): SongPersongData => {
    return {
      Type: '-1', //类型
      area: '-1', //类型
      initial: '-1', //热门排序
      limit: '31',
      offset: '0',
      SongPersongListData: [],
    };
  },
  actions: {
    async fetchGetSongPersong() {
      const res = await GetSongPersong(this.Type, this.area, this.initial);
      this.SongPersongListData = res.artists;
    },
  },
});

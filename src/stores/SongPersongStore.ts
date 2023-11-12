import { defineStore } from 'pinia';
import {
  GetSongPersong,
  GetSongPersongDetaileSongListData,
} from '@/server/SongPersong';
import type { SongPersongData } from './Types/SongPersong.type';
export const UseSongPersongStore = defineStore('SongPersongStore', {
  state: (): SongPersongData => {
    return {
      Type: '-1', //类型
      area: '-1', //类型
      initial: '-1', //热门排序
      SongPersonglimit: 33,
      SongPersongoffset: 0,
      SongPersongListData: [],
      IsShowLoading: false,
      SongPersongDetaileSongListData: {},
    };
  },
  actions: {
    async fetchGetSongPersong() {
      const res = await GetSongPersong(
        this.Type,
        this.area,
        this.initial,
        this.SongPersongoffset,
        this.SongPersonglimit,
      );
      this.SongPersongListData = [];
      if (res.code == 200) {
        this.IsShowLoading = true;
      }
      const NewData = res.artists;
      const OldData = this.SongPersongListData;
      const result = [...OldData, ...NewData];
      this.SongPersongListData = result;
    },
    async FetchGetSongPersongDetaileSongListData(id: string) {
      const res = await GetSongPersongDetaileSongListData(id);
      const artist = res.artist;
      const hotSongs = res.hotSongs;
      this.SongPersongDetaileSongListData = {};
      this.SongPersongDetaileSongListData = { artist, hotSongs };
    },
  },
});

import { defineStore } from 'pinia';
import { GetcatlistData, GetTopPlaylists } from '../server/SongMap';
import { GetPayListToTopPlayListsId } from '../server/home';
import type { SongMapDataType } from './Types/SongMapStore.type';

export const useSongMapStore = defineStore('SongMapStore', {
  state: (): SongMapDataType => {
    return {
      SongmapNavs: [],
      SongMaplistData: [],
      cat: '华语',
      limit: 54,
      offset: 0,
      playlist: {},
    };
  },
  actions: {
    async FetchGetcatlistData() {
      const res = await GetcatlistData();
      const category = res.categories;
      const sub = res.sub;
      let ressult = [];
      for (const TitleId in category) {
        let Title = category[TitleId];
        let SubList = [];
        for (let i = 0; i < sub.length; i++) {
          const element = sub[i];
          if (TitleId == element.category) {
            SubList.push(element);
          }
        }
        ressult.push({ title: Title, subTitle: SubList });
      }
      this.SongmapNavs = ressult;
    },
    // 根据类型获取歌单
    async FetchGetTopPlaylists() {
      const res = await GetTopPlaylists(this.cat, this.limit, this.offset);
      const oldData = this.SongMaplistData;
      const newData = res.playlists;
      const result = [...oldData, ...newData];
      this.SongMaplistData = result;
    },
    async FetchGetPayListToTopPlayListsId(id: number) {
      const res = await GetPayListToTopPlayListsId(id);
      this.playlist = {};
      this.playlist = res.playlist;
    },
  },
});

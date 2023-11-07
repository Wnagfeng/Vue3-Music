import { defineStore } from 'pinia';
import { GetcatlistData, GetTopPlaylists } from '../server/SongMap';
import type { SongMapDataType } from './Types/SongMapStore.type';
export const useSongMapStore = defineStore('SongMapStore', {
  state: (): SongMapDataType => {
    return {
      SongmapNavs: [],
      SongMaplistData: [],
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
    async FetchGetTopPlaylists(cat: string, limit: number, offset: number) {
      const res = await GetTopPlaylists(cat, limit, offset);
      this.SongMaplistData = [];
      this.SongMaplistData = res.playlists;
    },
  },
});

import { defineStore } from 'pinia';
import { GetTopPlaylists, GetPayListToTopPlayListsId } from '../server/home';
import type { TopListType } from './Types/TopList.type';
export const userTopListStore = defineStore('TopListStore', {
  state: (): TopListType => {
    return {
      FeaturedLists: [],
      GlobalLists: [],
      RankingDatas: [],
    };
  },
  actions: {
    async FetchGetTopPlaylists() {
      const res = await GetTopPlaylists();
      this.FeaturedLists = [];
      this.GlobalLists = [];
      this.FeaturedLists.push(res.list.slice(0, 4));
      this.GlobalLists.push(res.list.slice(4, 51));
    },
    async FetchGetPayListToTopPlayListsId(id: number) {
      this.RankingDatas = [];
      const res = await GetPayListToTopPlayListsId(id);
      this.RankingDatas = res.playlist;
    },
  },
});

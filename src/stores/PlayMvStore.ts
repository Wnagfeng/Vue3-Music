import { defineStore } from 'pinia';
import { GetPLayMvdata, GetPlayMvUrl } from '../server/PlayMv';
import type { PlayMvData } from './Types/PlayMv.type';
export const UsePlayMvStore = defineStore('PlayMvStore', {
  state: (): PlayMvData => {
    return {
      MvInfo: {},
      MvUrl: '',
    };
  },
  actions: {
    async FetchGetPLayMvdata(Id: string) {
      const res = await GetPLayMvdata(Id);
      this.MvInfo = res.data;
    },
    async FetchGetPlayMvUrl(Id: string) {
      const res = await GetPlayMvUrl(Id);
      this.MvUrl = res.data.url;
    },
  },
});

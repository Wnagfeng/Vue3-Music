import { defineStore } from 'pinia';
import { GetMvListdata } from '@/server/Mv';
import type { MvData } from './Types/Mv.type';
export const UseMvStore = defineStore('MvStore', {
  state: (): MvData => {
    return {
      area: '全部',
      type: '全部',
      order: '上升最快',
      MVlimit: 30,
      MVoffset: 0,
      Mvdata: [],
    };
  },
  actions: {
    async fetchGetMvListdata() {
      console.log('调用了');
      const area = this.area;
      const type = this.type;
      const order = this.order;
      const limit = this.MVlimit;
      const offset = this.MVoffset;
      const res = await GetMvListdata(area, order, type, limit, offset);
      this.Mvdata = res.data;
    },
  },
});

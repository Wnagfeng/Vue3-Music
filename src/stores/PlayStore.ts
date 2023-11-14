import { defineStore } from 'pinia';
import {
  getSongdata,
  getSonglyricData,
  getsimisong,
  Getsimiplaylist,
  Getsimimv,
} from '@/server/PlaySong';
import type { PlaySongData } from './Types/Play.type';
import { parseLyric } from '../utils/PaseLyric';
export const UsePlayStore = defineStore('PlayStore', {
  state: (): PlaySongData => {
    return {
      ids: '',
      Songdata: {},
      LyricData: [],
      Songs: [],
      playlists: [],
      mvs: [],
    };
  },
  actions: {
    async FetchgetSongdata(ids: string) {
      const res = await getSongdata(ids);
      this.Songdata = res.songs[0];
    },
    async FetchgetSonglyricData(id: string) {
      const res = await getSonglyricData(id);
      const LyricString = res.lrc.lyric;
      const Lyricres = parseLyric(LyricString);
      this.LyricData = Lyricres;
    },
    async FetchgetsimisongData(id: string) {
      const res = await getsimisong(id);
      this.Songs = res.songs;
      console.log(res);
      
    },
    async FetchGetsimiplaylist(id: string) {
      const res = await Getsimiplaylist(id);
      this.playlists = res.playlists;
    },
    async FetchGetsimimv(id: string) {
      const res = await Getsimimv(id);
      this.mvs = res.mvs;
    },
  },
});

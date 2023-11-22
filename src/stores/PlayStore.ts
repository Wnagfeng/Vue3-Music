import { defineStore } from 'pinia';
import {
  getSongdata,
  getSonglyricData,
  getsimisong,
  Getsimiplaylist,
  Getsimimv,
  GetdailySongsData,
  GetCurrentPlaySrc,
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
      IsPlayState: false, //播放状态
      PlayModel: 1, //播放模式
      CurrentPlaySong: {}, //当前播放歌曲
      CurrentPlaySongList: [], //当前播放的列表
      CurrentPlaySongProgress: 0, //播放进度
      AuDioSrc: '',
      CurrentTime:0
    };
  },
  actions: {
    async FetchgetSongdata(ids: string) {
      const res = await getSongdata(ids);
      this.Songdata = res.songs[0];
      this.CurrentPlaySong = res.songs[0];
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
    },
    async FetchGetsimiplaylist(id: string) {
      const res = await Getsimiplaylist(id);
      this.playlists = res.playlists;
    },
    async FetchGetsimimv(id: string) {
      const res = await Getsimimv(id);
      this.mvs = res.mvs;
    },
    async fetchGetdailySongsData() {
      const res = await GetdailySongsData();
      this.CurrentPlaySong = res.data.dailySongs[0];
      const id = res.data.dailySongs[0].id;
      this.ids = id;
      if (res.code == 200) {
        this.fetchGetCurrentPlaySrc(id);
      }
      this.CurrentPlaySongList = res.data.dailySongs;
    },
    async fetchGetCurrentPlaySrc(id: string) {
      const res = await GetCurrentPlaySrc(id);
      console.log(res);
      this.AuDioSrc = res.data[0].url;
    },
    changePlaySong(id: any) {},
  },
});

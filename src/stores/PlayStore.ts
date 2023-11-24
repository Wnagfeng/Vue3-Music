import { defineStore } from 'pinia';
import {
  getSongdata,
  getSonglyricData,
  getsimisong,
  Getsimiplaylist,
  Getsimimv,
  GetdailySongsData,
} from '@/server/PlaySong';
import type { PlaySongData } from './Types/Play.type';
import { parseLyric } from '../utils/PaseLyric';
import { ElMessage } from 'element-plus';

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
      CurrentTime: 0, //当前播放时间
      duration: 0, //当前音乐的总时长
      SongUrl: '',
      CurrentPlaySongIndex: 0,
    };
  },
  actions: {
    async FetchgetSongdata(ids: string) {
      this.ids = ids;
      const res = await getSongdata(ids);
      this.Songdata = {};
      this.CurrentPlaySong = {};
      this.Songdata = res.songs[0];
      this.CurrentPlaySong = res.songs[0];
      this.SongUrl =
        'http://music.163.com/song/media/outer/url?id=' + ids + '.mp3';
      this.FetchgetSonglyricData(ids);
      this.FetchgetsimisongData(ids);
      this.FetchGetsimiplaylist(ids);
      this.FetchGetsimimv(ids);
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
      this.SongUrl =
        'http://music.163.com/song/media/outer/url?id=' + this.ids + '.mp3';
      this.CurrentPlaySongList = res.data.dailySongs;
    },
    async FetchGetAddSongListData(id: any) {
      // 拿到歌曲数据添加到下一首
      const res = await getSongdata(id);
      const SongData = res.songs[0];
      if (res.code == 200) {
        ElMessage({
          message: '加入播放列表成功',
          type: 'success',
        });
      }
      this.CurrentPlaySongList.splice(1, 0, SongData);
    },
    changePlaySong(id: any) {},
  },
});

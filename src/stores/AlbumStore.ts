import { defineStore } from 'pinia';
import { GetAlbumDetaielSongsData } from '@/server/Album';
import type { AlbumData } from './Types/Album.type';
export const userAlbumStore = defineStore('AlbumStore', {
  state: (): AlbumData => {
    return {
      Data: {},
      Songs: [],
    };
  },
  actions: {
    async FetchGetAlbumDetaielSongsData(id: string) {
      const res = await GetAlbumDetaielSongsData(id);
      this.Data = res.album;
      this.Songs = res.songs;
    },
  },
});

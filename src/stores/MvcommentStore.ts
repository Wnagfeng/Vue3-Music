import { defineStore } from 'pinia';
import { GetMvCommentListData } from '../server/Mvcomment';
import type { MvCommentDatatype } from './Types/MvComment.type';
export const UseMvcommentStore = defineStore('MvcommentStore', {
  state: (): MvCommentDatatype => {
    return {
      id: '', //mvId
      MvCommentlimit: 50,
      MvCommentoffset: 0,
      CommentListData: [],
    };
  },
  actions: {
    async FetchGetMvCommentListData() {
      const id = this.id;
      const offset = this.MvCommentoffset;
      const limit = this.MvCommentlimit;
      const res = await GetMvCommentListData(id, offset, limit);
      this.CommentListData = res.comments;
    },
  },
});

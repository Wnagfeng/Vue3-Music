import { defineStore } from 'pinia';
import {
  GetMvCommentListData,
  publicationComment,
} from '../server/Mvcomment';
import type { MvCommentDatatype } from './Types/MvComment.type';
export const UseMvcommentStore = defineStore('MvcommentStore', {
  state: (): MvCommentDatatype => {
    return {
      id: '', //mvId
      CommentListData: [],
      ReplayUserData: {}, //回复对象的数据
      pageNo: 1, //当前页码
      type: 1, //1是mv的评论
    };
  },
  actions: {
    async FetchGetMvCommentListData() {
      const id = this.id;
      const pageNo = this.pageNo;
      const type = this.type;
      const res = await GetMvCommentListData(id, pageNo, type);
      console.log(res);
      this.CommentListData = res.data.comments;
    },
    async fetchpublicationComment(content: string) {
      const id = this.id;
      const type = this.type;
      const res = await publicationComment(id, type, content);
      console.log(res);
    },
  },
});

// 6007915219

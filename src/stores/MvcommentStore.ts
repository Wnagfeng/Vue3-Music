import { defineStore } from 'pinia';
import {
  GetMvCommentListData,
  publicationComment,
  ReplayComment,
} from '../server/Mvcomment';
import mitt from 'mitt';
import type { MvCommentDatatype } from './Types/MvComment.type';
import { ElMessage } from 'element-plus';
import { TheMvCommentEventBus } from '@/utils/EventBus';
export const UseMvcommentStore = defineStore('MvcommentStore', {
  state: (): MvCommentDatatype => {
    return {
      id: '', //mvId
      CommentListData: [],
      ReplayUserData: {}, //回复对象的数据
      pageNo: 1, //当前页码
      type: 1, //1是mv的评论
      totalCount: 0, //totalCount当前评论数量
      Cookie: '', //登录后拿到的Cookie
      IsShowUserState: false, //是否展示用户登录信息
      ReplayCommentId: '', //回复评论的id
    };
  },
  actions: {
    // 获取评论
    async FetchGetMvCommentListData() {
      const id = this.id;
      const pageNo = this.pageNo;
      const type = this.type;
      const res = await GetMvCommentListData(id, pageNo, type);
      // const NewData = res.data.comments;
      // const OldData = this.CommentListData;
      // const data = [...NewData, ...OldData];
      this.CommentListData = [];
      this.totalCount = 0;
      this.CommentListData = res.data.comments;
      this.totalCount = res.data.totalCount;
    },
    // 发布评论
    async fetchpublicationComment(content: string, cookie: string) {
      const id = this.id;
      const type = this.type;
      const res = await publicationComment(id, type, content, cookie);
      if (res.message == 'Request failed with status code 512') {
        ElMessage({
          message: '该资源不能评论',
          type: 'success',
        });
      }
      console.log(res.message);

      if (res.code == 200) {
        // 发表成功后派出一个事件
        TheMvCommentEventBus.emit('PUSHCOMMENTSUCCESS');
        ElMessage({
          message: '评论成功.审核中',
          type: 'success',
        });
      }
    },
    // 回复评论
    /**
     *
     * @param content 回复内容
     * @param cookie 回复者的Cookie
     * @param commentId 回复的评论的id
     */
    async FecthReplayComment(
      content: string,
      cookie: string,
      commentId: string,
    ) {
      const id = this.id; //资源ID
      const type = this.type;
      const res = await ReplayComment(id, type, content, cookie, commentId);
      if (res.code === 200) {
        // 回复成功后派出一个事件
        TheMvCommentEventBus.emit('REPLAYCOMMENTSUCCESS');
        ElMessage({
          message: '回复成功.审核中',
          type: 'success',
        });
      }
    },
  },
});

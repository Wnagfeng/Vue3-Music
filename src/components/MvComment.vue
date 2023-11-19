<template>
  <div class="MVCommentWrapper">
    <div class="TitleWrapper">
      <div class="Title">
        <div class="Text">
          <h1 class="CommentTitle">评论</h1>
          <div class="CommentCount">共{{ totalCount }}条评论</div>
        </div>
        <template v-if="isLoadingSuccess">
          <div class="Userinfo">
            <div class="userName">{{ UserName }}</div>
            <div class="UserCover">
              <img v-lazy="UserCover" alt="" />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="loginsatte" @click="HandelLoginCLick">登录后评论哦</div>
        </template>
      </div>
      <div class="input">
        <textarea
          name="leave_msg"
          maxlength="140"
          placeholder="公主王子请评论....."
          style="resize: none"
          v-model="content"
        ></textarea>
        <div class="Click">
          <button @click="HandelCommentClcik">发表</button>
          <div class="RoleCount">{{ InputCount }}/140</div>
        </div>
      </div>
    </div>
    <template v-for="item in props.ItemData" :key="item.id">
      <div class="CommentItem">
        <div class="CommentItemInner">
          <div class="cover">
            <img v-lazy="item.user.avatarUrl" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ item.user.nickname }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="bottominfo">
              <div class="left">
                <div class="time">{{ FormatTime(item.time) }}</div>
              </div>
              <div class="right">
                <div class="count">({{ item.replyCount }})</div>
                <div class="icon" @click="HandelIconCLick($event, item)">
                  <img src="../assets/img/CommentIcon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ReplayBox" ref="ReplayBoxRef">
          <div class="State">我回复@{{ ReplayUserData.nickname }}：</div>
          <div class="input">
            <textarea
              maxlength="140"
              name="leave_msg1"
              placeholder="公主王子请回复评论....."
              style="resize: none"
              v-model="Replaycontent"
            ></textarea>
            <div class="Click">
              <div class="RoleCount">{{ inputCount }}/140</div>
              <button @click="HandelReplayCommentClcik">回复</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="30"
        @size-change="HandelSizeChange"
        @current-change="HandelCurrentChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, watchEffect, onMounted } from 'vue';
import type { Itemdata } from './types/MvComment';
import { FormatTime } from '../utils/FormatTime';
import { UseMvcommentStore } from '@/stores/MvcommentStore';
import { useLoginstore } from '@/stores/LoginStore';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';
import { TheMvCommentEventBus } from '@/utils/EventBus';
const props = defineProps<Itemdata>();
const ReplayBoxRef = ref<HTMLDivElement>();

const Replaycontent = ref<string>(''); //回复的内容
const inputCount = ref<number>(0); //回复的字数

const InputCount = ref<number>(0); //评论的字数
const content = ref<string>(''); //评论的内容
// 实现了复用 明白了真谛 得到了真传 2023年11月19日18:09:34
// 王红元(Coderwhy)徒弟--汪枫(Joon)
const MvcommentStore = UseMvcommentStore();
const { ReplayUserData, totalCount, IsShowUserState, ReplayCommentId, pageNo } =
  storeToRefs(MvcommentStore);
const LoginStore = useLoginstore();
const { isLoadingSuccess, isShowLoginState, UserName, UserCover, cookie } =
  storeToRefs(LoginStore);
const HandelIconCLick = (event: any, ReplayCommentData: any) => {
  /*
  closest()
  方法获取最接近被点击的CommentIcon元素的CommentItem元素，并将其存储在
  commentItem
   */
  const commentItem = event.target.closest('.CommentItem');
  const replayBox = commentItem.querySelector('.ReplayBox');
  /*
  querySelector()
  方法在CommentItem元素中查找ReplayBox元素，并将其存储在
  replayBox
   */
  const ClassS = replayBox.classList;
  if (ClassS) {
    ClassS.toggle('Show');
  }
  const CommentId = ReplayCommentData.commentId;
  ReplayCommentId.value = CommentId;
};
const HandelSizeChange = (value: number) => {
  console.log(value);
};
const HandelCurrentChange = (value: number) => {
  pageNo.value = value;
  console.log(value);
  MvcommentStore.FetchGetMvCommentListData();
};
const HandelCommentClcik = () => {
  if (!isLoadingSuccess) {
    ElMessage({
      message: '请先登录',
      type: 'warning',
    });
    return;
  }
  if (InputCount.value == 0) {
    ElMessage({
      message: '请先输入内容',
      type: 'warning',
    });
    return;
  }
  const contentData = content.value;
  const Commencookie = cookie.value;
  MvcommentStore.fetchpublicationComment(contentData, Commencookie);
};

const HandelReplayCommentClcik = () => {
  // 判断用户有没有登录
  if (!isLoadingSuccess) {
    ElMessage({
      message: '请先登录',
      type: 'warning',
    });
    return;
  }
  if (inputCount.value == 0) {
    ElMessage({
      message: '请先输入回复内容',
      type: 'warning',
    });
    return;
  }
  const CommentId = ReplayCommentId.value;
  const ReplayCommentContent = Replaycontent.value;
  const Cookie = cookie.value;
  MvcommentStore.FecthReplayComment(ReplayCommentContent, Cookie, CommentId);
};
const HandelLoginCLick = () => {
  isShowLoginState.value = true;
};
watchEffect(() => {
  inputCount.value = Replaycontent.value?.trim().length;
  InputCount.value = content.value?.trim().length;
});
// 监听评论成功函数
const HandelPUSHCommentFunction = () => {
  content.value = '';
  // 重新获取数据
  MvcommentStore.FetchGetMvCommentListData(); //--接口给的有问题 没办法分页 数据更新的慢 这行不写了
  totalCount.value = totalCount.value + 1;
  console.log('评论成功');
};
// 监听回复成功函数
const HandelReplayCommentFUnction = () => {
  Replaycontent.value = '';
  MvcommentStore.FetchGetMvCommentListData();
  console.log('回复成功');
};
TheMvCommentEventBus.on('PUSHCOMMENTSUCCESS', HandelPUSHCommentFunction);
TheMvCommentEventBus.on('REPLAYCOMMENTSUCCESS', HandelReplayCommentFUnction);
</script>
<style scoped lang="less">
.MVCommentWrapper {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  .TitleWrapper {
    .loginsatte {
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
    }
    .Title {
      .Text {
        display: flex;
        align-items: center;
        .CommentCount {
          font-size: 16px;
          color: #909090;
          margin-left: 20px;
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      .Userinfo {
        display: flex;
        align-items: center;
        .userName {
          color: #909090;
          font-size: 16px;
        }
        .UserCover {
          margin-left: 20px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 5px;
          }
        }
      }
    }
    .input {
      textarea {
        border-radius: 5px;
        padding-top: 5px;
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
        height: 80px;
        border: 1px solid #909090;
        outline: none;
      }
      .Click {
        width: 100%;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          color: white;
          font-size: 15px;
          background-color: #ff6700;
          border: none;
          border-radius: 8px;
          width: 70px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
  }
  .CommentItem {
    border-radius: 13px;
    padding: 10px;
    box-sizing: border-box;
    background-color: aliceblue;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .CommentItemInner {
      display: flex;
      align-items: center;
      .cover {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .info {
        margin-left: 20px;
        width: 100%;
        .name {
          color: #90909090;
          font-weight: 700;
          font-size: 18px;
        }
        .content {
          font-size: 14px;
          margin-top: 10px;
        }
        .icon {
          img {
            width: 17px;
            height: 17px;
          }
        }
        .bottominfo {
          color: #90909090;
          margin-top: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .right {
            cursor: pointer;
            display: flex;
            .icon {
              margin-left: 18px;
            }
          }
        }
      }
    }
    .ReplayBox {
      padding: 10px;
      border-radius: 12px;
      margin-top: 20px;
      margin: 0 auto;
      width: 95%;
      height: 0;
      opacity: 0;
      transition: height 0.3s ease, opacity 0.3s ease;
      background-color: #d8d8d8;
      .State {
        color: #909090;
        margin-bottom: 6px;
        font-size: 15px;
      }
      textarea {
        font-size: 15px;
        border-radius: 5px;
        padding-top: 5px;
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
        height: 80px;
        border: 1px solid #909090;
        outline: none;
      }
      .Click {
        margin-top: 10px;
        float: right;
        display: flex;
        align-items: center;
        button {
          cursor: pointer;
          color: white;
          font-size: 15px;
          background-color: #ff6700;
          border: none;
          border-radius: 8px;
          width: 70px;
          height: 30px;
          margin-left: 12px;
        }
      }
    }
    .Show {
      height: auto;
      opacity: 1;
    }
  }
  .pagination {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>

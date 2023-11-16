<template>
  <div class="MVCommentWrapper">
    <div class="TitleWrapper">
      <div class="Title">
        <div class="Text">
          <h1 class="CommentTitle">评论</h1>
          <div class="CommentCount">共999条评论</div>
        </div>
        <div class="Userinfo">
          <div class="userName">汪峰本枫</div>
          <div class="UserCover">
            <img src="../assets/img/头像.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="input">
        <textarea
          name="leave_msg"
          placeholder="公主王子请评论....."
          style="resize: none"
        ></textarea>
        <div class="Click">
          <button>发表</button>
          <div class="RoleCount">0/140</div>
        </div>
      </div>
    </div>
    <template v-for="item in props.ItemData" :key="item.id">
      <div class="CommentItem">
        <div class="CommentItemInner">
          <div class="cover">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ item.user.nickname }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="bottominfo">
              <div class="left">
                <div class="time">{{ item.time }}</div>
              </div>
              <div class="right">
                <div class="count">({{ item.beReplied.length }})</div>
                <div class="icon" @click="HandelIconCLick">
                  <img src="../assets/img/CommentIcon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ReplayBox" ref="ReplayBoxRef">
          <div class="State">我回复@周杰伦：</div>
          <div class="input">
            <textarea
              name="leave_msg"
              placeholder="公主王子请评论....."
              style="resize: none"
            ></textarea>
            <div class="Click">
              <div class="RoleCount">0/140</div>
              <button>发表</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Itemdata } from './types/MvComment';
const props = defineProps<Itemdata>();
const ReplayBoxRef = ref<HTMLDivElement>();
const HandelIconCLick = (event: any) => {
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
};
</script>
<style scoped lang="less">
.MVCommentWrapper {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  .TitleWrapper {
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
}
</style>

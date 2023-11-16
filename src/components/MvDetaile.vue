<template>
  <div class="MvDetaileWrapper">
    <div class="topInfdo">
      <div class="label">Mv</div>
      <div class="name">{{ MvInfo.name }}</div>
      <div class="artistName">{{ MvInfo.artistName }}</div>
    </div>
    <div class="MvContent">
      <videoPlay :path="MvUrl" :autoPlay="true" />
    </div>
    <div class="MvDetaileInfo">
      <div class="InfoWrapper">
        <div class="publishTime">
          <img src="../assets/img/Updatatime.png" alt="" />
          <div class="info">{{ MvInfo.publishTime }}</div>
        </div>
        <div class="shareCount">
          <img src="../assets/img/Searchcountent.png" alt="" />
          <template v-if="MvInfo.shareCount">
            <div class="info">
              {{ useNumberFormat(MvInfo.shareCount) }}
            </div>
          </template>
        </div>
        <div class="playCounrt">
          <img src="../assets/img/PlayCountent.png" alt="" />
          <template v-if="MvInfo.playCount">
            <div class="info">
              {{ useNumberFormat(MvInfo.playCount) }}
            </div>
          </template>
        </div>
      </div>
      <div class="desc">MV简介：{{ MvInfo.desc }}</div>
    </div>
    <div class="MvComment BaseWrapper">
      <MvComment :ItemData="CommentListData"></MvComment>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { UsePlayMvStore } from '@/stores/PlayMvStore';
import { UseMvcommentStore } from '@/stores/MvcommentStore';
// import videoPlay from '@/components/Video.vue';
import videoPlay from '@/components/Video.vue';
import { useNumberFormat } from '../utils/FormatData';
import MvComment from './MvComment.vue';
const PlayMvStore = UsePlayMvStore();
const MvcommentStore = UseMvcommentStore();
const { MvInfo, MvUrl } = storeToRefs(PlayMvStore);
const { CommentListData, id } = storeToRefs(MvcommentStore);
const Router = useRoute();
onMounted(() => {
  const Id = String(Router.params.id);
  id.value = Id;
  PlayMvStore.FetchGetPLayMvdata(Id);
  PlayMvStore.FetchGetPlayMvUrl(Id);
  MvcommentStore.FetchGetMvCommentListData();
});
</script>
<style scoped lang="less">
.BaseWrapper {
  border-radius: 13px;
  box-sizing: border-box;
  box-shadow: 0 20px 27px #0000000d;
  background-color: #ffffff;
}
.MvDetaileWrapper {
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .topInfdo {
    display: flex;
    align-items: center;
    .label {
      text-align: center;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #ff6700;
    }
    .name {
      font-size: 25px;
      font-weight: 800;
      margin-left: 20px;
    }
    .artistName {
      color: #90909090;
      font-size: 18px;
      font-weight: 800;
      margin-left: 20px;
    }
  }
  .MvContent {
    border-radius: 13px;
    overflow: hidden;
    margin-top: 20px;
    width: 800px;
    height: 360px;
  }
  .MvDetaileInfo {
    width: 640px;
    font-size: 15px;
    font-weight: 800;
    color: #90909090;
    img {
      width: 20px;
      height: 20px;
    }
    .publishTime,
    .shareCount,
    .playCounrt {
      display: flex;
      .info {
        margin-left: 10px;
      }
    }
    .InfoWrapper {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .MvComment {
    border-radius: 13px;
    margin-top: 30px;
    width: 800px;
  }
}
</style>

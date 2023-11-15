<template>
  <div class="MvDetaileWrapper">
    <div class="topInfdo">
      <div class="label">Mv</div>
      <div class="name">{{ MvInfo.name }}</div>
      <div class="artistName">{{ MvInfo.artistName }}</div>
    </div>
    <div class="MvContent">
      <!-- <videoPlay
        path="http://vodkgeyttp8.vod.126.net/cloudmusic/obj/core/2191662823/4e02e62a4d77bcb50e7d53afb95fa0cd.mp4?wsSecret=3ce5bdd7be47dffe7405c351ea261e29&wsTime=1700057582"
        :autoPlay="true"
      /> -->
      你好
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { UsePlayMvStore } from '@/stores/PlayMvStore';
import videoPlay from '@/components/Video.vue';
const PlayMvStore = UsePlayMvStore();
const { MvInfo, MvUrl } = storeToRefs(PlayMvStore);
const Router = useRoute();
onMounted(() => {
  const Id = String(Router.params.id);
  PlayMvStore.FetchGetPLayMvdata(Id);
  PlayMvStore.FetchGetPlayMvUrl(Id);
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
  height: 300px;
  border: 1px solid black;
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
    border: 1px solid rgb(0, 0, 0);
    width: 300px !important;
    height: 300px;
  }
}
</style>

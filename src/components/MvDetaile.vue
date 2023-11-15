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
    width: 640px;
    height: 360px;
  }
}
</style>

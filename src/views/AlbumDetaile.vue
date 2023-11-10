<template>
  <div class="AlbumDetaileWrapper">
    <div class="topInfo BaseWrapper">
      <div class="imgBox">
        <img v-lazy="Data.blurPicUrl" alt="" />
      </div>
      <div class="info BaseWrapper">
        <div class="name">
          {{ Data.name }}
        </div>
        <template v-if="Data.artists">
          <div class="ALbumPersong">作者： {{ Data.artists[0].name }}</div>
        </template>
        <div class="description">简介: {{ Data.description }}</div>
        <div class="publishTime">
          发行时间: {{ FormatTime(Data.publishTime) }}
        </div>
      </div>
    </div>
    <div class="AlbumSongList BaseWrapper">
      <SongList :-itemdata="Songs"></SongList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userAlbumStore } from '@/stores/AlbumStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SongList from '@/components/SongList.vue';
const router = useRouter();
const AlbumStore = userAlbumStore();
const { Data, Songs } = storeToRefs(AlbumStore);
const FormatTime = (time: any) => {
  const timestamp = time;
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
onMounted(() => {
  const id = router.currentRoute.value.params.id;
  AlbumStore.FetchGetAlbumDetaielSongsData(id);
});
</script>
<style scoped lang="less">
.BaseWrapper {
  border-radius: 13px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 20px 27px #0000000d;
  background-color: #fff;
}
.AlbumDetaileWrapper {
  padding: 20px;
  box-sizing: border-box;
  width: 99.4%;
  .topInfo {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
    .imgBox {
      width: 220px;
      height: 220px;
      img {
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }
    }
  }
  .info {
    background-color: #fff;
    width: 70%;
    overflow: hidden;
    .name {
      font-size: 20px;
      font-weight: 800;
    }
    .ALbumPersong {
      margin-top: 10px;
      font-size: 18px;
    }
    .description {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      overflow: hidden; //多出的隐藏
      text-overflow: ellipsis; //多出部分用...代替
      display: -webkit-box; //定义为盒子模型显示
      -webkit-line-clamp: 4; //用来限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
    }
    .publishTime {
      font-size: 18px;
    }
  }
  .AlbumSongList {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 30px;
  }
}
</style>

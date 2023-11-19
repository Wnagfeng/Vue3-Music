<template>
  <div class="SongMapDetaileWrapper">
    <div class="TopInfo BaseWrapper">
      <div class="imgBox">
        <img v-lazy="playlist.backgroundCoverUrl" alt="" />
      </div>
      <div class="SongMapInfo">
        <div class="name">{{ playlist.name }}</div>
        <div class="intro">简介:{{ playlist.description }}</div>
        <div class="state">状态:{{ playlist.updateFrequency }}</div>
      </div>
    </div>
    <div class="SongMapListData BaseWrapper">
      <SongList :Itemdata="playlist.tracks"></SongList>
    </div>
    <div class="CommenWrapper"></div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useSongMapStore } from '@/stores/SongMapStore';
import { storeToRefs } from 'pinia';
import SongList from '@/components/SongList.vue';
import { UseMvcommentStore } from '@/stores/MvcommentStore';
import MvComment from '@/components/MvComment.vue';
const SongMapStore = useSongMapStore();
const MvcommentStore = UseMvcommentStore();
const { id, CommentListData, type } = storeToRefs(MvcommentStore);
const { playlist } = storeToRefs(SongMapStore);
const router = useRouter();
const SongMapID = ref();
onMounted(() => {
  const Aid = router.currentRoute.value.params.id;
  const Id = Number(Aid);
  SongMapID.value = id;
  SongMapStore.FetchGetPayListToTopPlayListsId(Id);
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
.SongMapDetaileWrapper {
  padding: 20px;
  width: 97.1%;
  .TopInfo {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    background-color: rgb(255, 255, 255);
    .imgBox {
      width: 230px;
      height: 230px;
      img {
        border-radius: 13px;
        width: 100%;
        height: 100%;
      }
    }
    .SongMapInfo {
      box-shadow: 0 20px 27px #0000000d;
      width: 700px;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 12px;
      background-color: #fff;
      font-size: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 50px;

      .name {
        font-size: 25px;
        font-weight: 800;
      }
      .intro {
        overflow: hidden; //多出的隐藏
        text-overflow: ellipsis; //多出部分用...代替
        display: -webkit-box; //定义为盒子模型显示
        -webkit-line-clamp: 4; //用来限制在一个块元素显示的文本的行数
        -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      }
    }
  }
  .SongMapListData {
    margin-top: 30px;
    padding: 20px;
  }
}
</style>

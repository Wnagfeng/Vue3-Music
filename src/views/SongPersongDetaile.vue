<template>
  <div class="SongPersongDetaileWrapper">
    <div class="TopInfo BaseWrapper">
      <div class="imgbox">
        <img v-lazy="SongPersongDetaileSongListData.artist?.picUrl" alt="" />
      </div>
      <div class="LettInfo">
        <div class="names">
          <div class="name">
            {{ SongPersongDetaileSongListData.artist?.name }}：
          </div>
          <template
            v-for="(item, index) in SongPersongDetaileSongListData.artist
              ?.alias"
            :key="index"
          >
            <div class="subName">
              {{ item }}
            </div>
          </template>
        </div>

        <div class="briefDesc">
          {{ SongPersongDetaileSongListData.artist?.briefDesc }}
        </div>
      </div>
    </div>
    <div class="SongListWrapper BaseWrapper">
      <SongList :-itemdata="SongPersongDetaileSongListData.hotSongs"></SongList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { UseSongPersongStore } from '@/stores/SongPersongStore';
import { storeToRefs } from 'pinia';
import SongList from '@/components/SongList.vue';
const Router = useRoute();
const SongPersongStore = UseSongPersongStore();
const { SongPersongDetaileSongListData } = storeToRefs(SongPersongStore);
onMounted(() => {
  const Id = String(Router.params.id);
  SongPersongStore.FetchGetSongPersongDetaileSongListData(Id);
});
</script>
<style scoped lang="less">
.BaseWrapper {
  padding: 20px;
  margin-top: 30px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
.SongPersongDetaileWrapper {
  .TopInfo {
    width: 100%;

    cursor: pointer;
    display: flex;
    justify-content: center;
    .LettInfo {
      width: 70%;
      margin-left: 30px;
      .names {
        font-size: 20px;
      }
      .names {
        display: flex;
        align-items: center;
        .name {
          font-size: 30px;
          font-weight: 800;
        }
        .subName {
          color: #909090;
          margin-left: 10px;
        }
      }
      .briefDesc {
        margin-top: 10px;
        font-size: 16px;
        overflow: hidden; //多出的隐藏
        text-overflow: ellipsis; //多出部分用...代替
        display: -webkit-box; //定义为盒子模型显示
        -webkit-line-clamp: 9; //用来限制在一个块元素显示的文本的行数
        -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      }
    }
    &:hover {
      .imgbox {
        img {
          border-radius: 50%;
        }
      }
    }
    .imgbox {
      width: 220px;
      height: 220px;
      img {
        transition: all 0.5s;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

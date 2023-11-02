<template>
  <div class="HomeWrapper">
    <!-- 轮播图 -->
    <div class="Swiper">
      <div class="block" m="t-4">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in HomeStore.banners" :key="item">
            <div class="imgbox">
              <img :src="item.imageUrl" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 热门推荐  -->
    <div class="recommendWrapper">
      <BaseHeader :linkeds="linkds"></BaseHeader>
      <template v-if="playlists.length">
        <div class="palylistItem">
          <template v-for="(item, index) in playlists" :key="index">
            <PaylistItem :item-data="item"></PaylistItem>
          </template>
        </div>
      </template>
      <template v-else>
        <Loading></Loading>
      </template>
    </div>
    <!-- 新碟上架 -->
    <div class="NewdiscWrapper">
      <BaseHeader :linkeds="NewDisc"></BaseHeader>
      <template v-if="NewDisData.length">
        <div class="disList">
          <template v-for="(item, index) in NewDisData" :key="index">
            <NewDis :Itemdata="item"></NewDis>
          </template>
        </div>
      </template>
      <template v-else>
        <Loading></Loading>
      </template>
    </div>
    <!-- 歌曲榜单 -->
    <div class="TopplayListWrapper">
      <template v-for="(item, index) in TopPaylistData" :key="index">
        <TopPlayListVue :Itemdata="item"></TopPlayListVue>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores/HomeStore';
import BaseHeader from '@/components/BaseHeader.vue';
import PaylistItem from '@/components/PallistItem.vue';
import Loading from '@/components/Loading.vue';
import NewDis from '@/components/NewDis.vue';
import TopPlayListVue from '@/components/TopPlayList.vue';
const linkds = {
  title: '好歌推荐',
  subtitle: ['华语', '流行', '摇滚', '民谣', '电子', '粤语'],
};
const NewDisc = {
  title: '新碟上架',
  subtitle: ['全部', '华语', '欧美', '韩国', '日本'],
};

const HomeStore = useHomeStore();
const { playlists, NewDisData, TopPaylistData } = storeToRefs(HomeStore);

onMounted(() => {
  HomeStore.fetchGetBannerData();
  HomeStore.fetchGetPaylistData('华语');
  HomeStore.fetchGetNewDisListData('ALL');
  HomeStore.fetchGetTopPlaylists();
});
</script>
<style scoped lang="less">
.HomeWrapper {
  box-sizing: border-box;
  .imgbox {
    width: 500px;
    height: 400px;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .Swiper {
    display: flex;
    justify-content: center;
    height: 300px;
    margin-top: 30px;
    .block {
      width: 1023px;
    }
  }
  .recommendWrapper {
    padding: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 20px 27px #0000000d;
    min-height: 440px;
    .palylistItem {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
  }

  .NewdiscWrapper {
    margin-top: 30px;
    padding: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 20px 27px #0000000d;
    min-height: 560.75px;
    .disList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .TopplayListWrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    padding: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 20px 27px #0000000d;
    min-height: 560.75px;
  }
}
</style>

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
    <div class="recommendWrapper">
      <BaseHeader :linkeds="linkds"></BaseHeader>
      <div class="palylistItem">
        <template v-for="(item, index) in HomeStore.playlists" :key="index">
          <!-- {{ item }} -->
          <PaylistItem :item-data="item"></PaylistItem>
        </template>
      </div>
    </div>
    <!-- 热门推荐  -->
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useHomeStore } from '@/stores/HomeStore';
import BaseHeader from '@/components/BaseHeader.vue';
import PaylistItem from '@/components/PallistItem.vue';
const linkds = {
  title: '好歌推荐',
  subtitle: ['华语', '流行', '摇滚', '民谣', '电子', '粤语'],
};
const HomeStore = useHomeStore();
onMounted(() => {
  HomeStore.fetchGetBannerData();
  HomeStore.fetchGetPaylistData('华语');
});
</script>
<style scoped lang="less">
.HomeWrapper {
  padding: 20px;
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
    width: 100%;
    height: 700px;
    background-color: #ffffff;
    border-radius: 12px;
  }
  .palylistItem {
    display: flex;
    justify-content: space-around;
  }
}
</style>

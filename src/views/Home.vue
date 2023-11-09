<template>
  <div class="HomeWrapper">
    <!-- 轮播图 -->
    <div class="SwiperWrapper">
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
    </div>
    <!-- 热门推荐  -->
    <div class="recommendWrapper">
      <BaseHeader :linkeds="linkds"></BaseHeader>
      <template v-if="playlists.length">
        <div class="palylistItem">
          <template v-for="(item, index) in playlists" :key="index">
            <PaylistItem
              :item-data="item"
              @click="handelPlayLitsiTitemCLick(item.id)"
            ></PaylistItem>
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
            <NewDis
              :Itemdata="item"
              @click="HandelNewDisClick(item)"
            ></NewDis>
          </template>
        </div>
      </template>
      <template v-else>
        <Loading></Loading>
      </template>
    </div>
    <!-- 歌曲榜单 -->
    <div class="TopplayListWrapper">
      <template v-if="TopPaylistData.length">
        <template v-for="(item, index) in TopPaylistData" :key="index">
          <TopPlayListVue :Itemdata="item"></TopPlayListVue>
        </template>
      </template>
    </div>
    <!-- 最新Mv -->
    <div class="MustNewMvWrapper BaseWrapper">
      <BaseHeader :linkeds="MvNaves"></BaseHeader>
      <div class="counter">
        <template v-if="HomeALlMv.length">
          <template v-for="(item, index) in HomeALlMv" :key="index">
            <MustNewMvItem :Itemdata="item"></MustNewMvItem>
          </template>
        </template>
        <template v-else>
          <div class="loadingWrapper">
            <Loading></Loading>
          </div>
        </template>
      </div>
    </div>
    <!-- 最后一个模块 -->
    <div class="bottomWrapper">
      <!-- 热门电台 -->
      <div class="RadioStationWrapperr BaseWrapper">
        <BaseHeader :linkeds="RadiosNavs"></BaseHeader>
        <div class="left">
          <template v-for="(item, index) in DideoData" :key="index">
            <DideoItem :ItemData="item"></DideoItem>
          </template>
        </div>
      </div>
      <!-- 热门歌手 -->
      <div class="HotSonPersongwrapper BaseWrapper">
        <BaseHeader :linkeds="HotPersongTitle"></BaseHeader>
        <el-carousel
          indicator-position="outside"
          arrow="never"
          class="swiperWrapperBottom"
        >
          <el-carousel-item v-for="item in HotPersongdata" :key="item">
            <div class="SwiperimgWrapper">
              <template v-for="(iten, index) in item" :key="index">
                <div class="imgsWiper">
                  <div class="SwiperimgBox">
                    <div class="imgWrapper">
                      <img :src="iten.picUrl" alt="" />
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
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
import MustNewMvItem from '@/components/MustNewMvItem.vue';
import DideoItem from '@/components/DideoItem.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const linkds = {
  title: '好歌推荐',
  subtitle: ['华语', '流行', '摇滚', '民谣', '电子', '粤语'],
};
const NewDisc = {
  title: '新碟上架',
  subtitle: ['全部', '华语', '欧美', '韩国', '日本'],
};
const MvNaves = {
  title: '最新Mv',
  subtitle: ['全部', '华语', '欧美', '韩国', '日本'],
};

const RadiosNavs = {
  title: '热门电台',
};
const HotPersongTitle = {
  title: '热门歌手',
};
const HomeStore = useHomeStore();
const {
  playlists,
  NewDisData,
  TopPaylistData,
  HomeALlMv,
  DideoData,
  HotPersongdata,
} = storeToRefs(HomeStore);

onMounted(() => {
  HomeStore.fetchGetBannerData();
  HomeStore.fetchGetPaylistData('华语');
  HomeStore.fetchGetNewDisListData('ALL');
  HomeStore.fetchGetTopPlaylists();
  HomeStore.fetchGetHomeAllMv();
  HomeStore.FetchGetHomeDideoData();
  HomeStore.fetchGetHotSongPersong();
});

const handelPlayLitsiTitemCLick = (item: number) => {
  router.push({ path: `/SongDetaile/${item}` });
};
const HandelNewDisClick = (item) => {
  console.log(item);
};
</script>
<style scoped lang="less">
.el-carousel__arrow {
  display: none !important;
}
.el-carousel:hover .el-carousel__arrow {
  display: block !important;
}
.BaseWrapper {
  margin-top: 30px;
  padding: 20px;
  margin-right: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
.HomeWrapper {
  box-sizing: border-box;
  .SwiperWrapper {
    margin-top: 20px;
    padding: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 20px 27px #0000000d;
    // min-height: 297px;
  }
  .imgbox {
    width: 100%;
    height: 100%;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .Swiper {
    display: flex;
    justify-content: center;
    height: 220px;
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
    min-height: 297px;
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
    min-height: 730px;
    padding-bottom: 20px;
  }
  .MustNewMvWrapper {
    min-height: 500px;
    .counter {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .loadingWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .bottomWrapper {
    width: 100%;
    display: flex;
    .RadioStationWrapperr {
      width: 60%;
      .left {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }
    .HotSonPersongwrapper {
      :deep(.el-carousel__container) {
        height: 550px !important;
      }
      width: 40%;
      .el-carousel__item {
        display: flex;
        flex-wrap: wrap;
      }

      .swiperWrapperBottom {
        .SwiperimgWrapper {
          display: flex;
          flex-wrap: wrap;
        }
        .imgsWiper {
          display: flex;
        }
        .SwiperimgBox {
          // margin-bottom: 30px;
          .imgWrapper {
            margin-right: 20px;
            width: 100px;
            height: 100px;
          }
          img {
            border-radius: 12px;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

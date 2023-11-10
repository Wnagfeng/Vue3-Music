<template>
  <template v-if="isShowLoadingState">
    <div class="wrapper">
      <div class="left">
        <!-- 这放导航条 -->
        <SideBar></SideBar>
      </div>
      <div
        class="right"
        @mousewheel="handelmousewheelClick"
        @scroll="scrolling"
      >
        <!-- 登录和搜索的组件 -->
        <LoginAndSearchVue></LoginAndSearchVue>
        <!-- 这里进行路由的匹配 -->
        <RouterView></RouterView>
        <div class="bottomInfo">
          <div class="name gradient-text">我叫汪枫</div>
          <div class="intro gradient-text">
            This is my github name :Wangfeng
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="LoadingWrapperApp">
      <HomSvgVue></HomSvgVue>
    </div>
  </template>
</template>
<script setup lang="ts">
import SideBar from './views/SideBar.vue';
import LoginAndSearchVue from './components/LoginAndSearch.vue';
import HomSvgVue from './components/HomSvg.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const Router = useRoute();
import { storeToRefs } from 'pinia';
import { useSongMapStore } from '@/stores/SongMapStore';
import { UseSongPersongStore } from './stores/SongPersongStore';
const mapStore = useSongMapStore();
const SongPersongStore = UseSongPersongStore();
const { offset, limit } = storeToRefs(mapStore);
const { SongPersonglimit, SongPersongoffset } = storeToRefs(SongPersongStore);
const isShowLoadingState = ref(false);

setTimeout(() => {
  isShowLoadingState.value = true;
}, 4900);
const handelmousewheelClick = () => {};
const scrolling = (e: any) => {
  const clientHeight = e.target.clientHeight;
  const scrollHeight = e.target.scrollHeight;
  const scrollTop = e.target.scrollTop;
  if (scrollTop + clientHeight >= scrollHeight) {
    // 歌单加载更多
    offset.value = limit.value;
    limit.value = limit.value + 54;
    // 歌手加载更多
    SongPersongoffset.value = SongPersonglimit.value;
    SongPersonglimit.value = SongPersonglimit.value + 33;
    if (SongPersonglimit.value > 99 && SongPersongoffset.value > 66) {
      SongPersonglimit.value = 99;
      SongPersongoffset.value = 66;
    }
    mapStore.FetchGetTopPlaylists(); //发请求拿数据
    SongPersongStore.fetchGetSongPersong(); //
  } else {
  }
};
onMounted(() => {});
</script>
<style scoped lang="less">
.LoadingWrapperApp {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.wrapper {
  background-color: #fafafa;
  display: flex;
  width: 100vw;
  height: 100vh;

  .gradient-text {
    background: linear-gradient(
      90deg,
      #e53935,
      #8e24aa,
      #00acc1,
      #008000,
      #f9a825,
      #f57f17
    );
    background-size: 400% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: text-glow 10s ease-in-out infinite;
  }

  @keyframes text-glow {
    to {
      background-position: -400% center;
    }
  }
  .bottomInfo {
    font-weight: 800;
    font-size: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    .name {
      font-size: 40px;
      margin-bottom: 20px;
      font-weight: 700;
      text-transform: uppercase; /* 字母全部转换成大写 */
      letter-spacing: 0.1em; /* 字母之间增加间隔 */
    }
    .intro {
      letter-spacing: 0.1em; /* 字母之间增加间隔 */
    }
  }
  .left {
    width: 14%;
    height: 100%;
    // min-width: 17.5rem;
    min-width: 240px;
  }
  .right {
    flex: 1;
    height: 100%;
    // background-color: rgb(0, 110, 110);
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    transition: width 0.3s ease;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

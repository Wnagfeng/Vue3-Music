<template>
  <div class="wrapper">
    <div class="left">
      <!-- 这放导航条 -->
      <SideBar></SideBar>
    </div>
    <div class="right">
      <!-- 登录和搜索的组件 -->
      <LoginAndSearchVue></LoginAndSearchVue>
      <!-- 这里进行路由的匹配 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import SideBar from './views/SideBar.vue';
import LoginAndSearchVue from './components/LoginAndSearch.vue';
// let opstion = {
//   targetX: 1920,
//   targetY: 1080,
//   targetRatio: 16 / 9,
// };
// UserScalePage(opstion);
</script>
<style scoped lang="less">
.wrapper {
  background-color: #fafafa;
  display: flex;
  width: 100vw;
  height: 100vh;
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

<template>
  <div class="Sidewrapper">
    <div class="top">
      <div class="logobox">
        <img src="../assets/img/logo.png" alt="" />
      </div>
    </div>
    <div class="NavLink">
      <template v-for="(item, index) in sidebardata" :key="index">
        <div
          class="nav"
          @click="handelNavBarclick(index, item)"
          :class="[index === CurrentIndex ? 'Navactive' : '']"
        >
          <div class="icon">
            <template v-if="index === CurrentIndex">
              <img :src="formatUrl(item.selectpath)" alt="" />
            </template>
            <template v-else>
              <img :src="formatUrl(item.iconpath)" alt=""
            /></template>
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import sidebardata from '../data/sidebar.json';
import formatUrl from '../utils/FormatUrl';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
onMounted(() => {
  const Path = router.currentRoute.value.href;
  sidebardata.map((item, index) => {
    if (item.path == Path) {
      CurrentIndex.value = index;
    }
  });
});
const router = useRouter();
const CurrentIndex = ref(0);
interface ItemType {
  path: string;
  name: string;
}
const handelNavBarclick = (index: number, item: ItemType) => {
  CurrentIndex.value = index;
  router.push(item.path);
  // 跳转路由
};
</script>
<style scoped lang="less">
.Sidewrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .top {
    margin-top: 70px;
    .logobox {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .NavLink {
    font-size: 20px;
    width: 80%;
    margin-top: 50px;
    .nav {
      border-radius: 30px;
      margin-right: 30px;
      height: 50px;
      cursor: pointer;
      margin-top: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 20px;
        width: 30px;
        height: 30px;
        // margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        margin-top: 6px;
        margin-left: 20px;
      }
    }
  }
  .Navactive {
    font-weight: 400;
    background-color: #fff;
    box-shadow: 10px 10px #0000000d;
  }
}
</style>

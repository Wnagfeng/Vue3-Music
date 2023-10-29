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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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
    margin-top: 4.375rem;
    .logobox {
      width: 5rem;
      height: 5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .NavLink {
    width: 80%;
    margin-top: 3.125rem;
    .nav {
      border-radius: 1.25rem;
      margin-right: 1.875rem;
      height: 3.125rem;
      cursor: pointer;
      margin-top: 1.25rem;
      width: 100%;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1.25rem;
        width: 1.875rem;
        height: 1.875rem;
        // margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        margin-top: .375rem;
        margin-left: 1.25rem;
      }
    }
  }
  .Navactive {
    font-weight: 400;
    background-color: #fff;
    box-shadow: 0 1.25rem 1.6875rem #0000000d;
  }
}
</style>

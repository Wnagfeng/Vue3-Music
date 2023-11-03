<template>
  <div class="BaseHeaderWrrpper">
    <h1>{{ props.linkeds.title }}</h1>
    <div class="list">
      <template v-for="(item, index) in props.linkeds.subtitle" :key="index">
        <span
          class="nav"
          @click="handelnavclick(item, index)"
          :class="[index === currentindex ? 'navactive' : '']"
          >{{ item }}</span
        >
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useHomeStore } from '@/stores/HomeStore';

const HomeStore = useHomeStore();
interface Iprops {
  linkeds: {
    title?: string;
    subtitle?: string[];
  };
}
const currentindex = ref(0);
const props = defineProps<Iprops>();
const handelnavclick = (item: string, index: number) => {
  if (props.linkeds.title === '好歌推荐') {
    currentindex.value = index;
    HomeStore.changecurrentnav(item);
  } else if (props.linkeds.title === '新碟上架') {
    currentindex.value = index;
    HomeStore.fetchGetNewDisListData(item);
  } else if (props.linkeds.title === '最新Mv') {
    currentindex.value = index;
    HomeStore.FetchchangeMustNewMvNav(item);
  }
};
</script>
<style scoped lang="less">
.BaseHeaderWrrpper {
  display: flex;
  align-items: center;
  .list {
    margin-left: 20px;
  }
  .nav {
    padding-bottom: 3px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .navactive {
    border-bottom: 3px solid #fb8a00;
  }
}
</style>

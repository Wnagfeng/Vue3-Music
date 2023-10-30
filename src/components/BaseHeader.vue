<template>
  <div class="BaseHeaderWrrpper">
    <h1>{{ props.linkeds.title }}</h1>
    <div class="list">
      <template v-for="(item, index) in props.linkeds.subtitle">
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
  currentindex.value = index;
  HomeStore.changecurrentnav(item);
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
  }
  .navactive {
    border-bottom: 3px solid #fb8a00;
  }
}
</style>

<template>
  <div class="TopPlayListWrapper">
    <h1>{{ $props.Itemdata.name }}</h1>
    <p>{{ $props.Itemdata.description }}</p>
    <template
      v-for="(item, index) in $props.Itemdata.tracks.slice(0, 7)"
      :key="index"
    >
      <div class="item">
        <div class="song">
          <div class="imgBaox">
            <img :src="item.al.picUrl" alt="" />
          </div>
          <div class="info">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="skiill">
              {{ item.ar[0].name }}
            </div>
          </div>
        </div>
        <div class="contrler">
          <img src="../assets/img/AddPlylist.png" alt="" />
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { TopPayListType } from './types/TopPalyList';
const props = defineProps<TopPayListType>();

</script>
<style scoped lang="less">
.TopPlayListWrapper {
  margin-left: 10px;
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
  .item {
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      .contrler {
        opacity: 1;
      }
      .info {
        .name {
          transform: translateX(30px);
        }
      }
    }
    .song {
      display: flex;
      align-items: center;
    }
    .imgBaox {
      width: 60px;
      height: 60px;
      img {
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      font-size: 15px;
      margin-left: 30px;
      .name {
        transition: all 0.5s;
      }
      .skiill {
        color: #909090;
        margin-top: 10px;
      }
    }
    .contrler {
      cursor: pointer;
      transition: all 1s;
      opacity: 0;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="NewDisWrapper">
    <div class="cover">
      <div class="imgbox">
        <img v-lazy="$props.Itemdata.blurPicUrl" alt="" />
        <div class="disCover">
          <img src="../assets/img/disc.986e5ec6.png" alt="" />
        </div>
      </div>
    </div>
    <div class="info">
      <div class="name2">{{ Props.Itemdata.name }}</div>
      <div class="name">{{ Props.Itemdata.artists[0].name }}</div>
    </div>
    <div class="label">{{ Props.Itemdata.type }}</div>
  </div>
</template>
<script setup lang="ts">
import type { NewDisDataType } from './types/NewDis';
const Props = defineProps<NewDisDataType>();
</script>
<style scoped lang="less">
.NewDisWrapper {
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  width: 300px;
  height: 120px;
  background-color: #d9d9d9;
  display: flex;
  &:hover {
    cursor: pointer;
    .cover .imgbox .disCover {
      transition: transform 4s;
      transform: rotate(360deg);
      // display: none;
    }
  }
  &:not(:hover) {
    .cover .imgbox .disCover {
      transition: transform 4s;
      transform: rotate(-360deg);
      // display: none;
    }
  }
  .cover {
    .imgbox {
      position: relative;
      z-index: 999;
      width: 120px;
      height: 120px;
      img {
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }
      .disCover {
        position: absolute;
        border-radius: 50%;
        left: 30px;
        top: 0;
        width: 120px;
        height: 120px;
        z-index: -1;
      }
    }
  }
  .info {
    margin-left: 60px;
    margin-top: 35px;
    .name2 {
      font-size: 16px;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .name {
      margin-top: 10px;
      font-size: 14px;
      color: #909090;
    }
  }
  .label {
    position: absolute;
    padding-left: 25px;
    padding-right: 15px;
    background-color: #ff6700;
    font-size: 15px;
    right: -17px;
    top: 11px;
    transform: rotate(45deg);
  }
}
</style>

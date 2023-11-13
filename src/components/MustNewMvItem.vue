<template>
  <div class="MustNewMvItemWrapper">
    <div class="coverWrapper">
      <div class="cover">
        <template v-if="propsData.Itemdata.cover">
          <img v-lazy="propsData.Itemdata.cover" alt="" />
        </template>
        <template v-if="propsData.Itemdata.imgurl">
          <img v-lazy="propsData.Itemdata.imgurl" alt="" />
        </template>
        <div class="incon">
          <img src="../assets/img/VideoIcon.png" alt="" />
        </div>
      </div>
    </div>
    <div class="info">
      <div class="name">{{ propsData.Itemdata.name }}</div>
      <div class="artistName">{{ propsData.Itemdata.artistName }}</div>
      <div class="playCount">
        <div class="icon">
          <img src="../assets/img/Video.png" alt="" />
        </div>
        <div class="count">
          {{ useNumberFormat(propsData.Itemdata.playCount) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { MustNewMvItem } from './types/MustNewMvItemtype';
import { useNumberFormat } from '@/utils/FormatData';
const propsData = defineProps<MustNewMvItem>();
</script>
<style scoped lang="less">
.MustNewMvItemWrapper {
  margin-top: 20px;
  width: 236px;
  height: 220px;
  overflow: hidden;
  &:hover {
    .cover .incon {
      display: block;
      opacity: 1;
      transform: scale(1.5);
    }
    .cover {
      transform: scale(1.3);
    }
  }
  .coverWrapper {
    width: 236px;
    height: 133px;
    overflow: hidden;
  }
  .cover {
    transition: all 1s;
    transform-origin: center center;
    position: relative;
    width: 236px;
    height: 133px;
    .incon {
      transition: all 1s;
      transform-origin: center center;
      opacity: 0;
      position: absolute;
      left: 50%;
      margin-left: -15px;
      margin-top: -15px;
      top: 50%;
      width: 30px;
      height: 30px;
    }
    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
    }
  }
  .playCount {
    margin-top: 5px;
    display: flex;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .count {
      margin-left: 10px;
    }
  }
  .info {
    margin-top: 5px;
    .artistName {
      margin-top: 5px;
      color: #909090;
    }
  }
}
</style>

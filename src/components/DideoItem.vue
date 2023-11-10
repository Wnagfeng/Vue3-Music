<template>
  <div class="DideoWrapper">
    <div class="cover">
      <img v-lazy="props.ItemData.picUrl" alt="" />
    </div>
    <div class="infoWrapper">
      <div class="info">
        <div class="name">{{ props.ItemData.name }}</div>
        <div class="copywriter">{{ props.ItemData.copywriter }}</div>
      </div>
      <div class="bottomInfo">
        <div class="count">共{{ props.ItemData.programCount }}期</div>
      </div>
      <div class="subCount">
        共订阅{{ useNumberFormat(props.ItemData.subCount) }}次
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { DideoType } from './types/Dideo';
import { useNumberFormat } from '@/utils/FormatData';
const props = defineProps<DideoType>();
</script>
<style scoped lang="less">
.DideoWrapper {
  cursor: pointer;
  margin-right: 20px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 45%;
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  .cover {
    width: 100px;
    height: 100px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }
  .infoWrapper {
    flex: 1;
    margin-left: 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid #90909090;
  }
  .info {
    .copywriter {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #909090;
    }
    .name {
      font-size: 19px;
      font-weight: 800;
    }
  }
  .bottomInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .subCount {
    margin-top: 20px;
  }
}
</style>

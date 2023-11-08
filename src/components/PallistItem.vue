<template>
  <div class="PaylistItemWrapper">
    <div class="label">
      <div class="icon">
        <img src="../assets/img/Ari.png" alt="" />
      </div>
      <span>{{ useNumberFormat(props.itemData.playCount) }}</span>
      <span>/{{ props.itemData.trackCount }}首</span>
    </div>
    <div class="cover">
      <img :src="$props.itemData.coverImgUrl" alt="" />
    </div>
    <div class="info">
      <span>{{ $props.itemData.description }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PayListItemType } from './types/PayListItem';
import { useNumberFormat } from '@/utils/FormatData';

const props = defineProps<PayListItemType>();
</script>
<style scoped lang="less">
.PaylistItemWrapper {
  cursor: pointer;
  width: 220px;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
  margin: 10px;
  .info {
    font-size: 18px;
    overflow: hidden; //多出的隐藏
    text-overflow: ellipsis; //多出部分用...代替
    display: -webkit-box; //定义为盒子模型显示
    -webkit-line-clamp: 1; //用来限制在一个块元素显示的文本的行数
    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
  }
  .label {
    position: absolute;
    top: 5px;
    right: 6px;
    color: #fff;
    border-radius: 12px;
    width: 130px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 97%,
      rgba(0, 0, 0, 0.5) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      margin-bottom: 4px;
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cover {
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

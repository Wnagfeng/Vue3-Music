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
console.log(props);
</script>
<style scoped lang="less">
.PaylistItemWrapper {
  width: 220px;
  //   height: 220px;
  overflow: hidden;
  position: relative;
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

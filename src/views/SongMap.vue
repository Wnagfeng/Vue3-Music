<template>
  <div class="SongMapWrapper" ref="container">
    <div class="SongMapNavs BaseWrapper">
      <div class="Select">
        <div class="selectdNas">{{ SlelectINfo }}</div>
        <div class="selectNas" @click="handelchangeStateclick">
          <div class="text">选择分类</div>
          <div class="inco">
            <img src="../assets/img/Down.png" alt="" />
          </div>
        </div>
      </div>
      <template v-if="ISShowSelectState">
        <div class="SelectInfo BaseWrapper">
          <div class="icon">
            <img src="../assets/img/Up.png" alt="" />
          </div>
          <template v-for="(item, index) in SongmapNavs" :key="index">
            <div class="NavList">
              <div class="title">{{ item.title }}</div>
              <div class="navs">
                <template v-for="(iten, index) in item.subTitle" :key="index">
                  <div class="nav" @click="handleSelectNas(iten.name)">
                    {{ iten.name }}
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
    <div class="SongMapListdata BaseWrapper">
      <template v-if="SongMaplistData.length">
        <template v-for="(item, index) in SongMaplistData" :key="index">
          <PallistItem :item-data="item"></PallistItem> </template
      ></template>
      <template v-else>
        <div class="LoadingWrapper">
          <Loading></Loading>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSongMapStore } from '@/stores/SongMapStore';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import PallistItem from '@/components/PallistItem.vue';
import Loading from '@/components/Loading.vue';
const ISShowSelectState = ref(false);
const SongMapStore = useSongMapStore();
const { SongmapNavs, SongMaplistData } = storeToRefs(SongMapStore);
const SlelectINfo = ref('华语');
const limit = ref(54);
const offset = ref(0);
const container = ref<HTMLElement | null>(null);
onMounted(() => {
  SongMapStore.FetchGetTopPlaylists('华语', limit.value, offset.value);
  SongMapStore.FetchGetcatlistData();
});
onBeforeUnmount(() => {});

const handelchangeStateclick = () => {
  ISShowSelectState.value = !ISShowSelectState.value;
};
const handleSelectNas = (name: string) => {
  ISShowSelectState.value = !ISShowSelectState.value;
  SlelectINfo.value = name;
  SongMapStore.FetchGetTopPlaylists(name, limit.value, offset.value);
};
</script>
<style scoped lang="less">
.BaseWrapper {
  margin-top: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
.SongMapWrapper {
  width: 97%;
  // height: 100%;
  padding: 20px;
  .SongMapNavs {
    height: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .Select {
      display: flex;
      align-items: center;
      .selectdNas {
        font-size: 20px;
        font-weight: 700;
      }
      .selectNas {
        cursor: pointer;
        &:hover {
          border: 1px solid rgb(0, 162, 255);
          box-shadow: 0 20px 27px #0000000d;
        }
        .text {
          font-weight: 700;
          font-size: 15px;
        }
        margin-left: 20px;
        border-radius: 12px;
        padding: 5px 12px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        .inco {
          margin-left: 10px;

          img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    .SelectInfo {
      z-index: 999;
      position: relative;
      margin-top: 0px;
      top: 70px;
      left: 0px;
      width: 700px;
      padding-bottom: 60px;
      background-color: rgb(252, 252, 252);
      position: absolute;
      .icon {
        position: relative;
        left: 124px;
        top: -22px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .NavList {
        margin-top: 30px;
        margin-left: 10px;
        font-size: 17px;
        display: flex;
        align-items: center;
        .title {
          min-width: 38px;
          font-weight: 600;
          margin-top: 10px;
        }
        .navs {
          margin-left: 10px;
          display: flex;
          flex-wrap: wrap;
          .nav {
            cursor: pointer;
            margin-left: 25px;
            margin-top: 10px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .SongMapListdata {
    padding-left: 20px;
    padding-bottom: 40px;
    padding-top: 30px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .LoadingWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

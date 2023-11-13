<template>
  <div class="WrapprMv">
    <div class="SongMapNavs BaseWrapper">
      <div class="Select">
        <div class="selectdNas">类型：{{ SlelectINfo }}</div>
        <div class="selectdNastwo">排序：{{ SlelectINfoTwo }}</div>
        <div class="selectdNastwo">地区：{{ SlelectINfoThree }}</div>
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
              <template v-if="item.type == '0'">
                <div class="navs">
                  <template v-for="(iten, index) in item.subTitle" :key="index">
                    <div class="nav" @click="handleSelectTypeNas(iten)">
                      {{ iten }}
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="item.type == '1'">
                <div class="navs">
                  <template v-for="(iten, index) in item.subTitle" :key="index">
                    <div class="nav" @click="handleSelectOrderNas(iten)">
                      {{ iten }}
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="item.type == '2'">
                <div class="navs">
                  <template v-for="(iten, index) in item.subTitle" :key="index">
                    <div class="nav" @click="handleSelectdisNas(iten)">
                      {{ iten }}
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
      </template>
    </div>
    <div class="MvListWrapperr BaseWrapper">
      <template v-for="(item, index) in Mvdata" :key="index">
        <div class="MvListItem">
          <MustNewMvItem :Itemdata="item"></MustNewMvItem>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SongmapNavs from '../data/MvNavs.json';
import { storeToRefs } from 'pinia';
import { UseMvStore } from '@/stores/MvStore';
import MustNewMvItem from '@/components/MustNewMvItem.vue';
const Mvstore = UseMvStore();
const { Mvdata, area, type, order, MVlimit, MVoffset } = storeToRefs(Mvstore);
const SlelectINfo = ref('全部');
const SlelectINfoTwo = ref('上升最快');
const SlelectINfoThree = ref('全部');
const ISShowSelectState = ref(false);
onMounted(() => {
  Mvstore.fetchGetMvListdata();
});
const handelchangeStateclick = () => {
  ISShowSelectState.value = !ISShowSelectState.value;
};
const handleSelectTypeNas = (name: string) => {
  ISShowSelectState.value = !ISShowSelectState.value;
  type.value = name;
  MVoffset.value = 0;
  MVlimit.value = 30;
  SlelectINfo.value = name;
  Mvstore.fetchGetMvListdata();
};
const handleSelectOrderNas = (name: string) => {
  ISShowSelectState.value = !ISShowSelectState.value;
  MVoffset.value = 0;
  MVlimit.value = 30;
  order.value = name;
  SlelectINfoTwo.value = name;
  Mvstore.fetchGetMvListdata();
};
const handleSelectdisNas = (name: string) => {
  ISShowSelectState.value = !ISShowSelectState.value;
  area.value = name;
  MVoffset.value = 0;
  MVlimit.value = 30;
  SlelectINfoThree.value = name;
  Mvstore.fetchGetMvListdata();
};
</script>
<style scoped lang="less">
.WrapprMv {
  box-sizing: border-box;
  margin: 15px;
}
.BaseWrapper {
  margin-top: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
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
    .selectdNastwo {
      font-size: 20px;
      font-weight: 700;
      margin-left: 30px;
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
      left: 480px;
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
.MvListWrapperr {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

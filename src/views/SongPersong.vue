<template>
  <div class="songpersongWrapper">
    <template v-if="IsShowLoading">
      <div class="TopNav BaseWrapper">
        <div class="type">
          <div class="title">类型：</div>
          <div class="TypeNav">
            <template v-for="(item, index) in TypeNav" :key="index">
              <div
                class="items"
                :class="[TypeNavRef === item.value ? 'active' : '']"
                @click="handelChangeTypeValue(item.value)"
              >
                {{ item.key }}
              </div>
            </template>
          </div>
        </div>
        <div class="area">
          <div class="title">地区：</div>
          <div class="areaNav">
            <template v-for="(item, index) in areaNav" :key="index">
              <div
                class="items"
                @click="handelChangeareaValue(item.value)"
                :class="[areaNavRef === item.value ? 'active' : '']"
              >
                {{ item.key }}
              </div>
            </template>
          </div>
        </div>
        <div class="letter">
          <div class="title">名称：</div>
          <div class="letterNav">
            <template v-for="(item, index) in letterNav" :key="index">
              <template v-if="item == '-1'">
                <div
                  class="items"
                  @click="handelChangeLetterValue(item)"
                  :class="[letterNavRef === item ? 'active' : '']"
                >
                  热门
                </div>
              </template>
              <template v-else>
                <div
                  class="items letterItems"
                  :class="[letterNavRef === item ? 'active' : '']"
                  @click="handelChangeLetterValue(item)"
                >
                  {{ item }}
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div class="SongPersongList">
        <template v-for="(item, index) in SongPersongListData" :key="index">
          <div
            class="SongPersongData"
            @click="HandelSongPersonLiteItemClick(item)"
          >
            <div class="songPerdetaile">
              <div class="img">
                <img v-lazy="item.picUrl" alt="" ref="images" />
              </div>
              <div class="infoWrapper">
                <div class="name">{{ item.name }}</div>
                <div class="info">
                  <div class="albumSize">专辑：{{ item.albumSize }}</div>
                  <div class="musicSize">单曲：{{ item.musicSize }}</div>
                  <div class="fansCount">
                    粉丝数：{{ useNumberFormat(item.fansCount) }}
                  </div>
                </div>
              </div>
              <div class="back"></div>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <Loading></Loading>
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { UseSongPersongStore } from '@/stores/SongPersongStore';
import { TypeNav, areaNav, letterNav } from '@/data/SongPersongNavs';
import { useNumberFormat } from '@/utils/FormatData';
import { onMounted, ref } from 'vue';
import Loading from '@/components/Loading.vue';
import { useRouter } from 'vue-router';
const SongPersongStore = UseSongPersongStore();
const {
  Type,
  area,
  initial,
  SongPersongListData,
  IsShowLoading,
  SongPersonglimit,
  SongPersongoffset,
} = storeToRefs(SongPersongStore);
const TypeNavRef = ref('-1');
const areaNavRef = ref('-1');
const letterNavRef = ref('-1');
const images = ref<HTMLImageElement[]>([]);
const Router = useRouter();
onMounted(async () => {
  SongPersongStore.fetchGetSongPersong();
  // 预加载函数
  await preloadImages(SongPersongListData);
  SongPersonglimit.value = 33;
  SongPersongoffset.value = 0;
});
async function preloadImages(fileList: any): Promise<void> {
  if (!Array.isArray(fileList)) {
    fileList = Array.from(fileList);
  }
  const promises: Promise<void>[] = fileList.map((element: any) => {
    return new Promise<void>((resolve) => {
      let img = new Image();
      img.src = element.picUrl;
      img.onload = () => {
        images.value.push(img);
        resolve();
      };
    });
  });
  await Promise.all(promises);
}
const handelChangeTypeValue = (item: string) => {
  Type.value = item;
  TypeNavRef.value = item;
  SongPersongStore.fetchGetSongPersong();
};
const handelChangeareaValue = (item: string) => {
  area.value = item;
  areaNavRef.value = item;
  SongPersongStore.fetchGetSongPersong();
};
const handelChangeLetterValue = (item: string) => {
  initial.value = item;
  letterNavRef.value = item;
  SongPersongStore.fetchGetSongPersong();
};
const HandelSongPersonLiteItemClick = (item: any) => {
  Router.push({ path: `/SongPersongDetaile/${item.id}` });
};
</script>
<style scoped lang="less">
.BaseWrapper {
  margin-top: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
.songpersongWrapper {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  .TopNav {
    padding: 20px;
    box-sizing: border-box;
    height: 250px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .type,
    .area,
    .letter {
      width: 100%;
      display: flex;
      .title {
        margin-top: 30px;
      }
      .TypeNav,
      .areaNav,
      .letterNav {
        width: 80%;
        display: flex;
        flex-wrap: wrap;

        .items {
          margin-top: 30px;
          cursor: pointer;
          padding: 3px 12px;
          border-radius: 12px;
        }
        .active {
          background-color: #ff6700;
        }
      }
      .letterNav {
        display: flex;
      }
    }
  }
  .SongPersongList {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .SongPersongData {
      margin-top: 20px;
      .songPerdetaile {
        z-index: 99;
        position: relative;
        width: 100%;
        height: 120px;
        align-items: center;
        display: flex;
        &:hover {
          color: #ff6700;
          .back {
            width: 102.8%;
            left: -10px;
          }
          .img {
            img {
              border-radius: 50%;
            }
          }
        }
        .back {
          transition: all 0.5s;
          left: 50px;
          z-index: -1;
          position: absolute;
          width: 90%;
          height: 120px;
          // height: 100%;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 20px 27px #0000000d;
        }
      }

      cursor: pointer;
      width: 30%;
      display: flex;
      align-items: center;
      .img {
        width: 100px;
        height: 100px;
        min-height: 100px;
        min-width: 100px;
        img {
          transition: all 0.5s;
          border-radius: 12px;
          width: 100%;
          height: 100%;
        }
      }
      .infoWrapper {
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-size: 20px;
          margin-left: 30px;
        }
        .info {
          margin-left: 30px;
          display: flex;
        }
        .albumSize {
          font-weight: 800;
          margin-right: 10px;
        }
        .musicSize {
          font-weight: 800;
          margin-right: 10px;
        }
        .fansCount {
          font-weight: 800;
        }
      }
    }
  }
}
</style>

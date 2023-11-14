<template>
  <div class="PlayComponentWrapper">
    <div class="left">
      <div class="SongInfo BaseWrapper">
        <div class="name">{{ Songdata.name }}</div>
        <template v-for="(item, index) in Songdata.ar" :key="index">
          <div class="ar">
            {{ item.name }}
          </div>
        </template>
        <div class="Songdetaile">
          <div class="def">专辑：{{ Songdata.al?.name }}</div>
          <div class="time">
            发行时间：{{
              FormatTime(Songdata.publishTime ? Songdata.publishTime : 0)
            }}
          </div>
        </div>
        <div class="play" @click="handelPlayClick">
          <img src="../assets/img/Plary.png" alt="" />
          <span>立即播放</span>
        </div>
      </div>
      <div class="SongsWrapper BaseWrapper">
        <div class="title">相似歌曲</div>
        <template v-for="(item, index) in Songs" :key="index">
          <div class="songItem">
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="center">
      <div class="lyic BaseWrapper">
        <div class="title">歌词</div>
        <div class="LyricDataList">
          <template v-for="item in LyricData" :key="item">
            <div class="LyricData">
              {{ item.content }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="playstate BaseWrapper">
        <div class="poiner1"></div>
        <div class="poiner2"></div>
        <div class="poiner3"></div>
        <div class="poiner4"></div>
        <div class="this">
          <img src="../assets/img/this.png" alt="" />
        </div>
        <div class="imgbox">
          <img class="cover" src="../assets/img/disc.986e5ec6.png" alt="" />
          <div class="songpng">
            <template v-if="Songdata.al">
              <img :src="Songdata.al.picUrl" alt="" />
            </template>
          </div>
        </div>
      </div>
      <div class="PlayListWrapper BaseWrapper">相似歌单</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { UsePlayStore } from '@/stores/PlayStore';
import { storeToRefs } from 'pinia';
import { FormatTime } from '@/utils/FormatTime';
import TopPlayListVue from '@/components/TopPlayList.vue';
const PlayStore = UsePlayStore();
const { Songdata, LyricData, Songs, mvs, playlists } = storeToRefs(PlayStore);
const Router = useRoute();
onMounted(() => {
  const Id = String(Router.params.id);
  // 获取到歌曲信息
  PlayStore.FetchgetSongdata(Id);
  // 获取到歌词信息
  PlayStore.FetchgetSonglyricData(Id);
  PlayStore.FetchgetsimisongData(Id);
  PlayStore.FetchGetsimiplaylist(Id);
  PlayStore.FetchGetsimimv(Id);
});
const handelPlayClick = () => {
  console.log('点击了播放');
};
</script>
<style scoped lang="less">
.BaseWrapper {
  border-radius: 13px;
  box-sizing: border-box;
  box-shadow: 0 20px 27px #0000000d;
  background-color: #ffffff;
}
.PlayComponentWrapper {
  .left,
  .center,
  .right {
    width: 33%;
  }
  .left {
    .SongsWrapper {
      margin-top: 30px;
      height: 300px;
      .title {
        font-size: 20px;
        font-weight: 800;
        text-align: center;
      }
    }
  }
  .right {
    .PlayListWrapper {
      margin-top: 30px;
      height: 300px;
    }
  }
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .SongInfo {
    height: 350px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    .name {
      text-align: center;
      font-size: 25px;
      font-weight: 800;
    }
    .ar {
      text-align: center;
      margin-top: 30px;
      font-size: 18px;
      color: #909090;
      font-weight: 700;
    }
    .Songdetaile {
      text-align: center;
      color: #909090;
      font-size: 15px;
      margin-top: 30px;
      // display: flex;
      .time {
        margin-top: 20px;
      }
    }
    .play {
      cursor: pointer;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: 70px;
      border-radius: 13px;
      width: 100px;
      padding: 5px 10px;
      background-color: #ff6700;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        color: #ffffff;
        font-size: 18px;
      }
    }
  }
  .lyic {
    cursor: pointer;
    width: 100%;
    padding: 20px;
    height: 679px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    transition: width 0.3s ease;
    &::-webkit-scrollbar {
      display: none;
    }
    .title {
      text-align: center;
      font-size: 20px;
      color: #000000;
    }
    .LyricDataList {
      text-align: center;
      .LyricData {
        margin-top: 20px;
      }
    }
  }
  .playstate {
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    position: relative;
    &:hover {
      .this {
        img {
          transition: all 0.8s;

          transform: rotate(45deg);
        }
      }
      .imgbox {
        img {
          z-index: 1;
          transform: rotate(360deg);
        }
      }
    }
    .poiner1 {
      margin-top: 10px;
      margin-left: 10px;
      left: 0;
      top: 0;
      position: absolute;
      z-index: 999;
      width: 10px;
      height: 10px;
      background-color: #ff0000;
      border-radius: 50%;
    }

    .poiner2 {
      right: 0;
      top: 0;
      margin-top: 10px;
      margin-right: 10px;
      position: absolute;
      z-index: 999;
      width: 10px;
      height: 10px;
      background-color: #ff0000;
      border-radius: 50%;
    }

    .poiner3 {
      margin-right: 10px;
      margin-bottom: 10px;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: 999;
      width: 10px;
      height: 10px;
      background-color: #ff0000;
      border-radius: 50%;
    }

    .poiner4 {
      margin-left: 10px;
      margin-bottom: 10px;
      left: 0;
      bottom: 0;
      position: absolute;
      z-index: 999;
      width: 10px;
      height: 10px;
      background-color: #ff0000;
      border-radius: 50%;
    }
    .this {
      position: absolute;
      left: 89%;
      top: 3%;
      img {
        z-index: 99;
        transform-origin: 22px 5px;
      }
    }
    .imgbox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        transition: all 2.5s ease;
      }
      .songpng {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 1;
        img {
          border-radius: 50%;
          width: 50%;
          height: 58%;
        }
      }
    }
  }
}
</style>

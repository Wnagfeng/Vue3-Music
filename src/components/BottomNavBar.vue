<template>
  <div class="BottomNavBarWrapper">
    <div class="Main">
      <div class="control">
        <div class="BeforSong" @click="handelBeforSongClick">
          <img src="../assets/img/Song/BeforSong.png" alt="" />
        </div>
        <div class="PlayState" @click="handelPlaySongClick">
          <template v-if="IsPlayState">
            <img src="../assets/img/Song/Pause.png" alt="" />
          </template>
          <template v-else>
            <img src="../assets/img/Song/Paly.png" alt="" />
          </template>
        </div>
        <div class="AfterSong" @click="handelAfterSongClick">
          <img src="../assets/img/Song/afterSong.png" alt="" />
        </div>
      </div>
      <div class="playinfo">
        <div class="cover" @click="handelGoToSongDetaileClick">
          <img v-lazy="CurrentPlaySong.al?.picUrl" alt="" />
        </div>
        <div class="sliderWrapper">
          <div class="name">
            {{ CurrentPlaySong.name }}
          </div>
          <div class="slider">
            <div class="slider-demo-block">
              <el-slider v-model="CurrentPlaySongProgress" />
            </div>
          </div>
        </div>
      </div>
      <div class="PLayModule">
        <template v-for="item in PlayMode" :key="item.name">
          <template v-if="item.key == PlayModel">
            <div class="label">{{ item.name }}</div>
            <img
              :src="item.path"
              alt=""
              @click="handelChangePlaymodelclick(item)"
            />
          </template>
        </template>
      </div>
      <div class="playListWrapper">
        <img
          src="../assets/img/Song/SongPlayList.png"
          @click="HandelPlayListClick"
          alt=""
        />
        <div class="playListItem" ref="playListItem">1</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
import { UsePlayStore } from '../stores/PlayStore';
import { useRouter } from 'vue-router';
import SongList from './SongList.vue';
const router = useRouter();
const ID = ref();
const PlayMode = reactive([
  {
    name: '随机播放',
    key: 1,
    path: '/src/assets/img/Song/random.png',
  },
  {
    name: '单曲循环',
    key: 2,
    path: '/src/assets/img/Song/SongFor.png',
  },
  {
    name: '列表循环',
    key: 3,
    path: '/src/assets/img/Song/For.png',
  },
]);
const PlayStore = UsePlayStore();
const {
  IsPlayState,
  Songdata,
  PlayModel,
  CurrentPlaySong,
  ids,
  CurrentPlaySongProgress,
  CurrentPlaySongList,
} = storeToRefs(PlayStore);
onMounted(() => {
  const CurrentID = ids.value;
  ID.value = CurrentID;
  if (!CurrentID) {
    console.log('222');
    PlayStore.fetchGetdailySongsData();
  } else {
    console.log('111');
    PlayStore.FetchgetSongdata(CurrentID);
  }
  if (!CurrentPlaySongList.value[0]) {
    PlayStore.fetchGetdailySongsData();
  } else {
  }
});
const value1 = ref(10);
const playListItem = ref<HTMLDivElement>();
const handelBeforSongClick = () => {
  console.log('上一首');
};
const handelAfterSongClick = () => {
  console.log('下一首');
};
const handelPlaySongClick = () => {
  IsPlayState.value = !IsPlayState.value;
};
const handelGoToSongDetaileClick = () => {
  const id = localStorage.getItem('CurrentPlayID');
  router.push({ path: `/PLaComponent/${id}` });
};
const handelChangePlaymodelclick = (item: any) => {
  PlayModel.value = PlayModel.value + 1;
  if (PlayModel.value == 4) {
    PlayModel.value = 1;
  }
};
const HandelPlayListClick = () => {
  if (playListItem.value) {
    playListItem.value.classList.toggle('ShowplayListItem');
  }
};
</script>
<style scoped lang="less">
.BottomNavBarWrapper {
  height: 100%;
  .Main {
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    opacity: 1;
    cursor: pointer;
    .control {
      height: 100%;
      display: flex;
      align-items: center;
      .BeforSong,
      .AfterSong {
        img {
          width: 35px;
          height: 35px;
        }
      }
      .PlayState {
        img {
          margin-left: 10px;
          margin-right: 10px;
          width: 40px;
          height: 40px;
        }
      }
    }
    .playinfo {
      margin-left: 20px;
      .cover {
        margin-right: 20px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 12px;
        }
      }
      .sliderWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      display: flex;
      .slider {
        width: 350px;
        height: 30px;
      }
    }
    .PLayModule {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      margin-left: 20px;
      img {
        margin-top: 5px;
        width: 20px;
        height: 20px;
      }
    }
    .playListWrapper {
      position: relative;
      display: flex;

      img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
      .playListItem {
        transition: all linear 0.5s;
        top: -315px;
        left: -650px;
        width: 700px;
        height: 300px;
        opacity: 0;
        background-color: antiquewhite;
        position: absolute;
      }
      .ShowplayListItem {
        opacity: 1;
      }
    }
  }
}
</style>

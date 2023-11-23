<template>
  <div class="BottomNavBarWrapper">
    <div class="Main">
      <div class="AudioWrapper">
        <audio controls :src="SongUrl" ref="AudioRef"></audio>
      </div>
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
              <el-slider
                :show-tooltip="false"
                :tooltip-class="'hidden-tooltip'"
                v-model="CurrentPlaySongProgress"
                @change="handelChangeSliderClick"
                @change-end="handleChangeEnd"
              />
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
        <div class="playListItem" ref="playListItem">
          <div class="songList">
            <el-table
              :data="CurrentPlaySongList"
              style="width: 100%"
              @cell-click="handelCellClick"
            >
              <el-table-column label="序号" width="80">
                <template v-slot="row">
                  <div class="index">
                    {{ row.$index + 1 }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="歌手" width="180" show-overflow-tooltip>
                <template v-slot="{ row }">
                  <template v-if="row.ar.length == 1">
                    <span v-for="artist in row.ar" :key="artist.id">
                      {{ artist.name }}
                    </span>
                  </template>
                  <template v-else>
                    <span
                      v-for="(item, index) in row.ar"
                      :key="item.id"
                      class="names"
                    >
                      {{ item.name }}
                      <template v-if="index + 1 !== row.ar.length">
                        /
                      </template>
                    </span>
                  </template>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="歌曲" />
              <el-table-column prop="al.name" label="专辑" />
              <el-table-column prop="dt" label="时长" width="100px">
                <template v-slot="{ row }">
                  <div class="time">
                    {{ convertMillisecondsToMinutesAndSeconds(row.dt) }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref, watch } from 'vue';
import { UsePlayStore } from '../stores/PlayStore';
import { useRouter } from 'vue-router';
import SongList from './SongList.vue';
import { convertMillisecondsToMinutesAndSeconds } from '../utils/FormatSongTime';
import { TheMvCommentEventBus } from '@/utils/EventBus';
const router = useRouter();
// --------------------------歌曲播放-----------------------------------------
const AudioRef = ref<HTMLAudioElement | undefined>(undefined);
const currentTime = ref(0);
const duration = ref(0);
const isPushSlider = ref(false);
const progressPercentage = () => {
  return (currentTime.value / duration.value) * 100;
};
const updateProgress = () => {
  currentTime.value = AudioRef.value?.currentTime || 0;
  duration.value = AudioRef.value?.duration || 0;
};
const playAudio = () => {
  AudioRef.value?.play();
  updateProgress();
};
const pauseAudio = () => {
  AudioRef.value?.pause();
  updateProgress();
};
const HandelSetprogressPercentage = () => {
  updateProgress();
  const res = progressPercentage();
  CurrentPlaySongProgress.value = res;
};

setInterval(function () {
  if (isPushSlider.value) {
    console.log('拖动中');
  } else {
    HandelSetprogressPercentage();
  }
}, 500);

// --------------------------------------------------------------------
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
  PlayModel,
  CurrentPlaySong,
  ids,
  CurrentPlaySongProgress,
  CurrentPlaySongList,
  CurrentTime,
  AuDioSrc,
  SongUrl,
} = storeToRefs(PlayStore);

watch(
  [currentTime, duration],
  ([curTime, dur]) => {
    CurrentTime.value = curTime * 1000;
    console.log(`当前播放进度：${curTime}/${dur}`);
  },
  { immediate: true },
);
onMounted(() => {
  let CurrentID = ids.value;
  if (!CurrentID) {
    PlayStore.fetchGetdailySongsData();
  } else {
    PlayStore.FetchgetSongdata(CurrentID);
  }
  if (!CurrentPlaySongList.value[0]) {
    PlayStore.fetchGetdailySongsData();
  }
  if (IsPlayState.value === true) {
    playAudio();
  } else {
    pauseAudio();
  }
});
watch(IsPlayState, (newValue, oldValue) => {
  if (newValue === true) {
    playAudio();
  } else {
    pauseAudio();
  }
});
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
  const id = ids.value;
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

const handelCellClick = (row: any) => {
  CurrentPlaySongProgress.value = 0;
  AuDioSrc.value = '';
  const Id = row.id;
  IsPlayState.value = false;
  ids.value = row.id;
  PlayStore.FetchgetSongdata(Id);
};
const handleChangeEnd = (value: any) => {
  console.log('松开了：' + value);
};
const handelChangeSliderClick = (e: any) => {
  isPushSlider.value = false;
  const res1 = e / 100;
  const res2 = duration.value;
  const res = res2 * res1;
  if (!AudioRef.value) return;
  AudioRef.value.currentTime = res;
  CurrentPlaySongProgress.value = e;
};
</script>
<style scoped lang="less">
.BottomNavBarWrapper {
  height: 100%;
  .Main {
    .AudioWrapper {
      position: absolute;
      opacity: 0;
    }
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
        border: 1px solid black;
        overflow-y: auto;
        overflow-x: hidden;
        transition: all linear 0.5s;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar {
          display: none;
        }
        top: -314px;
        left: -650px;
        width: 700px;
        height: 300px;
        opacity: 0;
        position: absolute;

        .songList {
          :deep(.el-table__row) {
            cursor: pointer;
          }
          :deep(.el-table__row):hover {
            color: #f5ab17;
          }
          .imgbox {
            display: none;
            width: 20px;
            height: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .names {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .ShowplayListItem {
        opacity: 1;
      }
    }
  }
}
</style>

<template>
  <template v-if="props.Itemdata">
    <div class="SongListWrapper">
      <div class="title">
        <div class="right">
          <h2>歌曲列表</h2>
          <template v-if="props.Itemdata">
            <div class="SongCount">共{{ props.Itemdata?.length }}首歌曲</div>
          </template>
        </div>
        <div class="left">
          <div class="img">
            <img class="PlaryImg" src="../assets/img/Plary.png" alt="" />
            <span @click="handelPlayAllSong">播放全部</span>
          </div>
        </div>
      </div>
      <div class="songList">
        <el-table :data="props.Itemdata" style="width: 100%">
          <el-table-column label="序号" width="80">
            <template v-slot="row">
              <div class="imgbox" @click="handelPlaySong(row)">
                <img src="../assets/img/Plary.png" alt="" />
              </div>
              <div class="index">
                {{ row.$index }}
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
                  <template v-if="index + 1 !== row.ar.length"> / </template>
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
              <div class="addPlaylist">
                <div class="imgbox" @click="handelAddSongList(row)">
                  <img src="../assets/img/AddPlylist.png" alt="" />
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  <template v-else>
    <Loading></Loading>
  </template>
</template>
<script setup lang="ts">
import type { Track } from './types/SongList';
import { useRouter } from 'vue-router';
import { convertMillisecondsToMinutesAndSeconds } from '../utils/FormatSongTime';
import Loading from '@/components/Loading.vue';
import { UsePlayStore } from '@/stores/PlayStore';
import { storeToRefs } from 'pinia';
const PlayStore = UsePlayStore();
const { ids, CurrentPlaySongList, IsPlayState } = storeToRefs(PlayStore);
const Router = useRouter();
const props = defineProps<Track>();
const handelPlaySong = (data: any) => {
  // 直接播放不跳转
  const Id = data.row.id;
  ids.value = Id;
  PlayStore.FetchgetSongdata(Id);
  console.log(Id);
  // Router.push({ path: `/PLaComponent/${Id}` });
};
const handelAddSongList = (data: any) => {
  const Id = data.id;
  PlayStore.FetchGetAddSongListData(Id);
};
const handelCellClick = (row: any) => {
  const Id = row.id;
  Router.push({ path: `/PLaComponent/${Id}` });
};

const handelPlayAllSong = () => {
  CurrentPlaySongList.value = props.Itemdata;
  const id = props.Itemdata[0].id;
  PlayStore.FetchgetSongdata(id);
};
</script>
<style scoped lang="less">
.SongListWrapper {
  width: 100%;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
      .SongCount {
        margin-left: 20px;
      }
    }
    .left {
      .img {
        font-size: 16px;
        cursor: pointer;
        background-color: #f5ab17;
        width: 120px;
        height: 40px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .PlaryImg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .songList {
    :deep(.el-table__row) {
      cursor: pointer;
    }
    :deep(.el-table__row):hover {
      color: #f5ab17;
      .imgbox {
        display: block;
      }
      .index {
        display: none;
      }
      .time {
        display: none;
      }
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
</style>

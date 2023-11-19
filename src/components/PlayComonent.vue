<template>
  <div class="PlayComponentWrapper">
    <div class="PlaySonginfo">
      <div class="left">
        <div class="playstate BaseWrapper">
          <div class="this">
            <img src="../assets/img/this.png" alt="" />
          </div>
          <div class="imgbox">
            <img class="cover" src="../assets/img/disc.986e5ec6.png" alt="" />
            <div class="songpng">
              <template v-if="Songdata.al">
                <img v-lazy="Songdata.al.picUrl" alt="" />
              </template>
            </div>
          </div>
        </div>
        <div class="SongInfo BaseWrapper">
          <div class="name">{{ Songdata.name }}</div>
          <template v-if="Songdata.ar?.length">
            <div class="ar">
              {{ Songdata.ar[0].name }}
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
            <img src="../assets/img/PlayWhite.png" alt="" />
            <span>立即播放</span>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="Centercover">
          <template v-if="Songdata.al">
            <img v-lazy="Songdata.al.picUrl" alt="" />
          </template>
        </div>
        <div class="lyic BaseWrapper">
          <div class="LyricDataList">
            <template v-for="item in LyricData" :key="item">
              <div class="LyricData">
                {{ item.content }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="title">相关推荐</div>
      <div class="RecommendSongs BaseWrapper">
        <template v-for="item in Songs" :key="item">
          <div class="SongItem">
            <div class="name">{{ item.name }}</div>
            <div class="line">——</div>
            <div class="alias">{{ item.artists[0].name }}</div>
            <div class="incon">
              <img
                class="play"
                @click="handelSongsPlayclick(item.id)"
                src="../assets/img/Plary.png"
                alt=""
              />
              <img class="add" src="../assets/img/AddPlylist.png" alt="" />
            </div>
          </div>
        </template>
      </div>
      <template v-if="mvs.length">
        <div class="RecommendListData BaseWrapper">
          <template v-for="item in mvs" :key="item">
            <div class="MvLiteItem">
              <MustNewMvItem :Itemdata="item"></MustNewMvItem>
            </div>
          </template>
        </div>
      </template>

      <template v-if="playlists.length">
        <div class="RecommednPlayList BaseWrapper">
          <template v-for="item in playlists" :key="item">
            <div class="pla">
              <PallistItem
                :itemData="item"
                @click="handelPlayLitsiTitemCLick(item.id)"
              ></PallistItem>
            </div>
          </template>
        </div>
      </template>
    </div>
    <div class="CommentWrapper">
      <MvComment :ItemData="CommentListData"></MvComment>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { UsePlayStore } from '@/stores/PlayStore';
import { UseMvcommentStore } from '@/stores/MvcommentStore';
import { storeToRefs } from 'pinia';
import { FormatTime } from '@/utils/FormatTime';
import SongList from './SongList.vue';
import MustNewMvItem from './MustNewMvItem.vue';
import PallistItem from './PallistItem.vue';
import MvComment from './MvComment.vue';
const PlayStore = UsePlayStore();
const MvcommentStore = UseMvcommentStore();
const { Songdata, LyricData, Songs, mvs, playlists } = storeToRefs(PlayStore);
const { id, CommentListData, type } = storeToRefs(MvcommentStore);
const Router = useRoute();
const router = useRouter();
onMounted(() => {
  const Id = String(Router.params.id);
  id.value = Id;
  type.value = 0;
  PlayStore.FetchgetSongdata(Id);
  PlayStore.FetchgetSonglyricData(Id);
  PlayStore.FetchgetsimisongData(Id);
  PlayStore.FetchGetsimiplaylist(Id);
  PlayStore.FetchGetsimimv(Id);
  MvcommentStore.FetchGetMvCommentListData();
});
const handelPlayClick = () => {
  console.log('点击了播放');
};
const handelPlayLitsiTitemCLick = (item: number) => {
  router.push({ path: `/SongDetaile/${item}` });
};
const handelSongsPlayclick = (id: any) => {
  const Id = id;
  PlayStore.FetchgetSongdata(Id);
  PlayStore.FetchgetSonglyricData(Id);
  PlayStore.FetchgetsimisongData(Id);
  PlayStore.FetchGetsimiplaylist(Id);
  PlayStore.FetchGetsimimv(Id);
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
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 130px;
  .PlaySonginfo {
    display: flex;
    width: 100%;

    .center {
      border-radius: 13px;
      overflow: hidden;
      position: relative;
      flex: 1;
      .Centercover {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 13px;
        filter: blur(20px);
        background-size: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .lyic {
        opacity: 0.7;
        position: absolute;
        z-index: 999;
        font-size: 25px;
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
    }
    .left {
      margin-right: 20px;
      width: 450px;
      .SongsWrapper {
        margin-top: 30px;
        height: 300px;
        .title {
          font-size: 20px;
          font-weight: 800;
          text-align: center;
        }
      }
      .playstate {
        box-sizing: border-box;
        width: 100%;
        height: 300px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
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
        .this {
          position: absolute;
          z-index: 999;
          right: 29px;
          top: 50px;
          img {
            z-index: 99;
            transform-origin: 22px 5px;
          }
        }
        .imgbox {
          max-width: 342px;
          max-height: 300px;
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
              max-width: 200px;
              max-height: 200px;
            }
          }
        }
      }
      .SongInfo {
        margin-top: 30px;
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
    }
  }
  .recommend {
    // padding: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 30px;
    .title {
      margin-left: 20px;
      font-size: 30px;
      font-weight: 800;
    }
    .RecommendSongs {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      padding: 20px;
      .SongItem {
        padding-bottom: 10px;
        border-bottom: 1px solid #909090;
        // margin: 0 auto;
        cursor: pointer;
        display: flex;
        font-size: 25px;
        margin-top: 20px;
        &:hover {
          .incon {
            display: block;
          }
        }
        .name {
        }
        .line {
          margin-left: 10px;
          margin-right: 10px;
        }
        .alias {
        }
        .incon {
          display: none;
          img {
            width: 23px;
            height: 23px;
          }
          .play {
            margin-left: 40px;
          }
          .add {
            margin-left: 30px;
          }
        }
      }
    }
    .RecommendListData {
      margin-top: 30px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
    }
    .RecommednPlayList {
      margin-top: 30px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
    }
  }
  .CommentWrapper {
    margin: 0 auto;
    width: 80%;
  }
}
</style>

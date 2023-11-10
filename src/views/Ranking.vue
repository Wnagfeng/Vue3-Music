<template>
  <div class="RankingWrapper">
    <div class="Songs">
      <template v-if="RankingDatas.coverImgUrl">
        <div class="SongsInfo">
          <div class="img">
            <img :src="RankingDatas.coverImgUrl" alt="" />
          </div>
          <div class="info gradient-text">
            <div class="name">{{ RankingDatas.name }}</div>
            <div class="time">
              <div class="updateTime">
                更新时间：{{
                  RankingDatas.updateTime
                    ? FormatTime(RankingDatas.updateTime)
                    : ''
                }}
              </div>
              <div class="createTime">
                创建时间：{{
                  RankingDatas.createTime
                    ? FormatTime(RankingDatas.createTime)
                    : ''
                }}
              </div>
            </div>
            <div class="playCount">
              播放数：{{
                RankingDatas.playCount
                  ? useNumberFormat(RankingDatas.playCount)
                  : ''
              }}
            </div>
            <div class="commentCount">
              评论数：{{
                RankingDatas.commentCount
                  ? useNumberFormat(RankingDatas.commentCount)
                  : ''
              }}
            </div>
            <div class="description">
              歌单数： {{ RankingDatas.description }}
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="LoadingWrapper BaseWrapper">
          <Loading></Loading>
        </div>
      </template>
      <div class="SongList BaseWrapper">
        <template v-if="RankingDatas.tracks">
          <SongList :Itemdata="RankingDatas.tracks"></SongList>
        </template>
        <template v-else>
          <Loading></Loading>
        </template>
      </div>
    </div>

    <div class="Navs BaseWrapper">
      <div class="TopListone">
        <div class="headd">— 特色榜单 —</div>
        <div class="OneItemWrapper">
          <template v-for="(item, index) in FeaturedLists[0]" :key="index">
            <div
              class="items"
              @click="handelOneItemsClick(item, index)"
              :class="[selectOneIndex === index ? 'active' : '']"
            >
              <div class="img">
                <img v-lazy="item.coverImgUrl" alt="" />
              </div>
              <div class="info">
                <div class="item">{{ item.name }}</div>
                <div class="label">{{ item.updateFrequency }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="TopListTwo">
        <div class="headd">— 全球榜单 —</div>
        <div class="TwoItemWrapper">
          <template v-for="(item, index) in GlobalLists[0]" :key="index">
            <div
              class="items"
              @click="handelTwoItemsClick(item, index)"
              :class="[selectTwoIndex === index ? 'active' : '']"
            >
              <div class="img">
                <img v-lazy="item.coverImgUrl" alt="" />
              </div>
              <div class="info">
                <div class="item">{{ item.name }}</div>
                <div class="label">{{ item.updateFrequency }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { userTopListStore } from '../stores/TopListStore';
import { useNumberFormat } from '@/utils/FormatData';
import Loading from '../components/Loading.vue';
import SongList from '../components/SongList.vue';
const TopListStore = userTopListStore();
const selectOneIndex = ref(0);
const selectTwoIndex = ref(-1);
const RankingId = ref(19723756);
const { FeaturedLists, GlobalLists, RankingDatas } = storeToRefs(TopListStore);
const handelOneItemsClick = (item: any, index: string) => {
  selectOneIndex.value = Number(index);
  selectTwoIndex.value = -1;
  RankingId.value = item.id;
  TopListStore.FetchGetPayListToTopPlayListsId(RankingId.value);
};
const handelTwoItemsClick = (item: any, index: string) => {
  selectOneIndex.value = -1;
  selectTwoIndex.value = Number(index);
  RankingId.value = item.id;
  TopListStore.FetchGetPayListToTopPlayListsId(RankingId.value);
};
const FormatTime = (time: number) => {
  const timestamp = time;
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
onMounted(() => {
  TopListStore.FetchGetTopPlaylists();
  TopListStore.FetchGetPayListToTopPlayListsId(RankingId.value);
});
</script>
<style scoped lang="less">
.gradient-text {
  background: linear-gradient(
    90deg,
    #f5706d,
    #6eaa24,
    rgb(0, 87, 193),
    #008000,
    #f9a825,
    #1777f5
  );
  background-size: 400% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-glow 10s ease-in-out infinite;
}

@keyframes text-glow {
  to {
    background-position: -400% center;
  }
}
.active {
  background-color: #cacaca90;
}
.BaseWrapper {
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 27px #0000000d;
}
.RankingWrapper {
  display: flex;
  justify-content: space-between;
  .Songs {
    margin-left: 20px;
    margin-right: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    .SongList {
      // width: 93%;
    }
  }

  .Navs {
    width: 200px;
    min-width: 200px;
    overflow: hidden;
    .TopListone {
      .headd {
        font-size: 20px;
        font-weight: 800;
        text-align: center;
      }
      .OneItemWrapper {
        font-size: 15px;
        .items {
          height: 49px;
          transition: background-color 0.5s;
          border-radius: 12px;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding-top: 1px;
          margin-top: 21px;
          .img {
            img {
              border-radius: 10px;
              width: 50px;
              height: 50px;
            }
          }
          .info {
            margin-left: 20px;
            .item {
              display: inline-block;
              white-space: nowrap;
              width: 130px;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    .TopListTwo {
      .headd {
        margin-top: 25px;
        font-size: 20px;
        font-weight: 800;
        text-align: center;
      }
      .TwoItemWrapper {
        font-size: 15px;
        .items {
          border-radius: 12px;
          transition: background-color 0.5s;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-top: 20px;
          .img {
            img {
              border-radius: 10px;
              width: 50px;
              height: 50px;
            }
          }
          .info {
            margin-left: 20px;
            .item {
              width: 130px;
              overflow: hidden; //超出一行文字自动隐藏
              text-overflow: ellipsis; //文字隐藏后添加省略号
              white-space: nowrap; //强制不换行
            }
          }
        }
      }
    }
  }
  .SongsInfo {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    border-radius: 12px;
    .img {
      width: 250px;
      height: 250px;
      img {
        border-radius: 12px;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      font-size: 15px;
      width: 60%;
      height: 215px;
      padding: 20px;
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 20px 27px #0000000d;
      .time {
        margin-top: 20px;
        display: flex;
      }
      .createTime {
        margin-left: 20px;
      }
      .playCount {
        margin-top: 20px;
      }
      .commentCount {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .name {
        font-size: 30px;
        font-weight: 800;
      }
    }
  }
  .LoadingWrapper {
    width: 100%;
    min-height: 200px;
  }
}
</style>

import wfrequest from '.';
import wfrequestV1 from './indexV2';
export function getSongdata(ids: string) {
  return wfrequest.get({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}
// 获取到歌词信息
export function getSonglyricData(id: string) {
  return wfrequest.get({
    url: '/lyric',
    params: {
      id,
    },
  });
}
// 获取到相似歌曲信息
export function getsimisong(id: string) {
  return wfrequest.get({
    url: '/simi/song',
    params: {
      id,
    },
  });
}
// 相似歌单
export function Getsimiplaylist(id: string) {
  return wfrequest.get({
    url: '/simi/playlist',
    params: {
      id,
    },
  });
}
// 相似mv
export function Getsimimv(mvid: string) {
  return wfrequest.get({
    url: '/simi/mv',
    params: {
      mvid,
    },
  });
}

// 每日推荐
export function GetdailySongsData() {
  return wfrequest.get({
    url: '/recommend/songs',
  });
}

// 获取都SongSrc


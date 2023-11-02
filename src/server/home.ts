import wfrequest from '.';
export function getBannerData() {
  return wfrequest.get({
    url: '/banner',
  });
}
// 获取到好歌推荐数据
export function getPlaylistdata(
  cat: string,
  limit: number = 6,
  offset: number = 0,
  order: string = 'hot',
) {
  return wfrequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset,
      order,
    },
  });
}
// 获取新碟数据
export function GetNewDisData(area: any, type = 'new', limit: 15, offset: 0) {
  return wfrequest.get({
    url: 'album/new',
    params: {
      area,
      type,
      limit,
      offset,
    },
  });
}
// 获取榜单数据
export function GetTopPlaylists() {
  return wfrequest.get({
    url: '/toplist',
  });
}
// 根据榜单id去请求榜单内容
export function GetPayListToTopPlayListsId(id: number) {
  return wfrequest.get({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

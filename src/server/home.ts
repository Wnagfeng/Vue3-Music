import wfrequest from '.';
export function getBannerData() {
  return wfrequest.get({
    url: '/banner',
  });
}
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
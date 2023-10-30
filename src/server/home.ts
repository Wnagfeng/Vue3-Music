import wfrequest from '.';
export function getBannerData() {
  return wfrequest.get({
    url: '/banner',
  });
}
export function getPlaylistdata(
  cat: string,
  limit: number = 5,
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

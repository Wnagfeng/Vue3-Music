import wfrequest from '.';
export function GetcatlistData() {
  return wfrequest.get({
    url: '/playlist/catlist',
  });
}
export function GetTopPlaylists(cat: string, limit: number, offset: number) {
  return wfrequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset,
    },
  });
}

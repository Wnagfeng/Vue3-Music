import wfrequest from '.';
export function GetSongPersong(type: string, area: string, initial: string) {
  return wfrequest.get({
    url: '/top/artists',
    params: {
      type,
      area,
      initial,
    },
  });
}

import wfrequest from '.';
export function GetSongPersong(
  type: string,
  area: string,
  initial: string,
  offset: number,
  limit: number,
) {
  return wfrequest.get({
    url: '/artist/list',
    params: {
      type,
      area,
      initial,
      offset,
      limit,
    },
  });
}

export function GetSongPersongDetaileSongListData(id: string) {
  return wfrequest.get({
    url: '/artists',
    params: {
      id,
    },
  });
}

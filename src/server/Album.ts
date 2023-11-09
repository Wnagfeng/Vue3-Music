import wfrequest from '.';
export function GetAlbumDetaielSongsData(id: string) {
  return wfrequest.get({
    url: '/album',
    params: {
      id,
    },
  });
}

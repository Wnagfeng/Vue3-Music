import wfrequest from '.';
export function GetPLayMvdata(mvid: string) {
  return wfrequest.get({
    url: '/mv/detail',
    params: {
      mvid,
    },
  });
}
export function GetPlayMvUrl(id: string) {
  return wfrequest.get({
    url: '/mv/url',
    params: {
      id,
    },
  });
}

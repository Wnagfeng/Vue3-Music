import wfrequest from '.';
export function GetMvListdata(
  area: string,
  order: string,
  type: string,
  limit: number,
  offset: number,
) {
  return wfrequest.get({
    url: '/mv/all',
    params: {
      area,
      order,
      type,
      limit,
      offset,
    },
  });
}

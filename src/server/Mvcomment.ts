import wfrequest from '.';
export function GetMvCommentListData(
  id: string,
  offset: number,
  limit: number,
) {
  return wfrequest.get({
    url: '/comment/mv',
    params: {
      id,
      offset,
      limit,
    },
  });
}

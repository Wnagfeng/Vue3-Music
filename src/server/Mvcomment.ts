import wfrequest from '.';
export function GetMvCommentListData(
  id: string,
  offset: number,
  limit: number,
) {
  console.log(limit);
  console.log(offset);
  return wfrequest.get({
    url: '/comment/mv',
    params: {
      id,
      offset,
      limit,
    },
  });
}

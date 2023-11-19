import wfrequest from '.';
export function GetMvCommentListData(id: string, pageNo: number, type: number) {
  return wfrequest.get({
    url: '/comment/new',
    params: {
      id, //请求的id
      pageNo, //当前页码
      type, //请求类型 歌曲 mv等
      pageSize: 30, //统一按30每个页面
    },
  });
}
// 发表评论接口
export function publicationComment(
  id: string,
  type: number,
  content: string,
  cookie: string,
) {
  console.log(type);

  return wfrequest.get({
    url: '/comment',
    params: {
      id,
      t: 1,
      type,
      content,
      cookie,
    },
  });
}
// 回复评论
/**
 *
 * @param id 资源id
 * @param type 资源类型
 * @param content 回复内容
 * @param cookie 用户的Cookie
 * @param commentId 回复的id
 * @returns
 */
export function ReplayComment(
  id: string,
  type: number,
  content: string,
  cookie: string,
  commentId: string,
) {
  return wfrequest.get({
    url: '/comment',
    params: {
      id,
      type,
      content,
      cookie,
      commentId,
      t: 2,
    },
  });
}

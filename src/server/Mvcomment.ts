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
export function publicationComment(id: string, type: number, content: string) {
  return wfrequest.get({
    url: '/comment',
    params: {
      id,
      t: 1,
      type,
      content,
    },
    headers:{
      // Authorization:
    }
  });
}


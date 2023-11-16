export interface Comment {
  user: User;
  beReplied: BeReplied[];
  pendantData?: any;
  showFloorComment?: any;
  status: number;
  commentId: number;
  content: string;
  richContent?: any;
  contentResource?: any;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl?: any;
  commentLocationType: number;
  parentCommentId: number;
  decoration: Decoration;
  repliedMark?: any;
  grade?: any;
  userBizLevels?: any;
  ipLocation: IpLocation;
  owner: boolean;
  liked: boolean;
}
export interface Itemdata {
  ItemData: Comment[];
}

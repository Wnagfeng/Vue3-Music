export interface Associator {
  vipCode: number;
  rights: boolean;
  iconUrl: string;
}

export interface MusicPackage {
  vipCode: number;
  rights: boolean;
  iconUrl: string;
}

export interface VipRight {
  associator: Associator;
  musicPackage: MusicPackage;
  redplus?: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}

export interface User {
  avatarDetail?: any;
  commonIdentity?: any;
  locationInfo?: any;
  liveInfo?: any;
  followed: boolean;
  vipRights: VipRight;
  relationTag?: any;
  anonym: number;
  encryptUserId: string;
  userId: number;
  userType: number;
  nickname: string;
  avatarUrl: string;
  authStatus: number;
  expertTags?: any;
  experts?: any;
  vipType: number;
  remarkName?: any;
  isHug: boolean;
  socialUserId?: any;
  target?: any;
}

export interface ShowFloorComment {
  replyCount: number;
  comments?: any;
  showReplyCount: boolean;
  topCommentIds?: any;
  target?: any;
}

export interface Decoration {}

export interface Tag {
  datas: any[];
  extDatas: any[];
  contentDatas?: any;
  contentPicDatas?: any;
  relatedCommentIds?: any;
}

export interface ExtInfo {}

export interface CommentVideoVO {
  showCreationEntrance: boolean;
  allowCreation: boolean;
  creationOrpheusUrl?: any;
  playOrpheusUrl?: any;
  videoCount: number;
  forbidCreationText: string;
}

export interface IpLocation {
  ip?: any;
  location: string;
  userId?: any;
}

export interface RootObject {
  user: User;
  beReplied?: any;
  commentId: number;
  threadId: string;
  content: string;
  richContent?: any;
  status: number;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  replyCount: number;
  liked: boolean;
  expressionUrl?: any;
  parentCommentId: number;
  repliedMark: boolean;
  pendantData?: any;
  pickInfo?: any;
  showFloorComment: ShowFloorComment;
  decoration: Decoration;
  commentLocationType: number;
  musicianSayAirborne?: any;
  args: string;
  tag: Tag;
  source?: any;
  resourceSpecialType?: any;
  extInfo: ExtInfo;
  commentVideoVO: CommentVideoVO;
  contentResource?: any;
  contentPicNosKey?: any;
  contentPicUrl?: any;
  grade?: any;
  userBizLevels?: any;
  userNameplates?: any;
  ipLocation: IpLocation;
  owner: boolean;
  tail?: any;
  hideSerialComments?: any;
  hideSerialTips?: any;
  topicList?: any;
  privacy: number;
  track: string;
}
export interface Itemdata {
  ItemData: RootObject[];
}

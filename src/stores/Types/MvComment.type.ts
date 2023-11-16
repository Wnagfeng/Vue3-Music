export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

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
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  avatarDetail: AvatarDetail;
  userType: number;
  avatarUrl: string;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  socialUserId?: any;
  vipRights: VipRight;
  nickname: string;
  authStatus: number;
  expertTags?: any;
  experts?: any;
  vipType: number;
  commonIdentity?: any;
  userId: number;
  target?: any;
}

export interface PendantData {
  id: number;
  imageUrl: string;
}

export interface Decoration {}

export interface IpLocation {
  ip?: any;
  location: string;
  userId?: any;
}

export interface HotComment {
  user: User;
  beReplied: any[];
  pendantData: PendantData;
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

export interface MusicPackage {
  vipCode: number;
  rights: boolean;
  iconUrl: string;
}

export interface VipRight {
  associator?: any;
  musicPackage: MusicPackage;
  redplus?: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}

export interface User {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  avatarDetail?: any;
  userType: number;
  avatarUrl: string;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  socialUserId?: any;
  vipRights: VipRight;
  nickname: string;
  authStatus: number;
  expertTags?: any;
  experts?: any;
  vipType: number;
  commonIdentity?: any;
  userId: number;
  target?: any;
}

export interface User {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  avatarDetail?: any;
  userType: number;
  avatarUrl: string;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  socialUserId?: any;
  vipRights?: any;
  nickname: string;
  authStatus: number;
  expertTags?: any;
  experts?: any;
  vipType: number;
  commonIdentity?: any;
  userId: number;
  target?: any;
}

export interface IpLocation {
  ip?: any;
  location: string;
  userId: number;
}

export interface BeReplied {
  user: User;
  beRepliedCommentId: number;
  content: string;
  richContent?: any;
  status: number;
  expressionUrl?: any;
  ipLocation: IpLocation;
}

export interface Decoration {}

export interface IpLocation {
  ip?: any;
  location: string;
  userId: number;
}

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

export interface MvCommentDatatype {
  id: string;
  MvCommentlimit: number;
  MvCommentoffset: number;
  CommentListData: Comment[];
}

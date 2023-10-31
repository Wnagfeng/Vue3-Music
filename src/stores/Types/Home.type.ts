export interface Banner {
  imageUrl: string;
  targetId: number;
  adid?: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: any;
  exclusive: boolean;
  monitorImpress?: any;
  monitorClick?: any;
  monitorType?: any;
  monitorImpressList?: any;
  monitorClickList?: any;
  monitorBlackList?: any;
  extMonitor?: any;
  extMonitorInfo?: any;
  adSource?: any;
  adLocation?: any;
  adDispatchJson?: any;
  encodeId: string;
  program?: any;
  event?: any;
  video?: any;
  song?: any;
  scm: string;
  bannerBizType: string;
}

export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
}

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  iconImgUrl?: any;
  coverImgId: number;
  description: string;
  tags: any[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: any;
  subscribers: Subscriber[];
  subscribed: boolean;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  recommendText?: any;
  coverText: string[];
  relateResType: string;
  relateResId?: any;
  shareCount: number;
  coverImgId_str: string;
  alg: string;
  commentCount: number;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  picId: number;
  musicSize: number;
  followed: boolean;
  trans: string;
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  briefDesc: string;
  alias: any[];
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  picId: number;
  musicSize: number;
  followed: boolean;
  trans: string;
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  briefDesc: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface NewDisData {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  tags: string;
  copyrightId: number;
  artists: Artist[];
  artist: Artist;
  picId: number;
  company: string;
  status: number;
  pic: number;
  commentThreadId: string;
  publishTime: number;
  picUrl: string;
  briefDesc: string;
  companyId: number;
  blurPicUrl: string;
  subType: string;
  description: string;
  alias: any[];
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  areaId: number;
  exclusive: boolean;
  isSub: boolean;
}
export interface HomeType {
  banners: Banner[];
  type: string;
  playlists: Playlist[];
  area: String;
  NewDisData: NewDisData[];
}

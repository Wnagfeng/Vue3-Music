export interface ListItem {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks?: any;
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  coverText?: any;
  titleImageUrl?: any;
  coverImageUrl?: any;
  iconImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  tsSongCount: number;
  adType: number;
  trackNumberUpdateTime: number;
  cloudTrackCount: number;
  subscribedCount: number;
  highQuality: boolean;
  specialType: number;
  updateTime: number;
  anonimous: boolean;
  newImported: boolean;
  coverImgId: number;
  commentThreadId: string;
  totalDuration: number;
  trackCount: number;
  trackUpdateTime: number;
  coverImgUrl: string;
  privacy: number;
  playCount: number;
  createTime: number;
  ordered: boolean;
  description: string;
  status: number;
  tags: any[];
  userId: number;
  name: string;
  id: number;
  coverImgId_str: string;
  toplistType: string;
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
  avatarImgId_str: string;
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
  avatarImgId_str: string;
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface VideoInfo {
  moreThanOne: boolean;
  video?: any;
}

export interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia?: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq: Sq;
  hr: Hr;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  videoInfo: VideoInfo;
}

export interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  uid: number;
  rcmdReason: string;
  sc?: any;
  f?: any;
  sr?: any;
  ratio: number;
}

export interface RankingDatas {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: any[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  copied: boolean;
  relateResType?: any;
  subscribers: Subscriber[];
  subscribed: boolean;
  creator: Creator;
  tracks: Track[];
  videoIds?: any;
  videos?: any;
  trackIds: TrackId[];
  bannedTrackIds?: any;
  mvResourceInfos?: any;
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
  gradeStatus: string;
  score?: any;
  algTags?: any;
  trialMode: number;
  toplistType: string;
}
export interface TopListType {
  FeaturedLists: ListItem[];
  GlobalLists: ListItem[];
  RankingDatas: RankingDatas[];
}

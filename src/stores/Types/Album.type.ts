export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface CommentThread {
  id: string;
  resourceInfo?: any;
  resourceType: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  hotCount: number;
  latestLikedUsers?: any;
  resourceOwnerId: number;
  resourceTitle?: any;
  resourceId: number;
}

export interface Info {
  commentThread: CommentThread;
  latestLikedUsers?: any;
  liked: boolean;
  comments?: any;
  resourceType: number;
  resourceId: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  threadId: string;
}

export interface Ar {
  id: number;
  name: string;
}

export interface Al {
  id: number;
  name: string;
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface VideoInfo {
  moreThanOne: boolean;
  video?: any;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl?: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}

export interface Songs {
  rtUrls: any[];
  ar: Ar[];
  al: Al;
  st: number;
  noCopyrightRcmd?: any;
  songJumpInfo?: any;
  rtype: number;
  rurl?: any;
  pst: number;
  alia?: any[];
  pop: number;
  rt: string;
  mst: number;
  cp: number;
  crbt?: any;
  cf: string;
  dt: number;
  h: H;
  sq: Sq;
  hr?: any;
  l: L;
  rtUrl?: any;
  ftype: number;
  djId: number;
  no: number;
  fee: number;
  mv: number;
  t: number;
  v: number;
  cd: string;
  a?: any;
  m: M;
  name: string;
  id: number;
  videoInfo: VideoInfo;
  privilege: Privilege;
}
export interface Data {
  songs?: any[];
  paid?: boolean;
  onSale?: boolean;
  mark?: number;
  awardTags?: any;
  companyId?: number;
  blurPicUrl?: string;
  pic?: number;
  alias?: any[];
  artists?: Artist[];
  copyrightId?: number;
  picId?: number;
  artist?: Artist;
  publishTime?: number;
  company?: string;
  briefDesc?: any;
  picUrl?: string;
  commentThreadId?: string;
  description?: string;
  tags?: string;
  status?: number;
  subType?: string;
  name?: string;
  id?: number;
  type?: string;
  size?: number;
  picId_str?: string;
  info?: Info;
}
export interface AlbumData {
  Data: Data;
  Songs: [];
}

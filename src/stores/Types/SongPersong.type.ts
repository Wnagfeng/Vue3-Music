export interface SongPersongListData {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  showPrivateMsg?: any;
  isSubed?: any;
  accountId?: any;
  picId_str: string;
  img1v1Id_str: string;
  transNames?: any;
  followed: boolean;
  mvSize?: any;
  publishTime?: any;
  identifyTag?: any;
  alg?: any;
  fansCount: number;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: string[];
  picId: number;
  followed: boolean;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  publishTime: number;
  accountId: number;
  picId_str: string;
  img1v1Id_str: string;
  mvSize: number;
}

export interface Ar {
  id: number;
  name: string;
  alia: string[];
}

export interface Al {
  id: number;
  name: string;
  pic_str: string;
  pic: number;
  alia: string[];
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface H {
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

export interface Video {
  vid: string;
  type: number;
  title: string;
  playTime: number;
  coverUrl: string;
  publishTime: number;
  artists?: any;
}

export interface VideoInfo {
  moreThanOne: boolean;
  video: Video;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType: number;
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

export interface HotSong {
  rtUrls: any[];
  ar: Ar[];
  al: Al;
  st: number;
  noCopyrightRcmd?: any;
  songJumpInfo?: any;
  djId: number;
  no: number;
  fee: number;
  mv: number;
  t: number;
  v: number;
  cd: string;
  sq: Sq;
  rtype: number;
  rurl?: any;
  pst: number;
  alia?: any[];
  pop: number;
  rt?: any;
  mst: number;
  cp: number;
  crbt?: any;
  cf: string;
  dt: number;
  h: H;
  hr?: any;
  l: L;
  rtUrl?: any;
  ftype: number;
  a?: any;
  m: M;
  name: string;
  id: number;
  videoInfo: VideoInfo;
  privilege: Privilege;
}

export interface SongPersongDetaileSongListData {
  artist?: Artist;
  hotSongs?: HotSong[];
}
export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  musicSize: number;
  img1v1Url: string;
  albumSize: number;
  trans: string;
  picUrl: string;
  briefDesc: string;
  picId: number;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Mvdata {
  id: number;
  name: string;
  status: number;
  artist: Artist;
  imgurl: string;
  imgurl16v9: string;
  artistName: string;
  duration: number;
  playCount: number;
  publishTime: string;
  subed: boolean;
}
export interface SongPersongData {
  Type: string; //类型
  area: string; //类型
  initial: string; //热门排序
  SongPersonglimit: number;
  SongPersongoffset: number;
  SongPersongListData: SongPersongListData[];
  IsShowLoading: boolean;
  SongPersongDetaileSongListData: SongPersongDetaileSongListData;
  Mvdata: Mvdata[];
}

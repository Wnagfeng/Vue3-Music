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
  sr: number;
}

export interface M {
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

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Artist {
  id: number;
  name: string;
}

export interface AlbumMeta {
  id: number;
  name: string;
}

export interface OriginSongSimpleData {
  songId: number;
  name: string;
  artists: Artist[];
  albumMeta: AlbumMeta;
}

export interface PlaySong {
  name?: string;
  id?: number;
  pst?: number;
  t?: number;
  ar?: Ar[];
  alia?: any[];
  pop?: number;
  st?: number;
  rt?: string;
  fee?: number;
  v?: number;
  crbt?: any;
  cf?: string;
  al?: Al;
  dt?: number;
  h?: H;
  m?: M;
  l?: L;
  sq?: Sq;
  hr?: Hr;
  a?: any;
  cd?: string;
  no?: number;
  rtUrl?: any;
  ftype?: number;
  rtUrls?: any[];
  djId?: number;
  copyright?: number;
  s_id?: number;
  mark?: number;
  originCoverType?: number;
  originSongSimpleData?: OriginSongSimpleData;
  tagPicList?: any;
  resourceState?: boolean;
  version?: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single?: number;
  noCopyrightRcmd?: any;
  rtype?: number;
  rurl?: any;
  mst?: number;
  cp?: number;
  mv?: number;
  publishTime?: number;
}
export interface LyricData {
  time: number;
  content: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Album {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  blurPicUrl: string;
  alias: any[];
  artists: Artist[];
  copyrightId: number;
  picId: number;
  artist: Artist;
  pic: number;
  publishTime: number;
  company: string;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  companyId: number;
  description: string;
  status: number;
  subType: string;
  tags: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}

export interface HMusic {
  volumeDelta: number;
  sr: number;
  playTime: number;
  bitrate: number;
  dfsId: number;
  name: string;
  id: number;
  size: number;
  extension: string;
}

export interface MMusic {
  volumeDelta: number;
  sr: number;
  playTime: number;
  bitrate: number;
  dfsId: number;
  name: string;
  id: number;
  size: number;
  extension: string;
}

export interface LMusic {
  volumeDelta: number;
  sr: number;
  playTime: number;
  bitrate: number;
  dfsId: number;
  name: string;
  id: number;
  size: number;
  extension: string;
}

export interface BMusic {
  volumeDelta: number;
  sr: number;
  playTime: number;
  bitrate: number;
  dfsId: number;
  name: string;
  id: number;
  size: number;
  extension: string;
}

export interface SqMusic {
  volumeDelta: number;
  sr: number;
  playTime: number;
  bitrate: number;
  dfsId: number;
  name: string;
  id: number;
  size: number;
  extension: string;
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
  starred: boolean;
  popularity: number;
  starredNum: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  mp3Url: string;
  rtUrls?: any;
  mark: number;
  noCopyrightRcmd?: any;
  originCoverType: number;
  originSongSimpleData?: any;
  songJumpInfo?: any;
  alias: any[];
  artists: Artist[];
  copyrightId: number;
  album: Album;
  score: number;
  hMusic: HMusic;
  mMusic: MMusic;
  lMusic: LMusic;
  audition?: any;
  copyFrom: string;
  ringtone: string;
  disc: string;
  no: number;
  fee: number;
  commentThreadId: string;
  mvid: number;
  rtype: number;
  rurl?: any;
  crbt?: any;
  rtUrl?: any;
  ftype: number;
  bMusic: BMusic;
  sqMusic: SqMusic;
  hrMusic?: any;
  duration: number;
  position: number;
  status: number;
  name: string;
  id: number;
  videoInfo: VideoInfo;
  recommendReason: string;
  privilege: Privilege;
  alg: string;
}

export interface Creator {
  extProperties?: any;
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
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  xInfo?: any;
}

export interface ExtProperty {
  coverImgId_str: string;
}

export interface XInfo {
  coverImgId_str: string;
}

export interface playlists {
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
  coverImgId: number;
  description: string;
  tags: string[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: any;
  subscribers: any[];
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
  coverText?: any;
  relateResType?: any;
  relateResId?: any;
  extProperties: ExtProperty;
  recommendReason: string;
  xInfo: XInfo;
  iconImgUrl?: any;
  tsSongCount: number;
  alg: string;
}
export interface Artist {
  id: number;
  name: string;
  alias: string[];
  transNames?: any;
}

export interface mvs {
  id: number;
  cover: string;
  name: string;
  playCount: number;
  briefDesc?: any;
  desc?: any;
  artistName: string;
  artistId: number;
  duration: number;
  mark: number;
  artists: Artist[];
  alg: string;
}
export interface PlaySongData {
  ids: string;
  Songdata: PlaySong;
  LyricData: LyricData[];
  Songs: Songs[];
  playlists: playlists[];
  mvs: mvs[];
  IsPlayState: boolean;
  PlayModel: number;
  CurrentPlaySong: PlaySong;
  CurrentPlaySongList: PlaySong[];
  CurrentPlaySongProgress: number;
  AuDioSrc: string;
  CurrentTime: number;
}

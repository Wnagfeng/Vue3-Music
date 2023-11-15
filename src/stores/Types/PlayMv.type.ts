export interface Mp {
  id: number;
  fee: number;
  mvFee: number;
  payed: number;
  pl: number;
  dl: number;
  cp: number;
  sid: number;
  st: number;
  normal: boolean;
  unauthorized: boolean;
  msg?: any;
}

export interface Br {
  size: number;
  br: number;
  point: number;
}

export interface Artist {
  id: number;
  name: string;
  img1v1Url: string;
  followed: boolean;
}

export interface Data {
  id?: number;
  name?: string;
  artistId?: number;
  artistName?: string;
  briefDesc?: string;
  desc?: string;
  cover?: string;
  coverId_str?: string;
  coverId?: number;
  playCount?: number;
  subCount?: number;
  shareCount?: number;
  commentCount?: number;
  duration?: number;
  nType?: number;
  publishTime?: string;
  price?: any;
  brs?: Br[];
  artists?: Artist[];
  commentThreadId?: string;
  videoGroup?: any[];
}

export interface MvInfo {
  data?: Data;
}
export interface PlayMvData {
  MvInfo: Data;
  MvUrl: string;
}

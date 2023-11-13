export interface Artist {
  id: number;
  name: string;
  alias: any[];
  transNames?: any;
}

export interface MvListdata {
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
  subed: boolean;
  artists: Artist[];
}

export interface MvData {
  area: string;
  type: string;
  order: string;
  MVlimit: number;
  MVoffset: number;
  Mvdata: MvListdata[];
}

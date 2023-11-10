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
export interface SongPersongData {
  Type: string; //类型
  area: string; //类型
  initial: string; //热门排序
  SongPersonglimit: number;
  SongPersongoffset: number;
  SongPersongListData: SongPersongListData[];
  IsShowLoading: boolean;
}

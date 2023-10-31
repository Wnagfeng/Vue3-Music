export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  trans: string;
  followed: boolean;
  picId: number;
  briefDesc: string;
  musicSize: number;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: string[];
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  trans: string;
  followed: boolean;
  picId: number;
  briefDesc: string;
  musicSize: number;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}

export interface NewDisDataType {
  Itemdata: {
    songs: any[];
    paid: boolean;
    onSale: boolean;
    tags: string;
    status: number;
    artists: Artist[];
    alias: any[];
    publishTime: number;
    picUrl: string;
    picId: number;
    artist: Artist;
    briefDesc: string;
    commentThreadId: string;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    subType: string;
    description: string;
    copyrightId: number;
    company: string;
    name: string;
    id: number;
    type: string;
    size: number;
    picId_str: string;
    areaId: number;
    exclusive: boolean;
    isSub: boolean;
  };
}

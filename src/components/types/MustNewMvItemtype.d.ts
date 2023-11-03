export interface Artist {
  id: number;
  name: string;
  alias: string[];
  transNames: string[];
}

export interface MustNewMvItem {
  Itemdata: {
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
  };
}

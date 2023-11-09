export interface Expert {}

export interface Profile {
  backgroundImgIdStr: string;
  followed: boolean;
  backgroundUrl: string;
  userType: number;
  vipType: number;
  authStatus: number;
  djStatus: number;
  detailDescription: string;
  experts: Expert;
  expertTags?: any;
  accountStatus: number;
  nickname: string;
  birthday: number;
  gender: number;
  province: number;
  city: number;
  avatarImgId: number;
  backgroundImgId: number;
  avatarUrl: string;
  avatarImgIdStr: string;
  defaultAvatar: boolean;
  mutual: boolean;
  remarkName?: any;
  description: string;
  userId: number;
  signature: string;
  authority: number;
  followeds: number;
  follows: number;
  eventCount: number;
  avatarDetail?: any;
  playlistCount: number;
  playlistBeSubscribedCount: number;
}

export interface LoginDataType {
  isShowLoginState: boolean;
  isLoadingSuccess: boolean;
  Profile: Profile | {};
  UserName: string;
  UserCover: string;
}

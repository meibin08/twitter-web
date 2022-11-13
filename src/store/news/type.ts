import { UserInfoType } from '../user/type';
export interface ListOptions {
  content?: string;
  id: string;
  date: string;
  evaluateNum?: number;
  shareNum?: number;
  retweetNum?: number;
  likeNum?: number;
  summary?: string;
  user?: UserInfoType;
}

export interface UserTweetsType {
  [key: string]: ListOptions[];
}

export interface NewsState {
  list: ListOptions[];
  userTweets: UserTweetsType;
  newDetail: ListOptions;
}

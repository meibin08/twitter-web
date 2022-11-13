import { combineReducers } from 'redux';
import { FollowsState } from './follows/type';
import FollowsReducer from './follows/index';
import { UsersState } from './user/type';
import UsersReducer from './user/index';

import { NewsState } from './news/type';
import NewsReducer from './news/index';

export interface ApplicationState {
  users: UsersState;
  follows: FollowsState;
  news: NewsState;
}

export const rootReducers = combineReducers<ApplicationState>({
  users: UsersReducer,
  follows: FollowsReducer,
  news: NewsReducer,
});

export interface ListOptions {
  name: string;
  desc?: string;
  id: string;
  avatar: string;
}

export interface FollowsState {
  list: ListOptions[];
}

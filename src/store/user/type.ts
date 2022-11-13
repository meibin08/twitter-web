export interface UserInfoType {
  email?: string;
  loginName: string;
  mobile?: string;
  avatar?: string;
  password?: string;
  id: string;
}
export interface LoginFormData {
  loginName: string;
  password: string;
  rememberMe?: boolean;
}

export interface GlobalConfigState {
  theme: string;
}

export interface UsersState {
  userInfo: UserInfoType;
  globalConfig: GlobalConfigState;
  usesList: UserInfoType[];
  loginModalVisible: boolean;
}

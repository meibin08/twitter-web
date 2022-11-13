import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState, UserInfoType } from './type';
import cookie from '@/utils/cookie';
import { uuid } from '@/utils/tools';
import { avatarUrl } from '@/utils/staticData';

const initialState: UsersState = {
  userInfo: {
    email: '',
    loginName: '',
    mobile: '',
    avatar: avatarUrl,
    id: '',
  },
  usesList: [],
  loginModalVisible: false,
  globalConfig: {
    theme: 'normal',
  },
};

export const UserSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.loginModalVisible = action.payload;
    },
    createUser: (state, action: PayloadAction<UserInfoType & { autoRegister?: boolean }>) => {
      const data = action.payload || {};
      const { loginName = '', autoRegister = false, ...other } = data;
      if (autoRegister) {
        const userId = uuid().replace(/\-/g, '');
        state.userInfo = {
          id: userId,
          loginName,
          email: '',
          avatar: avatarUrl,
        };
        state.usesList = state.usesList.concat({ ...state.userInfo, ...other });
      } else {
        state.userInfo = state.usesList.find((k) => k.loginName === loginName) || data;
      }
      cookie.set('loginName', loginName);
      cookie.set('token', uuid());
    },
    userLogout: (state, action?: PayloadAction<string>) => {
      state.userInfo = {
        id: '',
        loginName: '',
        email: '',
      };
      cookie.remove('loginName');
      cookie.remove('token');
      cookie.remove('userId');
    },
  },
});
export const { setLoginModal, createUser, userLogout } = UserSlice.actions;
export const { actions } = UserSlice;
export default UserSlice.reducer;

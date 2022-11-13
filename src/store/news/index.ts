import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, ListOptions, UserTweetsType } from './type';
import { uuid } from '@/utils/tools';
import format from '@/utils/format';
import getRandomData, { getRandomStr } from '@/utils/mockData';

const initialState: NewsState = {
  newDetail: {
    content: getRandomStr(100),
    summary: '',
    id: '',
    date: '',
    user: {
      id: '',
      loginName: '',
      email: '',
      avatar: '',
    },
    evaluateNum: 0,
    shareNum: 0,
    retweetNum: 0,
    likeNum: 0,
  },
  list: [
    {
      content: getRandomStr(100),
      summary: '互联网（英语：Internet）是指20世纪末期兴起电脑网路与电脑网路之间所串连成的庞大网路系统。这些网路以一些标准的网路协议相连。它是由从地方到全球范围内几百万个 ...',
      id: 'ba07065f-2bb0-4129-9fc1-92cea2efddb5',
      date: '11-09 08:19',
      user: {
        id: 'eb0a6ba880d349ac9cd431640986f207',
        loginName: '互联网',
        email: '',
        avatar: '',
      },
      evaluateNum: 645,
      shareNum: 96,
      retweetNum: 124,
      likeNum: 90,
    },
    {
      content: getRandomStr(100),
      summary: '刚好这学期学了自然辩证法，这是我这学期收获最大最长见识的课啦！ 说正题，首先，科技包括科学和技术，两者有关联但又不一样。 先说科学，上课件.',
      id: 'ba07065f-20b0-4129-9fc1-92cea2efcdb5',
      date: '11-07 15:39',
      user: {
        id: 'd7',
        loginName: 'Taylor Swift',
        email: '',
        avatar: '',
      },
      evaluateNum: 15,
      shareNum: 56,
      retweetNum: 134,
      likeNum: 9,
    },
    {
      content: getRandomStr(100),
      summary: '社会上习惯于把科学和技术连在一起，统称为科学技术，简称科技。科学要解决的问题，是发现自然界中确凿的事实与现象之间的关系，并建立理论把事实与 ...',
      id: 'ba07065f-2bb0-4129-9fc1-92c9a2efcdb5',
      date: '11-06 05:49',
      user: {
        id: 'eb0a6b80ssd349ac9c7431640906f207',
        loginName: '泪雪网',
        email: '',
        avatar: '',
      },
      evaluateNum: 15,
      shareNum: 68,
      retweetNum: 4,
      likeNum: 12,
    },
    {
      content: getRandomStr(100),
      summary: '科技-腾讯网腾讯网从2003年创立至今，已经成为集新闻信息，区域垂直生活服务、社会化媒体资讯和产品为一体的互联网媒体平台。腾讯网下设新闻、科技、财经、娱乐、体育、汽车、时尚 ...',
      id: 'ba07060f-2bb0-4129-9fc1-92cea2esrdb5',
      date: '11-05 06:39',
      user: {
        id: 'eb0a6ba880d3409c9c7431640986f207',
        loginName: '科技-腾讯网',
        email: '',
        avatar: '',
      },
      evaluateNum: 65,
      shareNum: 55,
      retweetNum: 24,
      likeNum: 8,
    },
    {
      content: getRandomStr(100),
      summary: '在最常見的意義上，思想和思維是指可以獨立於感官刺激而發生的有意識的認知過程。它們最典型的形式是判斷、推理、概念形成、問題解決和審議（英語：deliberation',
      id: 'ba07065f-2bb0-4129-9fc1-92cea2efcdj5',
      date: '11-04 11:39',
      user: {
        id: 'eb0a6ba880d349ac9c7431648986f207',
        loginName: 'Taylor Swift',
        email: '',
        avatar: '',
      },
      evaluateNum: 65,
      shareNum: 96,
      retweetNum: 34,
      likeNum: 9,
    },
    {
      content: getRandomStr(100),
      summary: '全面、及时的新闻报道，Google 新闻为您汇集来自世界各地的新闻来源。 ... COVID-19 相关新闻：查看新型冠状病毒(COVID-19) 的最新报道. 艾瑞网 ...',
      id: 'ba07065f-4bb0-4129-9fc1-92cea2efcab5',
      date: '11-03 15:39',
      user: {
        id: 'eb0a6bj880d349ac9c7431640986f277',
        loginName: 'Google 新闻',
        email: '',
        avatar: '',
      },
      evaluateNum: 45,
      shareNum: 76,
      retweetNum: 314,
      likeNum: 90,
    },
    {
      content: getRandomStr(100),
      summary: '美国资深媒体人魏碧洲认为，这得益于民主党的竞选策略，即刻意将特朗普的支持者与其他选民对立起来，而共和党一味批评执政 ...t',
      id: 'ba07065f-2bb0-4129-9fc1-92cea2efcds5',
      date: '11-02 05:39',
      user: {
        id: 'eb0a6ga880d349ac9c7431640986f217',
        loginName: '美国之音中文网',
        email: '',
        avatar: '',
      },
      evaluateNum: 75,
      shareNum: 99,
      retweetNum: 36,
      likeNum: 19,
    },
    {
      content: getRandomStr(100),
      summary: '新浪网新闻中心是新浪网最重要的频道之一，24小时滚动报道国内、国际及社会新闻。每日编发新闻数以万计',
      id: 'sa07065f-2bb0-4129-9fc1-92cea2efcdb5',
      date: '11-01 12:39',
      user: {
        id: 'eb0a6ba880d349ac9c7431640986f307',
        loginName: '新浪网',
        email: '',
        avatar: '',
      },
      evaluateNum: 65,
      shareNum: 96,
      retweetNum: 34,
      likeNum: 9,
    },
  ],
  userTweets: {},
};

const pushUserTweet = (userTweets: UserTweetsType, singleData: ListOptions) => {
  const { user: { id: userId = '' } = {} } = singleData;
  if (userId && userId in userTweets) {
    const currentList = userTweets[userId];
    userTweets[userId] = [singleData, ...currentList];
    return userTweets;
  }
  userTweets[userId] = [singleData];
  return userTweets;
};
const deleteUserTweet = (userTweets: UserTweetsType, singleData: ListOptions) => {
  const { id, user: { id: userId = '' } = {} } = singleData;
  const currentList = userTweets[userId] || [];
  userTweets[userId] = currentList.filter((k) => k.id !== id);
  return userTweets;
};

export const NewwSlice = createSlice({
  name: 'newsReducer',
  initialState,
  reducers: {
    pushNews: (state, action: PayloadAction<ListOptions>) => {
      const data = action.payload || {};
      const singleData = {
        ...data,
        summary: data.content?.substring(0, 60),
        date: format.date(new Date(), 'MM-dd hh:mm'),
        id: uuid(),
        evaluateNum: Math.floor(Math.random() * 150),
        shareNum: Math.floor(Math.random() * 120),
        retweetNum: Math.floor(Math.random() * 130),
        likeNum: Math.floor(Math.random() * 140),
      };
      state.list = [singleData, ...state.list];
      state.userTweets = pushUserTweet(state.userTweets, singleData);
    },
    deleteNews: (state, action: PayloadAction<ListOptions>) => {
      const { id } = action.payload || {};
      state.list = state.list.filter((k) => k.id !== id);
      state.userTweets = deleteUserTweet(state.userTweets, action.payload);
    },
    createMockNewData: (state, action: PayloadAction<number>) => {
      const dataNum = action.payload || 5;
      const data = Array.from({ length: dataNum }).map(() => getRandomData());
      state.list = [...state.list, ...data];
    },
    getNewDataDetail: (state, action: PayloadAction<string>) => {
      state.newDetail = state.list.find((k) => k.id === action.payload) || { id: '', date: '' };
    },
  },
});
export const { pushNews, deleteNews, createMockNewData, getNewDataDetail } = NewwSlice.actions;
export const { actions } = NewwSlice;
export default NewwSlice.reducer;

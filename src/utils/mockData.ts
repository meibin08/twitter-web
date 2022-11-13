import { uuid } from '@/utils/tools';
import format from '@/utils/format';
import { avatarUrl, mockText } from '@/utils/staticData';

export const getRandomStr = (len = 4, filterPunctuation = false): string => {
  const start: number = Math.floor(Math.random() * (mockText.length / 2));
  const end: number = start + len;
  const result = mockText.substring(start, end);
  return filterPunctuation ? result.replace(/[\ |~|`|!|@|#|$|%|\^|&|*|(|)|-|_|+|=|\||\\|\[|]|{|}|;|:|"|'|,|，|。|？|\<|\.|\>|\/|\?]/g, '') : result;
};
const getRandomData = () => {
  const userId = uuid().replace(/\-/g, '');
  return {
    content: getRandomStr(Math.floor(Math.random() * 280)),
    summary: getRandomStr(Math.floor(Math.random() * 90)),
    user: {
      id: userId,
      loginName: getRandomStr(4, true),
      email: '',
      avatar: avatarUrl,
    },
    date: format.date(new Date(), 'MM-dd hh:mm'),
    id: uuid(),
    evaluateNum: Math.floor(Math.random() * 150),
    shareNum: Math.floor(Math.random() * 120),
    retweetNum: Math.floor(Math.random() * 130),
    likeNum: Math.floor(Math.random() * 140),
  };
};
export const getExploreData = () => {
  return {
    content: getRandomStr(Math.floor(Math.random() * 300)),
    summary: getRandomStr(Math.floor(Math.random() * 90)),
    name: getRandomStr(4, true),
    date: format.date(new Date(), 'MM-dd hh:mm'),
    id: uuid(),
    thumbnail: 'https://pbs.twimg.com/media/FgjPtZnXgAMbPmU?format=jpg&name=360x360',
  };
};

export default getRandomData;

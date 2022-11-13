import React from 'react';
import { Spin } from 'antd';
import { useThrottleEffect, useSetState, useScroll } from 'ahooks';
import { createMockNewData } from '@/store/news';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clsPrefix } from '@/utils/tools';
import { SingleTwitter, PageHeaderBar, SendTwitter } from '@/components/common';

import './home.scss';

const prefixCls = 'home-page';
const clsName = clsPrefix(prefixCls);

function getLoadMoreList(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
let prevScrollTop = 0;
const HomePage = () => {
  const postion = useScroll(document);
  const [state, setState] = useSetState({
    isNoMore: false,
    loading: 0,
    start: 0,
    list: [],
    nextId: '',
    maxPageNum: 6,
  });

  const dispatch = useAppDispatch();
  const newList = useAppSelector((states) => {
    const {
      news: { list },
    } = states;
    return list || [];
  });
  useThrottleEffect(
    () => {
      let { scrollHeight = 0, scrollTop = 0, offsetHeight = 0 } = document.documentElement;
      const direction: string = prevScrollTop <= scrollTop ? 'down' : 'up';
      if (state.isNoMore) return;
      if (scrollHeight - scrollTop - offsetHeight <= 200 && direction === 'down' && !state.loading) {
        setState({
          loading: 1,
        });
        console.log('一时半会了?');
        getLoadMoreList().then((data) => {
          if (data) {
            dispatch(createMockNewData(5));
            const nextNum = state.maxPageNum - 1;
            setState({
              loading: 0,
              isNoMore: nextNum > 0 ? false : true,
              maxPageNum: nextNum,
            });
          }
        });
      }
      prevScrollTop = scrollTop;
    },
    [postion],
    {
      wait: 1000,
    },
  );
  return (
    <div className={prefixCls}>
      <PageHeaderBar hasBack={false} title="主页" />
      <SendTwitter />
      <div className={clsName('body')}>
        {newList.map((item) => {
          return <SingleTwitter key={item.id} data={item} />;
        })}
      </div>
      <div className={clsName('loadingbar')}>
        {!state.isNoMore && !!state.loading && <Spin tip="加载中……" size="large" />}
        {!!state.isNoMore && <span>——别拉了，已经到底了——</span>}
      </div>
    </div>
  );
};

export default HomePage;

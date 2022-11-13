import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { clsPrefix } from '@/utils/tools';
import CustomIcon from '@/components/common/icon';
import ModalSendTwitter from '@/components/common/sendTwitter/modalSendTwitter';
import { notLoginMenusList, menusList } from '@/utils/staticData';
import { useAppSelector } from '@/store/hooks';

import './sidebar.scss';
const prefixCls = 'sidebar-component';
const clsName = clsPrefix(prefixCls);

const SidebarComponent = () => {
  const { isLogin } = useAppSelector((states) => {
    const {
      users: { userInfo: { loginName = '' } = {} },
    } = states;
    return { isLogin: !!loginName, loginName };
  });
  const list = isLogin ? menusList : notLoginMenusList;
  return (
    <div className={prefixCls}>
      <h1 className={clsName('logo')}>
        <Link to="/explore">
          <CustomIcon className="logo-icon" type="twitter" />
        </Link>
      </h1>
      <nav className={clsName('menus')}>
        {list.map((k: any) => {
          const url = `${k.url}?msg=${k.title}`;
          return (
            <NavLink className={clsName('menus-row')} to={url} key={k.icon}>
              <p className="submenu">
                <CustomIcon className="menu-icon" type={k.icon} />
                {k.title}
              </p>
            </NavLink>
          );
        })}
      </nav>
      {isLogin && <ModalSendTwitter />}
    </div>
  );
};

export default SidebarComponent;

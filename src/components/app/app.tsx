import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarComponent from './sidebar';
import AuxiliaryComponent from './auxiliary';

const Index = () => {
  return (
    <div className="app-container">
      <SidebarComponent />
      <main className="app-main">
        <Outlet />
      </main>
      <AuxiliaryComponent />
    </div>
  );
};

export default Index;

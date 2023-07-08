import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Link to="/"> Home</Link>
        <Link to="/movies"> Movies</Link>
      </Header>
      <Outlet />
    </div>
  );
};

export default Layout;

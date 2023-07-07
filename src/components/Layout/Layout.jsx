import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/movies"> Movies</NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

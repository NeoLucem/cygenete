import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import Home from './home';

function Layout() {
    let auth = {'token':false};
  return (
    auth.token ? <Outlet/> : <Navigate to={<Home/>}/>
  );
}

export default Layout
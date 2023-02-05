import React from 'react'
import '../index.css'
import { Outlet } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <h1 className="NotFound">NotFound</h1>
      <Outlet />
    </>
  );
}

export default NotFound

import React from "react";
import './mainPage.pages.scss';
import { Outlet } from 'react-router-dom';
import { Menu } from "../../components/menu/menu.componenst";

export const MainPage = () => {
  return (
    <div className="mainContainer">
      <Menu />
      <div className="mainContainer__content">
        <Outlet />
        {/* здесь будут храниться компоненты всех разделов */}
      </div>
    </div>
  )
}

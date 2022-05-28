import React from "react";
import './menu.componenst.scss';
import { NavLink } from 'react-router-dom';
import { MenuItem } from "./menuItems/menuItem.components";

export const Menu = () => {
  return (
    <div className="menuContainer">
      <NavLink className={({ isActive }) => isActive ? 'menuContainer__link item_active' : 'menuContainer__link'} to='/profile'>
        <MenuItem name={'Profile'} active={false} />
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? 'menuContainer__link item_active' : 'menuContainer__link'} to='/home'>
        <MenuItem name={'Home'} active={true} />
      </NavLink>
      <MenuItem name={'My Dictionary'} active={false} />
      <MenuItem name={'Collections'} active={false} />
    </div>
  )
}

import './menu.components.scss';
import { NavLink } from 'react-router-dom';
import { MenuItem } from "./menuItems/menuItem.components";

export const Menu = (): JSX.Element => {
  return (
    <div className="menuContainer">
      <NavLink
        className={
          ({ isActive }) =>
            isActive ? 'menuContainer__link item_active' : 'menuContainer__link'
        }
        to='/profile'
      >
        <MenuItem name={'Profile'} />
      </NavLink>
      <NavLink
        className={
          ({ isActive }) =>
            isActive ? 'menuContainer__link item_active' : 'menuContainer__link'
        }
        to='/home'
      >
        <MenuItem name={'Home'} />
      </NavLink>
      <MenuItem name={'My Dictionary'} />
      <MenuItem name={'Collections'} />
    </div>
  )
}

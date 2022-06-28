import './menuItem.components.scss';
import { ProfileIcon } from '../../../images/menu/profileIcon';
import { HomeIcon } from '../../../images/menu/homeIcon';
import { MyDictionaryIcon } from '../../../images/menu/dictionaryIcon';
import { CollectionsIcon } from '../../../images/menu/collectionsIcon';

interface Props {
  name: string,
};

export const MenuItem = (props: Props) => {
  return (
    <div className='item'>
      <div className='item__iconContainer'>
        {props.name === 'Profile' ?
          <ProfileIcon className='item__icon' />
          :
          props.name === 'Home' ?
            <HomeIcon className='item__icon' />
            :
            props.name === 'My Dictionary' ?
              <MyDictionaryIcon className='item__icon' />
              :
              props.name === 'Collections' ?
                <CollectionsIcon className='item__icon item__icon_clllections' />
                :
                null
        }
      </div>
      <span className='item__title'>{props.name}</span>
    </div>
  )
}

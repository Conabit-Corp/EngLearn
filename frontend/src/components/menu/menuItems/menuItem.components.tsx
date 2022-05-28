import React from 'react';
import './menuItem.components.scss';
// import { ReactComponent as ProfileIcon } from '../../../images/menu/profileIcon.svg';
// import { ReactComponent as HomeIcon } from '../../../images/menu/homeIcon.svg';
// import { ReactComponent as MyDictionaryIcon } from '../../../images/menu/dictionaryIcon.svg';
// import { ReactComponent as CollectionsIcon } from '../../../images/menu/collectionsIcon.svg';

export const MenuItem = ({ name, active }: { name: string, active: boolean }) => {
  return (
    <div className='item'>
      <div className='item__iconContainer'>
        {name === 'Profile' ?
          // <ProfileIcon className='item_icon' />
          'P'
          :
          name === 'Home' ?
            // <HomeIcon className='item_icon' />
            'H'
            :
            name === 'My Dictionary' ?
              // <MyDictionaryIcon className='item_icon' />
              'MD'
              :
              name === 'Collections' ?
                // <CollectionsIcon className='item_icon' />
                'C'
                :
                null
        }
      </div>
      <span className='item__title'>{name}</span>
    </div>
  )
}

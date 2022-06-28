import './menuItem.components.scss';
import { ProfileIcon } from '../../../images/menu/profileIcon';
import { HomeIcon } from '../../../images/menu/homeIcon';
// import { ReactComponent as MyDictionaryIcon } from '../../../images/menu/dictionaryIcon.svg';
// import { ReactComponent as CollectionsIcon } from '../../../images/menu/collectionsIcon.svg';

interface Props {
  name: string,
};

export const MenuItem = (props: Props) => {
  return (
    <div className='item'>
      <div className='item__iconContainer'>
        {props.name === 'Profile' ?
          <ProfileIcon className='item_icon' />
          :
          props.name === 'Home' ?
            <HomeIcon className='item_icon' />
            :
            props.name === 'My Dictionary' ?
              // <MyDictionaryIcon className='item_icon' />
              'MD'
              :
              props.name === 'Collections' ?
                // <CollectionsIcon className='item_icon' />
                'C'
                :
                null
        }
      </div>
      <span className='item__title'>{props.name}</span>
    </div>
  )
}

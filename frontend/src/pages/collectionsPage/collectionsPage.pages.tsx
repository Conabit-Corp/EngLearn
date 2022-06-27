import { ColletionItem } from '../../components/collections/collectionItem.components'
import {getWordsCollections} from '../../apiGRPC/collectionService'
import { useState, useEffect } from 'react'
import './collectionsPage.pages.scss'

export const CollectionsPage = (): JSX.Element => {
  const [collections, setCollections] = useState({});
  
  useEffect(()=>{
    getWordsCollections(setCollections);
  },[])
  
  console.log(collections)
  return (
    <div className="collectionsContainer">
     <div className='collectionsList'>
      <ColletionItem />
      <ColletionItem />
      <ColletionItem />
      <ColletionItem />
      <ColletionItem />
      <ColletionItem />
      <ColletionItem />
    </div>  
    </div>
  )
}

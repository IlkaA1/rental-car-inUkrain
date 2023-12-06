
// import { BtnFavorite} from './FavoriteIcon.styled';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { ReactComponent as IconHeart } from '../../images/normal.svg';
// import {addFavoritItems,deleteFavoritItems} from '../../redux/favoriteSlice'


// export default function FavoriteIcon({ data }) {
//   const [favorite, setFavorite] = useState(false);
//   const dispatch = useDispatch();




//   const handelFavorite = () => {
//  favorite? setFavorite(false): setFavorite(true);
//  favorite?  dispatch(deleteFavoritItems(data.id)):dispatch(addFavoritItems(data)) ;
//   }

//   return (
//   <>
//   <BtnFavorite onClick={handelFavorite} isFavorite={favorite}><IconHeart/></BtnFavorite>
//   </>
//   );
// }

// FavoriteIcon.jsx

import { BtnFavorite } from './FavoriteIcon.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconHeart } from '../../images/normal.svg';
import { addFavoriteItem, deleteFavoriteItem } from '../../redux/favoriteSlice';

export default function FavoriteIcon({ data }) {
  
  const isFavorite = useSelector(state => state.favorite.some(item => item.id === data.id));
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteItem(data));
    } else {
      dispatch(addFavoriteItem(data));
    }
  };

  return (
    <BtnFavorite onClick={handleFavorite} isFavorite={isFavorite}>
      <IconHeart />
    </BtnFavorite>
  );
}

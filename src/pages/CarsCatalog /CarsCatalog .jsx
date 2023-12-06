 import {PagesContainer} from '../../components/App.styled'
 import React, { useState } from 'react';
 import{Filter} from '../../components/Filter/Filter'
 import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { fetchTasks} from '../../redux/operations';
 import { getAll,selectVisibleAuto } from '../../redux/selectors';
 import { filterSerchName,filterMaxMails,filterMinMails,filterPrice} from '../../redux/filterSlice';
import CardItem from '../../components/CardItem/CardItem'
import {Wrapper,WrapperButton,Button,TextButtun,SearchButton,FilterDiv,NotFound} from './CarsCatalog.styled'

 



export const CarsCatalog = () => {
const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const items = useSelector(getAll);
  const dispatch = useDispatch();
 
 const mark =  useSelector(selectVisibleAuto);


console.log(items)
  useEffect(()=>{
    if(!items){return}
    setCars(items)
    dispatch(filterSerchName(''));
    dispatch(filterPrice(''));
    dispatch(filterMinMails(''));
    dispatch(filterMaxMails(''));
   },[items,dispatch])
  
   useEffect(() => {
    dispatch(fetchTasks(page));
  }, [dispatch,page]);



  const loadMore = () => {
    setPage(page + 1);
  };


const handelClick = () => {
  setCars(mark)
 console.log(mark) ;
}
  
    return <>
    <PagesContainer>
    <FilterDiv><Filter/><SearchButton onClick={handelClick}>Search</SearchButton></FilterDiv>
   {items&&(
      <> <Wrapper>
        {cars.length > 0? (cars.map(item => <CardItem data={item} key={item.id} ></CardItem>)):
        (<NotFound><p>Sorry, but nothing was found for your search!</p>
          <p>Try changing the settings🤔</p></NotFound>)}
      </Wrapper>
      <WrapperButton>
          {cars.length >= 12 && (
            <Button type="button" onClick={loadMore}>
              <TextButtun>Load more</TextButtun>
            </Button>
          )}
        </WrapperButton>
        </> 
   )}

</PagesContainer>
    </>
}



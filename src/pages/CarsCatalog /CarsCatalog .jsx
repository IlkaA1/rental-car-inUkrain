//  import {PagesContainer} from '../../components/App.styled'
 import React, { useState } from 'react';
 import{Filter} from '../../components/Filter/Filter'
 import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { fetchTasks} from '../../redux/operations';
 import { getAll,selectVisibleAuto,gettAllCars,selectStatusFilter } from '../../redux/selectors';

import CardItem from '../../components/CardItem/CardItem'
import {Wrapper,WrapperButton,Button,TextButtun,SearchButton,FilterDiv} from './CarsCatalog.styled'

 



export const CarsCatalog = () => {
  
  const [page, setPage] = useState(1);
  // const [cars, setCars] = useState([]);

  const dispatch = useDispatch();
  const {items} = useSelector(getAll);
  


  useEffect(()=>{
    if(!items){return}
   
   },[items])
  
   useEffect(() => {
     
    dispatch(fetchTasks(page));
  }, [dispatch,page]);

  const loadMore = () => {
    setPage(page + 1);
  };




  
 
  
  // const filterQwery = useSelector(selectStatusFilter);
  
 
  // const selectVisibleAutoFunk = () =>{


  // const {serchName, maxMails, minMails, price} = filterQwery
  
  
  // const qwery = serchName.toLowerCase().toString();
  // const maxMileg = Number(maxMails);
  // const minMileg = Number(minMails);
  // const carPrice = Number(price)

  // const filter1 = cars.filter(car => car.make.toLowerCase().includes(qwery) );
  // console.log('filter1', filter1)

  
  // const filter2 = filter1.filter(car =>  {
  // const price = car.rentalPrice
  // return parseFloat(price.replace("$", "")) <= carPrice
  // }) 
  // console.log('filter2', filter2)


  
  // const filter3 = filter2.filter(car => car.mileage >= minMileg);
  // console.log('filter3', filter3)


  
  // const filter4 = filter3.filter(car => car.mileage <= maxMileg);
  // console.log('filter4', filter4)
  


  // console.log(filter4)
  // // return filter4;
  
  // }

const cars = useSelector(gettAllCars);

useEffect(() => {
  if(!cars.items){return}
  
}, [dispatch,cars]);

const handelClick = () => {
 console.log(dispatch(selectVisibleAuto)) ;
}
  


  
// onClick={handelClick}
    return <>
    {/* <PagesContainer> */}
    <FilterDiv><Filter/><SearchButton onClick={handelClick}  >Search</SearchButton></FilterDiv>
   {items&&(
      <> <Wrapper>
        {items&&items.map(item => <CardItem data={item} key={item.id} ></CardItem>)}
      </Wrapper>
      <WrapperButton>
          {items&&items.length >= 12 && (
            <Button type="button" onClick={loadMore}>
              <TextButtun>Load more</TextButtun>
            </Button>
          )}
        </WrapperButton>
        </> 
   )}

{/*  
    </PagesContainer> */}
    </>
}



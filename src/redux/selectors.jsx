import { createSelector } from '@reduxjs/toolkit';



export const getAll = state => state.catalog.items
export const getIsLoading = state => state.catalog.isLoading;
export const getError = state => state.catalog.error;
export const selectStatusFilter = state => state.filters;
export const gettAllCars = state => state.allCars.items;
export const favoriteCars = state => state.favorite;

export const filterMark = createSelector(
  [gettAllCars,selectStatusFilter],(cars, filterQwery) =>{
 
    const {serchName} = filterQwery;
    if (serchName === ""){
      return cars;
    }
    const qwery = serchName.toLowerCase().toString();
    
    const filter1 = cars.filter(car => car.make.toLowerCase().includes(qwery) );
    return filter1
  }
)

export const filterPrice = createSelector(
  [filterMark,selectStatusFilter],(cars, filterQwery) =>{
    const {price} = filterQwery;
    if(price === ""){
      return cars;
    }
  const carPrice = Number(price)
  const filter2 = cars.filter(car =>  {
    const price = car.rentalPrice
    return parseFloat(price.replace("$", "")) <= carPrice
    }) 
    return filter2
  }
 )

 export const filterMinMails = createSelector(
  [filterPrice,selectStatusFilter],(cars, filterQwery) =>{
    const {minMails} = filterQwery;
    const minMileg = Number(minMails);
  
    if(minMileg<0){
      return cars
    }
    const filter3 = cars.filter(car => car.mileage >= minMileg);
    return filter3
  }
 )

 export const selectVisibleAuto = createSelector(
  [filterMinMails,selectStatusFilter],(cars, filterQwery) =>{
    const {maxMails} = filterQwery;
    const maxMileg = Number(maxMails);
   
    if(maxMileg<0){
      return cars
    }
    const filter4 = cars.filter(car => car.mileage <= maxMileg);
    return filter4;
  }
 )






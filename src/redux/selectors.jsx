import { createSelector } from '@reduxjs/toolkit';



export const getAll = state => state.catalog
export const getTasks = state => state.catalog.items;
export const getIsLoading = state => state.catalog.isLoading;
export const getError = state => state.catalog.error;
export const selectStatusFilter = state => state.filters;
export const gettAllCars = state => state.allCars.items;


export const selectVisibleAuto = createSelector(
    [gettAllCars,selectStatusFilter],
    (cars, filterQwery) => {
    
    const {serchName, maxMails, minMails, price} = filterQwery
    
    
    const qwery = serchName.toLowerCase().toString();
    const maxMileg = Number(maxMails);
    const minMileg = Number(minMails);
    const carPrice = Number(price)

    const filter1 = cars.filter(car => car.make.toLowerCase().includes(qwery) );
    console.log('filter1', filter1)

    
    const filter2 = filter1.filter(car =>  {
    const price = car.rentalPrice
    return parseFloat(price.replace("$", "")) <= carPrice
    }) 
    console.log('filter2', filter2)


    
    const filter3 = filter2.filter(car => car.mileage >= minMileg);
    console.log('filter3', filter3)


    
    const filter4 = filter3.filter(car => car.mileage <= maxMileg);
    console.log('filter4', filter4)
    


    
    return filter4;
    
    }
  );





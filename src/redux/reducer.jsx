import { combineReducers } from 'redux';
import { tasksReducer } from './catalogSlice';
import {filterReducer} from './filterSlice'
import {allCarsReducer} from './allCarsSlice'
import {favoriteReducer} from './favoriteSlice'


export const rootReducer = combineReducers({
    catalog: tasksReducer,
    filters: filterReducer,
    allCars:allCarsReducer,
    favorite: favoriteReducer

});


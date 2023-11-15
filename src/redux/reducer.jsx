import { combineReducers } from 'redux';
import { tasksReducer } from './catalogSlice';
import {filterReducer} from './select/select'
import {allCarsReducer} from './select/allCarsSlice'

export const rootReducer = combineReducers({
    catalog: tasksReducer,
    filters: filterReducer,
    allCars:allCarsReducer
});


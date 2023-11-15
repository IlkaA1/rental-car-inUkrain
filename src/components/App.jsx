import { Routes, Route, Navigate } from 'react-router-dom';
import {  Suspense } from 'react';


import {Home} from '../pages/Home/Home';
import {Favorite} from '../pages/Favorite/Favorite';
import {CarsCatalog} from '../pages/CarsCatalog /CarsCatalog ';
import { Header } from './Header/Header';


// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTasks } from '../redux/operations';


export const App = () => {
// const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);





  
  return (
    <>
    <Header/>
    <Suspense fallback={<div>Loading...</div>}></Suspense>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="/catalog" element={<CarsCatalog />} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
};

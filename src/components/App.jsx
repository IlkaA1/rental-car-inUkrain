import { Routes, Route, Navigate } from 'react-router-dom';
import {  Suspense } from 'react';


import {Home} from '../pages/Home/Home';
import {Favorite} from '../pages/Favorite/Favorite';
import {CarsCatalog} from '../pages/CarsCatalog /CarsCatalog ';
import { Header } from './Header/Header';



export const App = () => {
  
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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchProducts, fetchBrands } from '../../store/productsSlice';
import './app.css';

import Header from '../header/header';
import Products from '../products/products';
import Busket from '../busket/busket';

export default function App() {
    const dispatch = useDispatch();
    console.log('App render');

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchBrands());
        console.log('App useEffect');
    }, [dispatch]);

    return (
        <div className='app__wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/busket' element={<Busket />} />
            </Routes>
        </div>
    )
}
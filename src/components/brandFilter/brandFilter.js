import React from 'react';

import './brandFilter.css';

import { useSelector } from 'react-redux';


export default function BrandFilter({ setFilter }) {
    const brands = useSelector(state => state.products.brands);

    console.log('BrandFilter render');

    return (
        <nav className='brandFilter__wrapper'>
            <ul className='brandFilter__list'>
                <li onClick={() => setFilter('')}>All Brands</li>
                {
                    brands.map(brand => <li key={brand.id} onClick={() => setFilter(brand.title)}>{brand.title}</li>)
                }
            </ul>
        </nav>
    )
}
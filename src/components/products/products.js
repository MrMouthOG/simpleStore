import React, { useState } from 'react';
import './products.css';

import BrandFilter from '../brandFilter/brandFilter';
import ProductItem from '../productItem/productItem';

import { useSelector } from 'react-redux';

export default function Products() {
    const [filter, setFilter] = useState('');

    const products = useSelector(state => state.products.products)

    const items = (filter === '') ? products : products.filter(item => {
        return item.brand === filter
    })

    console.log('Product render');

    return (
        <main className='products__wrapper'>
            <BrandFilter setFilter={setFilter} />
            <section className='products__main'>
                <div className='products__title'>Catalog</div>
                <div className='products__list'>
                    {
                        items.map(item => {
                            return <ProductItem key={item.id} item={item} />
                        })
                    }
                </div>
            </section>
        </main>
    )
}
import React from 'react';
import './busket.css';

import BusketItem from '../busketIem/busketItem';

import { useSelector } from 'react-redux';

export default function Busket() {
    const busketItems = useSelector(state => state.products.busket)

    console.log('Busket render');

    const items = busketItems.map(item => {
        return <BusketItem key={item.id} item={item} />
    });

    const show = (busketItems.length > 0) ? items : <div>В корзине пока ничего нет</div>

    const totalAmount = busketItems.reduce((sum, item) => sum + (item.value * item.quantity), 0);

    return (
        <section>
            <div className='busket__title'>Shopping Cart</div>
            <div>
                <div className='busket__subtitles'>
                    <div>Item</div>
                    <div>Price</div>
                    <div>Qty</div>
                    <div>Total</div>
                </div>
                {
                    show
                }
            </div>
            <div className='busket__order'>
                <div className='busket__totalAmount'>
                    $ {totalAmount.toFixed(2)}
                </div>
                <button className='busket__makeOrder'>Checkout</button>
            </div>
        </section>
    )
}
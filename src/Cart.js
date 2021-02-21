import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    
    constructor() {
        super();
        this.state = {
                products: [{
                    price: 9999,
                    title: 'Phone',
                    qty: 1,
                    img : '',
                    id:1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img : '',
                    id:2
                },
                {
                    price: 99,
                    title: 'Pen',
                    qty: 1,
                    img : '',
                    id:3
                }]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return(
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={'Watch'} img={''}/> */}
                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id}/>
                    })
                }
            </div>
        )
    }
}

export default Cart;
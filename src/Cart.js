import React, { Component } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
        return(
            <div className="cart">
            {/* <CartItem qty={1} price={99} title={'Watch'} img={''}/> */}
                {
                products.map((product) => {
                    return <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreaseQty={props.onIncreaseQty}
                        onDecreaseQty={props.onDecreaseQty}
                        onDeleteProduct={props.onDeleteProduct}
                        />
                })
                }
            </div>
        )
 }

export default Cart;
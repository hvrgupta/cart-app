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

    handleIncreaseQuantity = (product) => {
        // console.log(product);
        const { products } = this.state;
        let index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products : products
        })
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        let index = products.indexOf(product);
        if(products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }

    // handleDeleteProduct = (product) => {
    //     console.log(this.state);
    //     const { products } = this.state;
    //     let index = products.indexOf(product);
    //     products.splice(index,1);
    //     this.setState({
    //         products
    //     })
    // }

    //Sir implementation

    handleDeleteProduct = (id) => {
        
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        },() => {
            console.log(this.state)
        })
    }

    render() {
        const { products } = this.state;
        return(
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={'Watch'} img={''}/> */}
                {
                    products.map((product) => {
                        return <CartItem 
                                product={product} 
                                key={product.id} 
                                onIncreaseQty={this.handleIncreaseQuantity}
                                onDecreaseQty={this.handleDecreaseQuantity}
                                onDeleteProduct={this.handleDeleteProduct}
                                />
                    })
                }
            </div>
        )
    }
}

export default Cart;
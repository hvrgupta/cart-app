import React, { Component } from 'react';

class CartItem extends Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    // increaseQuantity() {
    //     console.log(this.state);
    // }

    increaseQuantity = () => {
        console.log('Hello',this.state)
    }

    render(){
        const { price,title,qty } = this.state;
        return(
            <div className="cart-item">
                 <div className="left-block">
                    <img style={styles.image}/>
                 </div>
                 <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: { qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1613830116~hmac=ac9edf273f849ffb04d5fe0dcbe302b2" 
                            onClick={this.increaseQuantity}/>
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1613830073~hmac=71604b9ba1c45e3eea14a54106e8b53e" />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1613830169~hmac=e6ae55609e6908e1d052428e6c3ca79d" />
                    </div>
                 </div>
            </div>
        )
    }
}

const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,
        backgroundColor: '#CCC'
    }
}

export default CartItem;
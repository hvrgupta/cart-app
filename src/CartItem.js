import React, { Component } from 'react';

class CartItem extends Component {

    // increaseQuantity() {
    //     console.log(this.state);
    // }

    // increaseQuantity = () => {
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     },() => {
    //         console.log(this.state);
    //     })
    // }

    // decreaseQuantity = () => {

    //     const { qty } = this.state;

    //     if(qty === 0) {
    //         return; 
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     })
    // }

    render(){
        // const { price,title,qty } = this.state;
        const { price,title,qty,id } = this.props.product;
        const { product,onIncreaseQty,onDecreaseQty,onDeleteProduct} = this.props;
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
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1613913257~hmac=40f9f3afda5691f16972cc2970e678b1" 
                            onClick={() => {onIncreaseQty(product)}}/>
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613913626~hmac=292ac20a2919d9a7da9fc298c28f3565"
                            onClick={() => {onDecreaseQty(product)}}/>
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1613913666~hmac=684a06a53754fe24017084ae86abcfa9" 
                            onClick={() => {onDeleteProduct(id)}}
                            />
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
import React from 'react';

const CartItem = (props) => {

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

        // const { price,title,qty } = this.state;
        const { price,title,qty,id,img } = props.product;
        const { product,onIncreaseQty,onDecreaseQty,onDeleteProduct} = props;
        return(
            <div className="cart-item">
                 <div className="left-block">
                    <img style={styles.image} src={img}/>
                 </div>
                 <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: { qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="data:image/png;base64,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" 
                            onClick={() => {onIncreaseQty(product)}}/>
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="data:image/png;base64,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"
                            onClick={() => {onDecreaseQty(product)}}/>
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="data:image/png;base64,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" 
                            onClick={() => {onDeleteProduct(id)}}
                            />
                    </div>
                 </div>
            </div>
        )
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
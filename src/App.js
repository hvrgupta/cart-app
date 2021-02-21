import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
            products: [{
                price: 10000,
                title: 'Phone',
                qty: 1,
                img : 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:1
            },
            {
                price: 1000,
                title: 'Watch',
                qty: 1,
                img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price: 100,
                title: 'Pen',
                qty: 1,
                img : 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

getCartCount = () => {
  const { products } = this.state;
  let count = 0;

  products.forEach(prod => {
      count += prod.qty;
  });

  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let total = 0;
  products.forEach((prod) => {
    total += prod.price * prod.qty;
  })

  return total;
}

  render(){
    const products = this.state.products;
    return (
      <div>
        <Navbar count={this.getCartCount()}/>
        <Cart 
            onIncreaseQty={this.handleIncreaseQuantity}
            onDecreaseQty={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            products={products}
        />
        <div className="total">TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
            products: [],
            loading: true
            // products: [{
            //     price: 10000,
            //     title: 'Phone',
            //     qty: 1,
            //     img : 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //     id:1
            // },
            // {
            //     price: 1000,
            //     title: 'Watch',
            //     qty: 1,
            //     img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //     id:2
            // },
            // {
            //     price: 100,
            //     title: 'Pen',
            //     qty: 1,
            //     img : 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //     id:3
            // }]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    this.db = firebase.firestore();
  }

componentDidMount() {
  //firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);

  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   })

  //   this.setState({
  //     products,
  //     loading: false
  //   })
  // })

this.db
  .collection('products')
  .orderBy('price')
  .onSnapshot((snapshot) => {
    // console.log(snapshot);
    console.log('called snapshot')
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })

    this.setState({
      products,
      loading: false
    })
  })
  console.log('component did mount')
}

handleIncreaseQuantity = (product) => {
    // console.log(product);
    const { products } = this.state;
    let index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //     products : products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    })
    .then(() => console.log('Updated Successfully'))
    .catch(err => console.log(err));
}

handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    if(products[index].qty === 0) {
        return;
    }
    // products[index].qty -= 1;
    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    })
    .then(() => console.log('decrease update success'))
    .catch(err => console.log(err));
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
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products: items
    // },() => {
    //     console.log(this.state)
    // })
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => console.log('Deleted Success'))
      .catch((err) => console.log(err))
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

addProduct = () => {
  this.db
    .collection('products')
    .add({
      price: 10000,
      qty: 1,
      title: 'Phone',
      img: 'https://th.bing.com/th/id/OIP.iDLg4RQy54QvaaHRorKx_QHaFj?w=249&h=187&c=7&o=5&pid=1.7'
    })
    .then((docRef) => {
        console.log('Product added',docRef);
    })
    .catch((err) => {
      console.log(err);
    })
}

render(){
    const { products,loading } = this.state;
    return (
      <div>
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding: '1em 1.5em',margin: '1em 2em'}}>Add Product</button>
        <Cart 
            onIncreaseQty={this.handleIncreaseQuantity}
            onDecreaseQty={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            products={products}
        />
        {loading && <h1>Loading...</h1>}
        <div className="total">TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

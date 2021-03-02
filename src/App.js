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
      price : 40000,
      qty: 1,
      title: 'Washing Machine',
      img: 'data:image/jpeg;base64,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'
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

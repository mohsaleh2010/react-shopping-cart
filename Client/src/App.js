import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
//import { word } from './words';
import data from './Data.json';
import Products from './Components/Products/Products'
import Filter from './Components/Filter/Filter';
import Cart from './Components/Cart/Cart';
import { provider } from 'react-redux';
import store from './store/Store';


function App() {
  const [products, setproducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItem] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);



  const handleFilterBySize = (e) => {
    // console.log(e.target.value);
    setSize(e.target.value);
    if (e.target.value == "All") {
      setproducts(data);
    }
    else {
      let productClone = [...data];
      let newProducts = productClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      console.log(newProducts);
      setproducts(newProducts);
    }
  }
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    //console.log(e.target.value);
    setSort(e.target.value);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "Lowest") {
        return a.price - b.price;
      }
      else if (order == "Highest") {
        return b.price - a.price;
        // console.log(b.price - a.price);
      }
      else {
        return a.id < b.id ? 1 : -1;
      }


    });
    //  console.log(newProducts);
    setproducts(newProducts);
  }

  const handleAddToCart = (e) => {
    let sproduct = e.target.value;
    console.log(sproduct);
  }
  const AddToCart = (product) => {
    let cartItemClone = [...cartItems];
    let isProductExist = false;
    cartItemClone.forEach(p => {
      if (p.id == product.id) {
        p.Qnty++;
        isProductExist = true;
      }
    });

    if (isProductExist == false) {
      cartItemClone.push({ ...product, Qnty: 1 })
    }
    setCartItem(cartItemClone);
    console.log(cartItemClone);
  }

  useEffect(() => { localStorage.setItem('cartItems', JSON.stringify(cartItems)) }, [cartItems])


  const RemoverFromCart = (product) => {
    let cartItemsClone = [...cartItems];
    let newItemCart = cartItemsClone.filter(p => p.id !== product.id);
    setCartItem(newItemCart);

    // let index = cartItemsClone.indexOf(product);
    // delete cartItemsClone[index];
    // setCartItem(cartItemsClone);
  }

  return (
    <provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products productsData={products} AddToCart={AddToCart} />
            <Filter productNumber={products.length} handleFilterBySize={handleFilterBySize} handleFilterByOrder={handleFilterByOrder} sort={sort} size={size} />

          </div>
          <Cart cartItems={cartItems} RemoverFromCart={RemoverFromCart} />
        </main>
        <Footer />
      </div>
    </provider>
  );
}

export default App;

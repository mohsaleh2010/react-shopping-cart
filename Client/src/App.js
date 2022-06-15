import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
//import { word } from './words';
import data from './Data.json';
import Products from './Components/Products/Products'
import Filter from './Components/Filter/Filter';
function App() {
  const [products, setproducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  // const handleFilterBySize = (e) => {
  //   setSize(e.target.value);
  //   if (e.target.value == "All") {
  //     setproducts(data);
  //   }
  //   else {
  //     let productClone = [...products];
  //     let newproducts = productClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
  //     setproducts(newproducts);
  //   }
  // }
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
    console.log(e.target.value);
    setSort(e.target.value);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "Lowest") {
        return a.price - b.price;
      }
      else if (order == "Highest") {
        return b.price - a.price;
        console.log(b.price - a.price);
      }
      else {
        return a.id < b.id ? 1 : -1;
      }


    });
    console.log(newProducts);
    setproducts(newProducts);
  }
  return (

    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products productsData={products} />
          <Filter handleFilterBySize={handleFilterBySize} handleFilterByOrder={handleFilterByOrder} sort={sort} size={size} />

        </div>

      </main>
      <Footer />
    </div>

  );
}

export default App;

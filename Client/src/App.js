import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
//import { word } from './words';
import data from './Data.json';
import Products from './Components/Products/Products'
function App() {
  const [products, setproducts] = useState([data])


  return (

    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products productsData={data} />
          <div className="filter-wrapper">filter</div>
        </div>

      </main>
      <Footer />
    </div>

  );
}

export default App;

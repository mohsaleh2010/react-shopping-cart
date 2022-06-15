import React, { useState } from 'react';
import '../../css/Products/Products.css'
import Modal from 'react-modal';
import ProductModal from './ProductModal'
function Products(props) {

    const [product, setproduct] = useState("");
    const openModal = (product) => {
        setproduct(product)
    }
    const closeModal = () => {
        setproduct(false)
    }
    return (
        <div className="product-wrapper">

            {
                props.productsData.map(product =>

                    <div className="products-item" key={product.id}>

                        <a href="#" onClick={() => openModal(product)}>
                            <img src={product.imageUrl} alt={product.title} />
                        </a>
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <span>${product.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>

                )
            }
            <ProductModal product={product} closeModal={closeModal} />

        </div>
    )
}
export default Products



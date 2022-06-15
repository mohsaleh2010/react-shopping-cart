import React from 'react'

import '../../css/Products/Products.css'
import Modal from 'react-modal';


function ProductModal(props) {
    const { product, closeModal } = props
    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
            <span onClick={closeModal} className="close-icon">&times;</span>
            <div className="product-info">
                <img src={product.imageUrl} />
                <p>{product.title}</p>
                <p>{product.desc}</p>
                <p>${product.price}</p>
            </div>
        </Modal>

    )
}
export default ProductModal
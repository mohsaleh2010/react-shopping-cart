import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../CheckoutForm/Checkout';

function Cart(props) {


    const [showform, setShowForm] = useState(false);
    const [value, setValue] = useState("");

    const submitOrder = (e) => {
        e.preventDefault();
        // console.log(value);
        const order = {
            name: value.name,
            email: value.email
        }
        console.log(order);
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    }
    return (
        <div className="cart-wrapper">
            <div className="cart-title">
                {
                    props.cartItems.length === 0 ? 'Cart Empty' : <p>There is  {props.cartItems.length} product in Cart</p>
                }
            </div>

            <div className="cart-items">
                {
                    props.cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imageUrl} alt="" />
                            <div className="cart-info">
                                <div>
                                    <p>{item.title}</p>
                                    <p>Qnty: {item.Qnty}</p>
                                    <p>${item.price}</p>
                                </div>
                                <button onClick={() => props.RemoverFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))

                }


            </div>
            {
                props.cartItems.length !== 0 && (
                    <div className='cart-footer'>
                        <div className='cart-total'>Total Price : ${props.cartItems.reduce((acc, p) => {
                            return acc + p.price
                        }, 0)}</div>
                        <button onClick={() => setShowForm(true)}>Select Product</button>
                    </div>
                )
            }

            <Checkout value={value} showform={showform} submitOrder={submitOrder} setShowForm={setShowForm} handleChange={handleChange} />

        </div>
    )
}

export default Cart

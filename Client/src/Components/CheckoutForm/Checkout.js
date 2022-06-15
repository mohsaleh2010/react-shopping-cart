import React from 'react'
import '../../css/CheckoutForm/Checkout.css'
import Input from '../Input/Input'
function Checkout(props) {
    return (

        props.showform && <div className='checkout-form'>
            <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
            <form onSubmit={props.submitOrder}>
                <Input label="Name" type="text" name="name" handleChange={props.handleChange} />
                <Input label="Email" type="email" name="email" handleChange={props.handleChange} />

                <div>

                    <button type="submit">Check Out</button>
                </div>
            </form>
        </div>

    )
}

export default Checkout

import React, { useContext } from 'react'
import CartContext,{CartConsumer} from "../context/cartContext"
const Cart = () => {
    var cart = useContext(CartContext)
    return (
        <CartConsumer>
            {(cart)=>{
                console.log(cart);
            }}
        </CartConsumer>
    )
}

export default Cart

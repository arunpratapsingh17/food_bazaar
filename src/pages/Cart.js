import React, { useContext } from 'react'
import CartItem from '../components/CartItem';
import {CartContext} from "../context/cartContext"
const Cart = () => {
    const { total, cart } = useContext(CartContext);
    return (
        <section className="cart-items section">
            <h2>your cart</h2>
                {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
                })}
            <h2>Total:₹{total}</h2>
      </section>
    )
}

export default Cart

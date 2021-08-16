import React, { useContext, useState } from 'react'
import CartItem from '../components/CartItem';
import {CartContext} from "../context/cartContext";
import Modal from "react-modal"
const modal_para={
    paddingTop:"70px",
    textAlign:"center",
    textDecoration:"none",
}
const Cart = () => {
    const { total, cart,clearCart } = useContext(CartContext);
    const [isOpen,setIsopen] = useState(false)
    var [displayModal,setdisplayModal] = useState(false)
    console.log(cart);
    return (
        <section className="cart-items section">
                <div>
                <h2>your cart</h2>
                    {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                    })}
                <h2>Total:₹{total}</h2>
                <button className="btn btn-danger btn-block" onClick={()=>{
                    clearCart()
                }}>
                    Clear the cart
                </button>
                <button style={{marginTop:"2rem"}} className="btn btn-primary btn-block" onClick={()=>{
                    setIsopen(true)
                }}>
                    Place the order
                </button>
            </div>
            <Modal isOpen={isOpen} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} onRequestClose={()=>setIsopen(false)} style={
            {
                overlay:{
                    backgroundColor:'##ff8a0d',
                },
                content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)',
                    height:'400px',
                    width:'300px',
                    borderRadius:"20px",
                  }
            }
            }>
            <h1>
                Your order has been placed,you can find the order details below-
            </h1>
            {cart.map((item)=>{
                return <li>
                   {item.amount} {item.name}
                </li>
            })}
            <h1>
                Total Amount-{total}
            </h1>
            </Modal>
      </section>
    )
}

export default Cart

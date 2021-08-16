import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from '../context/cartContext';

const CartItem = ({id,name,price,amount}) => {
    const {
        removeitem,
        increaseAmount,
        decreaseAmount,
        clearCart,
      } = React.useContext(CartContext);
    return (
        <article className="cart-item">
                <div>
                    <h4>{name}</h4>
                    <h5>₹{price}</h5>
                    <button
                    className="cart-btn remove-btn"
                    onClick={() => {
                        removeitem(id);
                    }}
                    >
                    remove
                    </button>
                </div>
                <div className="amount-side">
                    <div>
                        <button
                        type="button"
                        className="cart-btn amount-btn"
                        style={{color:"green"}}
                        onClick={() => {
                            increaseAmount(id);
                        }}
                        >
                            <FaAngleUp />
                        </button>
                    </div>
                    <div>
                        <p className="item-amount"><span className="highlight">Amount-</span>{amount}</p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="cart-btn amount-btn"
                            style={{marginTop:"1rem",color:"red"}}
                            onClick={() => {
                                decreaseAmount(id, amount);
                            }}
                        >
                            <FaAngleDown />
                        </button>
                    </div>
                </div>
    </article>
    )
}

export default CartItem

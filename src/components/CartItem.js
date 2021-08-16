import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from '../context/cartContext';

const CartItem = ({id,title,price,amount}) => {
    const {
        removeitem,
        increaseAmount,
        decreaseAmount,
        clearCart,
      } = React.useContext(CartContext);
    return (
        <article className="cart-item">
                <div>
                    <h4>{title}</h4>
                    <h5>${price}</h5>
                    <button
                    className="cart-btn remove-btn"
                    onClick={() => {
                        removeitem(id);
                    }}
                    >
                    remove
                    </button>
                </div>
                <div>
                    <button
                    type="button"
                    className="cart-btn amount-btn"
                    onClick={() => {
                        increaseAmount(id);
                    }}
                    >
                    <FaAngleUp />
                    </button>
                    <p className="item-amount">{amount}</p>
                    <button
                        type="button"
                        className="cart-btn amount-btn"
                        onClick={() => {
                            decreaseAmount(id, amount);
                        }}
                    >
                    <FaAngleDown />
                    </button>
                </div>
    </article>
    )
}

export default CartItem

import React, { useState } from "react";
export var CartContext = React.createContext();
export default function CartProvider({children}){
    const [cart,setCart] = useState([{name:"Arun"}]);
    // console.log(cart);
    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}
// var CartProvider = CartContext.Provider;
// var CartConsumer = CartContext.Consumer;
// export default CartContext;
// export {CartConsumer,CartProvider};
import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';

const Product = (item) => {
    var {addToCart} = useContext(CartContext);
    return (
        <article className="product">
            <div className="product-footer">
                <p className="product-title">{item.name}</p>
                <p className="product-price">₹{item.price}</p>
                {item.available?(<p className="product-availability-yes">In Stock</p>):(<p className="product-availability-no">OUT OF STOCK</p>)}
                <p className="product-vendor"><span style={{color:'black',fontWeight:'bold'}}>Vendor-</span><br />{item.vendor}</p>
                <p className="product-category"><span style={{color:'black',fontWeight:'bold'}}>Category-</span><br />{item.category}</p>
                {item.available?(<button
                    className="btn btn-primary btn-block"
                    onClick={() => {
                        //Add to cart
                        addToCart(item);
                        // history.push("/cart");
                        
                }}
                >
                 +1
                </button>):null}
            </div>
    </article>
    )
}

export default Product

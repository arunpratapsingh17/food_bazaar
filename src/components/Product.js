import React from 'react'

const Product = (item) => {
    console.log(item);
    return (
        <article className="product">
            <div className="product-footer">
                <p className="product-title">{item.name}</p>
                <p className="product-price">₹{item.price}</p>
                {item.available?(<p className="product-availability-yes">Available</p>):(<p className="product-availability-no">Not Available</p>)}
                <p className="product-vendor"><span style={{color:'black',fontWeight:'bold'}}>Vendor-</span><br />{item.vendor}</p>
                <p className="product-category"><span style={{color:'black',fontWeight:'bold'}}>Category-</span><br />{item.category}</p>
                <button
                    className="btn btn-primary btn-block"
                    onClick={() => {
                        //Add to cart
                        // addToCart(product);
                        // history.push("/cart");
                }}
                >
                 +1
                </button>
            </div>
    </article>
    )
}

export default Product

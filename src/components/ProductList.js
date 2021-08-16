import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import Product from './Product';

const ProductList = ({data}) => {
  var {total} = useContext(CartContext);
    // console.log(data);
    return (
        <section className="section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-center">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
        <div>
          {total}
        </div>
      </section>
    )
}

export default ProductList

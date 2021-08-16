import React from 'react'
import Product from './Product';

const ProductList = ({data}) => {
    // console.log(data);
    return (
        <section className="section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-center">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </section>
    )
}

export default ProductList

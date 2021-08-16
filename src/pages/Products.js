import React, { useContext, useEffect } from 'react';
import ProductList from '../components/ProductList';
// import { DataConsumer } from '../context/context';
import DataContext, { DataConsumer } from "../context/context"
const Products = () => {
    const data1 = useContext(DataContext);
    // console.log(data1);
    useEffect(()=>{
       
    },[])
    return (
        <ProductList data={data1} />
    )
}

export default Products

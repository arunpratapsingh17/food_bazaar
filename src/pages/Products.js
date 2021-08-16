import React, { useContext, useEffect } from 'react';
// import { DataConsumer } from '../context/context';
import DataContext, { DataConsumer } from "../context/context"
const Products = () => {
    const data1 = useContext(DataContext)
    useEffect(()=>{
       
    },[])
    return (
        <DataConsumer>
            {(data1)=>{
                console.log(data1);
            }}
        </DataConsumer>
    )
}

export default Products

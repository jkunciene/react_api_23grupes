import React, { useState, useEffect }  from 'react';
import Product_card from '../product/Product_card';
import productsService from '../../services/ProductsServices'
import styles from './Products_list.module.css';

const Products_list = () => {
//1. TOP STATE - kur desiu gautus duomenis
const [products, setProducts] = useState([]);

//2. gautus duomenis is services uzsetinti i state
const getProducts = ()=> {
    productsService().then((data)=>{
        setProducts(data);
    })
}
//3. useEffect pakvies funkcija, 
// kur gauna duomenis is API ir juos uzsetina i state
useEffect(()=>{
    getProducts();
}, []);

//console.log(products);

    return (
        <div>
           <Product_card products={products}/>
        </div>
    )
}

export default Products_list


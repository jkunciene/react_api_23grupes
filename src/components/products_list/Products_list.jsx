import React, { useState, useEffect }  from 'react';
import Product_card from '../product/Product_card';
import productsService from '../../services/ProductsServices'

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

console.log(products);

    return (
        <div>
           <Product_card/>
        </div>
    )
}

export default Products_list


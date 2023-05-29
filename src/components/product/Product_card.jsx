import React from 'react'
import styles from './Product.module.css';

const Product_card = (props) => {
    console.log(props.products);

    return (
        <div className={styles.products_list}>
            viena preke
        </div>
    )
}

export default Product_card

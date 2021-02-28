import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <h4 className="product-name">{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock -order soon</p>
                <button className="main-button" onClick={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>&nbsp; add to cart</button>
            </div>

        </div>
    );
};

export default Product;
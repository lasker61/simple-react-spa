import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock,key } = props.product
    return (
        <div className="product">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock -order soon</p>
                { props.showAddToCart===true && <button className="main-button" onClick={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>&nbsp; add to cart</button>}
            </div>

        </div>
    );
};

export default Product;
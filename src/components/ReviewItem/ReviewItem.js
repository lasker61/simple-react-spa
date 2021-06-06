import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name,quantity,key,price} =props.product;
    return (
        <div className="review-item mb-3 ml-5 border-bottom solid">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button className="main-button mb-2" onClick={()=>props.removeProduct(key)}>Remove Item</button>
        </div>
    );
};

export default ReviewItem;
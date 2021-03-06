import React from 'react';


const Cart = (props) => {
    const cart =props.cart;
    // console.log(cart);
    // const total =cart.reduce((total,prd)=> total + prd.price ,0)
    let total = 0;
    for (let i= 0 ; i< cart.length ;i++){
        const product = cart[i];
        total =total + product.price*product.quantity;
    }
    let shipping =0;
    if (total>15) {
        shipping =4.99;
    }
    else if (total>0) {
        shipping = 12.99;
    }
    const tax = total/12;
    const formatNumber =num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className="text-primary">Order summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Tax+Vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(total+shipping+tax)}</p>
            {
                props.children
            }
            
           
        </div>
    );
};

export default Cart;
import React from "react";
import Cart from "./Cart";

function CheckCart({cart, netTotal, discountTotal, subTotal}){
    return(
        <div className="check-cart-container">
            <h2>Check Cart</h2>
            <Cart cart={cart} netTotal={netTotal} discountTotal={discountTotal} subTotal={subTotal} />
        </div>
    )
}
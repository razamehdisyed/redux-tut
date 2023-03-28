import React from 'react'
import cart from './cart.jpg';

function Header(props) {
    console.warn("Home",props.data)
    return (
        <div>
           <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
            <img src={cart} />
           
            </div>
        </div>
    )
}
export default Header
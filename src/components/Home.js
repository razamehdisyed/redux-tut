import React from 'react'
import mobile from './mobile.jpg';

function Home(props) {
    console.warn("Home",props.data)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src={mobile} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className="remove-cart-btn"
                    onClick={
                        ()=>{props.removeFromCartHandler()}
                        }>
                        Remove</button>
                </div>
            </div>
        </div>
    )
}
export default Home
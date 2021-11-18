import React,{useContext} from 'react'
import "./Navbar.css";
import {Contextcart} from './Cart'

const Navbar = ({cartItem}) => {
    console.log(cartItem)
    return (
        <div className="navbar">
            <nav className="navClass">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">ShoppingApp</a>
            <ul  id="nav-mobile" className="ulClass    right ">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Product</a></li>
                <li><a href="collapsible.html">AddtoCart <sup className="cart_title">{cartItem}</sup></a></li>
            </ul>
            </div>
        </nav>
        
        </div>
    )
}

export default Navbar

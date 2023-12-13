import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState("Beranda");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Alpha Clothes</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link> {menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link style={{ textDecoration: 'none'}} to='/About'>About</Link>{menu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Product")}}><Link style={{ textDecoration: 'none'}} to='/Product'>Product</Link> {menu==="Product"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact")}}><Link style={{ textDecoration: 'none'}} to='/Contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
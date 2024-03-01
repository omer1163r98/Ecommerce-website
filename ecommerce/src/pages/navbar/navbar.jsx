import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
const Navbar = ({ setInput, input }) => {
    const navigate = useNavigate()

    return (
        <div className='nav-container'>
            <div className='logo'>
                <NavLink className='nav-item' to={'/'}><h2>Rizzeler</h2></NavLink>
            </div>
            <div>
                <NavLink to={'/products'}>
                <input className='search' placeholder='Search item' onChange={(e) => setInput(e.target.value)} value={input}></input>
                </NavLink>
            </div>
            <div className='nav-links'>
                <NavLink className='nav-item' to={'/products'}><h4>Products</h4></NavLink>
                <NavLink className='nav-item' to={'/cart'}><h4>Cart</h4></NavLink>
            </div>
        </div>
    )
}

export default Navbar

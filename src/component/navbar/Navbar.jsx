import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'



const Navbar = () =>{
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/">Logo</NavLink>
                </div>
                <div className="menu_bar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skill">Skill</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/review">Review</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </>
    )
}
export default Navbar;
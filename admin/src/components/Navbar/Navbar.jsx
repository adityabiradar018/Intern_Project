import React from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>FoodieExpo</h1>
        <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar
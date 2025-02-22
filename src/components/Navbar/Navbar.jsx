import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/' className='brand-name'>FoodieExpress</Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className="cart-link">Cart ({getTotalCartAmount()})</Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="login-btn">Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>Orders</li>
              <hr />
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

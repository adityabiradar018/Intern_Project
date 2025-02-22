import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className="brand-name">FoodieExpress</h1>
                <p>Delivering happiness with fresh, delicious meals straight to your door. Quality, taste, and convenience at your service.</p>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone: +1 234 567 890</li>
                    <li>Email: support@foodieexpress.com</li>
                    <li>Address: 123 Food Street, New York, NY</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; FoodieExpress - All Rights Reserved.
        </p>
    </div>
  );
};

export default Footer;

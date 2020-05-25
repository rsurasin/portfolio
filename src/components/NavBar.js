import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';

function NavBar() {
    return (
        <div id='navbar'>
            <li id='liNav'>
                <Link to='/' style={{textDecoration: 'none'}} id='NavItem'>Home</Link> 
            </li>
           <li id='liNav'>
                <Link to='/about' style={{textDecoration: 'none'}} id='NavItem'>About</Link>
            </li>
        </div>
    )
}

export default NavBar; 
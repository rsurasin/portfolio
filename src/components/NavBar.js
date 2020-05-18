import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';

function NavBar() {
    return (
        <div id='navbar'>
            <Link to='/'>
                <a id='NavItem'>Home</a>
            </Link> 
            <Link to='/about'>
                <a id='NavItem'>About</a>
            </Link>
        </div>
    )
}

export default NavBar; 
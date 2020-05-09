import React, { useState } from 'react'; 

function Icon({ icon, toggleHover }) {

    const getStyle = () => {  
        switch(icon.id) {
            case 0: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3'
                    }
                ) 
            case 1: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3'
                    }
                )
            case 2: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3'
                    }
                )
            case 3: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3'
                    }
                )
        }
    };

    return (
        <a id={icon.name} style={getStyle()} onMouseEnter={() => toggleHover(icon.id)} onMouseLeave={() => toggleHover(icon.id)}>
        </a> 
    )
}

// Need to attribute Authors 
// GitHub 
//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// LinkedIn 
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
// Email Icon 
// <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
// PDF Icon 
// <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Icon; 
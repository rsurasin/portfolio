import React, { useState } from 'react'; 

function Icon({ icon, toggleHover }) {

    const getStyle = () => {  
        const colors = {
            orange: 'invert(62%) sepia(28%) saturate(1659%) hue-rotate(323deg) brightness(94%) contrast(97%)',
            pink: 'invert(37%) sepia(21%) saturate(6255%) hue-rotate(315deg) brightness(94%) contrast(93%)',
            blue: 'invert(68%) sepia(22%) saturate(6882%) hue-rotate(160deg) brightness(91%) contrast(82%)',
            green: 'invert(82%) sepia(26%) saturate(1324%) hue-rotate(102deg) brightness(90%) contrast(83%)',   
        }
        switch(icon.id) {
            case 0: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3',
                        filter: icon.hover ? colors.orange:'',
                    }
                ) 
            case 1: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3', 
                        filter: icon.hover ? colors.pink:'',
                    }
                )
            case 2: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3', 
                        filter: icon.hover ? colors.blue:'',
                    }
                )
            case 3: 
                return (
                    {
                        opacity: icon.hover ? '1':'0.3', 
                        filter: icon.hover ? colors.green:'',
                    }
                )
        }
    };

    return (
        <a id={icon.name} style={getStyle()} target="_blank" rel="noopener noreferrer" href={icon.description} onMouseEnter={() => toggleHover(icon.id)} onMouseLeave={() => toggleHover(icon.id)}>
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
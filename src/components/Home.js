import React, { useState } from 'react'; 
import NavBar from './NavBar';
import IconBar from './IconBar'; 

function Home() {
    const [icons, setIcon] = useState([
        {
            id: 0, 
            name: 'GitIcon', 
            hover: false,
            description: 'https://github.com/rsurasin',
        }, 
        {
            id: 1, 
            name: 'LinkedInIcon', 
            hover: false,
            description: 'https://linkedin.com/in/rsurasinghe',
        },  
        {
            id: 2, 
            name: 'PDFIcon', 
            hover: false,
            description: 'Check out my Resume!',
        }, 
        {
            id: 3, 
            name: 'EmailIcon', 
            hover: false,
            description: 'rahulsurasinghe@gmail.com',
        }, 
    ]); 

    const toggleHover = (index) => { 
        const newIcons = [...icons]; 
        newIcons[index].hover = !newIcons[index].hover; 
        setIcon(newIcons); 
    };

    return (
        <div> 
            <NavBar />
            <h1 id='title'>Rahul Surasinghe</h1>
            <IconBar icons={icons} toggleHover={toggleHover}/>
            <div id='stars'></div>
            <div id='stars2'></div> 
            <div id='stars3'></div>
        </div>
    )
}

export default Home; 
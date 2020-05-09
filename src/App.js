//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.scss';
import IconBar from './components/IconBar';

function App() {
    const [icons, setIcon] = useState([
        {
            id: 0, 
            name: 'GitIcon', 
            hover: false,
        }, 
        {
            id: 1, 
            name: 'LinkedInIcon', 
            hover: false,
        },  
        {
            id: 2, 
            name: 'PDFIcon', 
            hover: false,
        }, 
        {
            id: 3, 
            name: 'EmailIcon', 
            hover: false,
        }, 
    ]); 

    const toggleHover = (index) => { 
        const newIcons = [...icons]; 
        newIcons[index].hover = !newIcons[index].hover; 
        setIcon(newIcons); 
    };
    
    return (
        <div>
      
            <h1 id='title'>Rahul Surasinghe</h1>
 
            <IconBar icons={icons} toggleHover={toggleHover}/>
            <div id='stars'></div>
            <div id='stars2'></div> 
            <div id='stars3'></div>
            
        </div>
    )

}  

export default App;
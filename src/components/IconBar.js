import React, { useState } from 'react'; 
import Icon from './Icon';

function IconBar({ icons, toggleHover }) {

  const helpfulUI = () => {
    // Need to provide a return to the function as a whole
    return icons.filter((icon) => {
      return icon.hover === true
    }).map((icon) => {
      return <h1 id='description' key={icon.id}>{icon.description}</h1>
    })
  }; 

    return ( 
      <div> 
        {helpfulUI()}
        <div id='breadcrumb'>
          {icons.map((icon) => {
            if(icon.id !== 3) {
              // Return the separator but not for the last icon
              return [<Icon key={icon.id} icon={icon} toggleHover={toggleHover}/>, <div key={'sep' + icon.id} id='separator'>/</div>]
              } else {
                return <Icon key={icon.id} icon={icon} toggleHover={toggleHover}/>
              }
          })} 
        </div>
      </div>
    )
}

export default IconBar; 
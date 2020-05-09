import React, { useState } from 'react'; 
import Icon from './Icon';

function IconBar({ icons, toggleHover }) {
    return (
      <div id='breadcrumb'>
        {icons.map((icon) => {
          if(icon.id !== 3) {
            return [<Icon key={icon.id} icon={icon} toggleHover={toggleHover}/>, <div key={'sep' + icon.id} id='separator'>/</div>]
            } else {
              return <Icon key={icon.id} icon={icon} toggleHover={toggleHover}/>
            }
        })} 
      </div>
    )

}

export default IconBar; 
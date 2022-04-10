import React from 'react'
import './info.css'
export const Info = ({color,name,title,description}) => {
  return (
    <div className="info-context">
      
      <p className="info-context-name" style={{ color:`${color}`  }}>
        {name}
      </p>
      <p className="info-context-name-heading">
        {title}
      </p>
      <p className="info-context-name-description">
        {description}
      </p>
    </div>
  );
}

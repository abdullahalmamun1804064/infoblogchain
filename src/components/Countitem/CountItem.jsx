import React from 'react'
import './countitem.css'

export const CountItem= ({count,title}) => {
  return (
    <div className='count-item'>
      <p className="count-item-number">{count}+</p>
      <p className="count-item-title">{title}</p>
    </div>
  )
}

import React from 'react'

export default function ProductItem({url, name, price}) {
  return (
    <div>

        
        <img src = {url}></img>
        <h3>Название: {name}</h3>
        <h4>Стоимость: {price}</h4>
    </div>
  )
}

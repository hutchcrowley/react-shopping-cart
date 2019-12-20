import React, { useContext } from 'react'

import { ProductContext } from '../contexts/ProductContext'
import { CartContext } from '../contexts/CartContext'

const Item = () => {
  const { image, title, price, product } = useContext(ProductContext)

  const { removeItem } = useContext(CartContext)

  return (
    <div className='shopping-cart_item'>
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button onClick={() => removeItem(product)}>Remove from cart</button>
      </div>
    </div>
  )
}

export default Item




import React from 'react'
import Item from '../Item/Item'

export default function ItemList({productos}) {

  

 

  return (
    productos.map(prod=>  <Item key={prod.id} prod={prod} />)
  )
  
}





import React from 'react'
import Card from '../Card/Card'

import './style.scss'


const Cards = ({setOpenModal, products, loading}) => {


  return (
    <div >
    {loading ?  <h1>loading...</h1> : (
      <div className='card-items'>{products && products.map(product =>( 
      <Card key={product._id} product={product} setOpenModal={setOpenModal} id={1}/>
))}
</div>
    )}
   
    
    
</div>
  )
}

export default Cards
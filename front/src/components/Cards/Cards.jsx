import React, {useEffect} from 'react'
import Card from '../Card/Card'
import './style.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
const Cards = ({setOpenModal}) => {
const dispatch = useDispatch();
const {loading, products, error, productsCount} = useSelector(state => state.products)
useEffect(() =>{
  dispatch(getProducts())
},[dispatch])

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
import React, {useEffect} from 'react'
import Slider from '../Slider/Slider';
import OpenCardRightSide from '../OpenCardRightSide/OpenCardRightSide';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getProductDetails, clearErrors } from '../../actions/productActions'

import './style.scss'
const OpenCard = ({openModal, setOpenModal}) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {loading, error, product} = useSelector(state => state.productDetails)
  useEffect(() =>{
    dispatch(getProductDetails(id))
    if (error) {
      toast.error(error);
      dispatch(clearErrors())
  }
  },[dispatch, error, id])
  return (
    <div className='container'>
    {loading ? (
      <h1>Loading...</h1>
    ) : product ? (
      <div className='open-card-items'>
        <Slider product={product} loading={loading}/>
        <OpenCardRightSide product={product} openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    ) : (
      <h1>No product found.</h1>
    )}
  </div>
  )
}

export default OpenCard
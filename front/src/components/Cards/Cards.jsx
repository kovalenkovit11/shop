import React from 'react'
import Card from '../Card/Card'
import './style.scss'
const Cards = ({setOpenModal}) => {
  return (
    <div className='card-items'>

    <Card setOpenModal={setOpenModal} id={1}/>
    <Card setOpenModal={setOpenModal} id={2}/>
    <Card setOpenModal={setOpenModal} id={3}/>
    <Card setOpenModal={setOpenModal}/>
    <Card setOpenModal={setOpenModal}/>

    </div>
  )
}

export default Cards
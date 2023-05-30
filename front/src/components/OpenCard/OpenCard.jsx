import React from 'react'
import OpenCardRightSide from '../OpenCardRightSide/OpenCardRightSide'
import Slider from '../Slider/Slider'
import './style.scss'
const OpenCard = ({openModal, setOpenModal}) => {
  return (
    <div className='container'>
        <div className='open-card-items'>
            <Slider/>
            <OpenCardRightSide openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    </div>
  )
}

export default OpenCard
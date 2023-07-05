import React from 'react'
import './style.scss'

const Delivery = () => {
  return (
    <div className='container-delivery'> 
        <div className='steps'>
            <div className='rectangle'> 1 </div>
            <div className='rect-deskr'> Доставка</div>
        </div>
        <div className='steps disabled'>
            <div className='rectangle disabled'> 1 </div>
            <div className='rect-deskr disabled'> Доставка</div>
        </div>
        <div className='steps disabled'>
            <div className='rectangle disabled'> 1 </div>
            <div className='rect-deskr disabled'> Доставка</div>
        </div>
        <div className='step4 disabled'>
            <div className='rectangle disabled'> 1 </div>
            <div className='rect-deskr disabled'> Доставка</div>
        </div>
    </div>
  )
}

export default Delivery
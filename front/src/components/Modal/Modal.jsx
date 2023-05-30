import React from 'react'
import './style.scss'


const Modal = ({openModal, setOpenModal}) => {

  return (
    <div className={openModal ? 'modal active_modal' : 'modal'}>
        <div className='modal-content'>
            <div className='modal-close__btn' >
            <div onClick={()=>setOpenModal(false)}>
                <span className='left'></span>
                <span className='right'></span>
            </div>
            
                
            </div>
            <div className='modal-circle'>
            <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.59014 9.1365L7.56723 15.1703C8.34459 15.955 9.60493 15.955 10.3823 15.1703L23.744 1.68187" stroke="#1D1B1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <div className='modal-text'>Товар доданий у кошик</div>
            <div className='modal-btns'>
                <button className='button btn-continue'>Продовжити покупки</button>
                <button className='button btn-purchase'>Оформити замовлення</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
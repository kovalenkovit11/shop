import React from 'react'
import './style.scss'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import { useState } from 'react';


const OpenCardRightSide = ({product, openModal, setOpenModal}) => {
    console.log(product);
    const [count, setCount] = useState(1)
    const priceTotal = product.price * count 
    const decreaseCount = ()=>{
        if(count  <= 1){

            setCount(+1)
        }else{
            setCount(count -1) 

        }
        return count

    }
    const increaseCount = ()=>{
        setCount(count + 1) 
        
    }
    console.log(count);
  return (
    <div className='right-side'>
        <h3 className='title'>{product.name}</h3>
        <p className='coast'>{priceTotal}грн</p>
        <div className='counter'>
            <div className={count < 2 ? "disabled" : "minus"} onClick={decreaseCount}> - </div>
            <p className='count'> {count}</p>
            <div className='plus' onClick={increaseCount}> +</div>
        </div>
        <div className='btn-group'>
        <ButtonAddToCart setOpenModal={setOpenModal} colorText='#111111' backgroundColor='#ededed' svgColor='#111' width='403px'/>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.59 19.2506C33.8868 17.442 32.199 16.1891 30.2442 16.0245C30.0592 16.0086 29.8722 16 29.6826 16C27.8844 16.0044 26.1763 16.7781 25 18.1212C23.8237 16.7781 22.1156 16.0044 20.3174 16C20.1278 16 19.9408 16.0086 19.7554 16.0248C17.8008 16.1894 16.1132 17.4422 15.41 19.2506C14.6244 21.1436 14.9851 23.3121 16.3426 24.8574L24.4609 34.0906C24.5966 34.2448 24.7932 34.3333 25.0001 34.3333C25.2069 34.3333 25.4036 34.2448 25.5392 34.0906L33.6574 24.8574C35.0149 23.3121 35.3756 21.1436 34.59 19.2506ZM32.5796 23.9327L25 32.5526L17.4206 23.9327C16.4164 22.7866 16.151 21.1798 16.7345 19.778C17.2419 18.4644 18.4646 17.5523 19.883 17.4295C20.0259 17.4167 20.1707 17.4102 20.3174 17.4102C21.9863 17.4011 23.5352 18.2658 24.3876 19.6827C24.5258 19.8824 24.7549 20.0018 24.9999 20.0018C25.2448 20.0018 25.4739 19.8824 25.6121 19.6827C26.4646 18.2657 28.0136 17.401 29.6826 17.4102C29.829 17.4102 29.9741 17.4168 30.1163 17.4295C31.5349 17.5522 32.7578 18.4642 33.2654 19.778C33.8489 21.1798 33.5838 22.7865 32.5796 23.9327Z" fill="#EDEDED"/>
<rect x="-0.5" y="0.5" width="49" height="49" rx="24.5" transform="matrix(-1 0 0 1 49 0)" stroke="#EDEDED"/>
</svg>
</div>
<div className="about-products">
    <div className="description">
        <p>Опис товару</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12.0368 15.9632L5.07366 9" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
    <div className="description">
        <p>Характеристики</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12.0368 15.9632L5.07366 9" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
    <div className="description">
        <p>Оплата та доставка</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12.0368 15.9632L5.07366 9" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  
</div>
    </div>
  )
}

export default OpenCardRightSide
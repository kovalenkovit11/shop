import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
const Card = ({ setOpenModal, product}) => {
const {price, name, _id, images} = product
console.log(images);
  const maxLength = 26
  console.log(product);
  return (
        <div className="card">
            <Link to={`/product/${_id}`}><div className="card-img">
                 <img src={images[0].url} alt="cardImage"  onClick={()=>console.log(_id)}/>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="#ededed" xmlns="http://www.w3.org/2000/svg">
<path d="M19.59 3.25063C18.8868 1.442 17.199 0.189059 15.2442 0.0245384C15.0592 0.00860254 14.8722 0 14.6826 0C12.8844 0.00437158 11.1763 0.778127 10 2.12123C8.8237 0.778127 7.11565 0.00437158 5.31741 0C5.12775 0 4.94081 0.00860254 4.75537 0.0248204C2.80077 0.189431 1.11319 1.44223 0.410033 3.25063C-0.375569 5.14359 -0.0148882 7.31207 1.34261 8.85744L9.46095 18.0906C9.59657 18.2448 9.79324 18.3333 10.0001 18.3333C10.2069 18.3333 10.4036 18.2448 10.5392 18.0906L18.6574 8.85744C20.0149 7.31207 20.3756 5.14359 19.59 3.25063ZM17.5796 7.93267L10 16.5526L2.42064 7.93267C1.41638 6.78656 1.15102 5.1798 1.73449 3.778C2.24193 2.46437 3.46463 1.55234 4.88297 1.4295C5.02593 1.41667 5.17074 1.41018 5.31741 1.41018C6.98632 1.40106 8.5352 2.26581 9.38761 3.68266C9.52579 3.88237 9.75492 4.00182 9.99986 4.00182C10.2448 4.00182 10.4739 3.88237 10.6121 3.68266C11.4646 2.26572 13.0136 1.40096 14.6826 1.41018C14.829 1.41018 14.9741 1.41681 15.1163 1.4295C16.5349 1.55215 17.7578 2.4642 18.2654 3.778C18.8489 5.17977 18.5838 6.78653 17.5796 7.93267Z" fill="#EDEDED"/>
</svg>
</div></Link>
<div className="card-title">{name.length > maxLength ? name.substring(0, maxLength- 3) + '...' : name }</div>
<div className="card-coast">{price} грн</div>
    <ButtonAddToCart setOpenModal={setOpenModal} svgColor={'#ededed'}/>
            </div>

      
  );
};

export default Card;

// import { useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';
// import { useDispatch, useSelector } from 'react-redux'
// import {getProductDetails, clearErrors } from '../../actions/productActions'
import './style.scss'

const Slider = ({product})=> {
 

  return (
   
    <div className="carousel">
           <div>
        <div>
       { product.images.length > 1 ?  <Carousel
            data={product.images}
            time={0}
            width="850px"
            height="500px"
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="0px"
            slideBackgroundColor="none"
            slideImageFit="cover"
            thumbnails={product.images.length > 1 ? true : false}
            thumbnailWidth="100px"
            style={{
                display: "flex",
                flexDirection: "column",
              textAlign: "center",
              margin: "40px auto",
            }}
          /> : <img style={{width: '557px', height: '486px', marginTop: '58px'}} src={product.images[0].image} alt={product.title}/> }
        </div>
      </div>
    </div>
  );
}

export default Slider;
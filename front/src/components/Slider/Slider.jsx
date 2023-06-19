import { useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useDispatch, useSelector } from 'react-redux'
import {getProductDetails, clearErrors } from '../../actions/productActions'
import './style.scss'
// import image1 from './header.png'
// import image2 from './Rectangle11.png'
// import image3 from './Rectangle12.png'
// import image4 from './Rectangle13.png'
// import image5 from './Rectangle14.png'
const Slider = ({match})=> {
  
//  const data = [
//     {
//       image: image1,
//     },
//     {
//       image: image2,
//     },
//     {
//       image: image3,

//     },
//     {
//       image: image4,

//     },
//     {
//         image: image5,
  
//       },
 
//   ];
const dispatch = useDispatch()
const { error, product} = useSelector(state => state.productDetails)
useEffect(() =>{
  dispatch(getProductDetails(match.params.id))
  if(error){
    alert(error);
    dispatch(clearErrors())
  }
},[dispatch, error, match.params.id])

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
          /> : product.images.map( (image) => <div className='carousel-img'> <img src={image.url} alt={product.title}/> </div>)}
        </div>
      </div>
    </div>
  );
}

export default Slider;
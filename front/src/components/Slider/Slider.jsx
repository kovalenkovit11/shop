import { Carousel } from 'react-carousel-minimal';
import './style.scss'
import image1 from './header.png'
import image2 from './Rectangle11.png'
import image3 from './Rectangle12.png'
import image4 from './Rectangle13.png'
import image5 from './Rectangle14.png'
const Slider = ()=> {
 const data = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,

    },
    {
      image: image4,

    },
    {
        image: image5,
  
      },
 
  ];


  return (
    <div className="carousel">
           <div>
        <div>
       { data.length >1 ?  <Carousel
            data={data}
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
            thumbnails={data.length > 1 ? true : false}
            thumbnailWidth="100px"
            style={{
                display: "flex",
                flexDirection: "column",
              textAlign: "center",
              margin: "40px auto",
            }}
          /> : data.map( (item) => <div className='carousel-img'> <img src={item.image} alt='card'/> </div>)}
        </div>
      </div>
    </div>
  );
}

export default Slider;
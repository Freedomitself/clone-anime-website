import './Slideimage.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from "../../assets/AdobeStock_571400016.jpeg"
import Slide2 from "../../assets/AdobeStock_592460071.jpeg"
import Slide3 from "../../assets/AdobeStock_592460176.jpeg"
import Slide4 from "../../assets/alexandre-lallemand-UtPC_kz8CAc-unsplash.jpg"
import Slide5 from "../../assets/markus-winkler-30kISztIV8w-unsplash.jpg"

const Slideimage = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className='slide'>
      <Slider {...settings} className="image">
        <div><img src={Slide1} alt="Slide1" /></div>
        <div><img src={Slide2} alt="Slide2" /></div>
        <div><img src={Slide3} alt="Slide3" /></div>
        <div><img src={Slide4} alt="Slide4" /></div>
        <div><img src={Slide5} alt="Slide5" /></div>
      </Slider>
    </div>
  )
}

export default Slideimage
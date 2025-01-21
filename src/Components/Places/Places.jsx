import placesbg from '../../assets/images/places-Background.png'
import bannerdot from '../../assets/images/banner-dot.png'
import headimg from '../../assets/images/places-gril.png'
import slider2 from '../../assets/images/Enjoy.png'
import { RxArrowRight } from "react-icons/rx";
import slider1 from '../../assets/images/slider-img.png'
import "slick-carousel/slick/slick.css";
import './Places.css'
import Slider from "react-slick";
const Places = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<RxArrowRight/>,
    
      };
  return (
    <>
    <div  className="alamin-places w-full bg-[#F1E6DA] pb-[88px]">
        <div className="container">
            <div style={{background:`url(${placesbg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="places-head-row flex justify-between items-center">
                <div className="head-text">
                    <h2 className="text-[48px] font-Poppins font-medium text-[#452112]">Places</h2>
                    <div className="flex items-center mt-[13px] mb-[29px]">
                        <div className="w-[70px] h-[1px] bg-[#FFAB53]"></div>
                        <div className="img">
                        <img src={bannerdot} alt="banner-dot" />
                        </div>
                        <div className="w-[70px] h-[1px] bg-[#FFAB53]"></div>
                    </div>
                    <p className='text-[18px] font-dm font-normal text-[#744F40] w-[420px]'>Step into the heart of our welcoming village, where
                        the warmth of community envelops you like a
                        comforting embrace.</p>
                </div>
                <div className="head-img">
                    <img src={headimg} alt="head-img" />
                </div>
            </div>
            <div className="places-slider">
            <div className="slider-container relative">
            <Slider {...settings}>
            <div>
                <div style={{background:`url(${slider1})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="slider-bg w-full p-[48px] rounded-[24px]">
                    <h2 className='text-[48px] font-dm mt-[166px] font-semibold text-white mb-[24px] '>Hearth Village</h2>
                    <p className='text-[18px] font-dm text-[#F1E6DA] mb-[176px] font-medium w-[420px]'>Step into the heart of our welcoming village, where
                        the warmth of community envelops you like a
                        comforting embrace.</p>
                </div>
            </div>
            <div>
            <div style={{background:`url(${slider2})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:"no-repeat"}} className="slider-bg w-full p-[48px] rounded-[24px]">
                    <h2 className='text-[48px] font-dm mt-[166px] font-semibold text-white mb-[24px] '>Hearth Village</h2>
                    <p className='text-[18px] font-dm text-[#F1E6DA] mb-[176px] font-medium w-[420px]'>Step into the heart of our welcoming village, where
                        the warmth of community envelops you like a
                        comforting embrace.</p>
                </div>
            </div>
            </Slider>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Places
import live from '../../assets/images/live.png'
import livebg from '../../assets/images/scenesbg.png'
import bannerdot from '../../assets/images/banner-dot.png'
const Live = () => {
  return (
    <>
     <div style={{background:`url(${livebg})`, backgroundPosition:"center", backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-scenes w-full py-[44px] md:py-[88px]">
                    <div className="container">
                        <div className="scenes-row flex flex-col-reverse md:flex-row md:justify-between md:items-center">
                            <div className="scenes-text">
                                <h2 className='text-[36px] md:text-[36px] lg:text-[48px] font-Poppins font-normal text-[#452112]  w-full md:w-[300px] lg:w-[590px] mb-[20px] md:mb-[44px]'>
                                Live the rural life with
                                friends & family</h2>
                                {/* live-dot */}
                                <div className="flex items-center mt-[13px] mb-[29px]">
                                <div className="w-[120px] md:w-[150px] lg:w-[295px] h-[1px] bg-[#FFAB53]"></div>
                                <div className="img">
                                <img src={bannerdot} alt="banner-dot" />
                                </div>
                                <div className="w-[120px] md:w-[150px] lg:w-[295px] h-[1px] bg-[#FFAB53]"></div>
                                </div>
                                {/* live p */}
                                <p className='text-[18px] font-dm font-normal text-[#744F40] w-full md:w-[300px] lg:w-[450px]'>Step into the heart of our welcoming village, where
                                the warmth of community envelops you like a
                                comforting embrace.</p>
                            </div>
                            <div className="scenes-img">
                                <img className='w-full md:w-[300px] lg:w-[513px]' src={live} alt="scenes img" />
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Live
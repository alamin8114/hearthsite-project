import enjoy from '../../assets/images/Enjoy.png'
import enjoybg from '../../assets/images/scenesbg.png'
import bannerdot from '../../assets/images/banner-dot.png'
const Enjoy = () => {
  return (
    <>
         <div style={{background:`url(${enjoybg})`, backgroundPosition:"center", backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-scenes w-full py-[268px] z-10">
                <div className="container">
                    <div className="scenes-row flex justify-between items-center">
                        <div className="scenes-img">
                            <img src={enjoy} alt="scenes img" />
                        </div>
                        <div className="scenes-text">
                            <h2 className='text-[48px] font-Poppins font-normal text-[#452112] w-[590px]'>
                            Enjoy together</h2>
                            <div className="flex items-center mt-[13px] mb-[29px]">
                                <div className="w-[295px] h-[1px] bg-[#FFAB53]"></div>
                                <div className="img">
                                <img src={bannerdot} alt="banner-dot" />
                                </div>
                                <div className="w-[295px] h-[1px] bg-[#FFAB53]"></div>
                            </div>
                            <p className='text-[18px] font-dm font-normal text-[#744F40] w-[450px]'>Step into the heart of our welcoming village, where
                            the warmth of community envelops you like a
                            comforting embrace.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Enjoy
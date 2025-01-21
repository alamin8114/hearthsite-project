import scenesimg from '../../assets/images/scenes.png'
import scenesbg from '../../assets/images/scenesbg.png'
import bannerdot from '../../assets/images/banner-dot.png'
const Scenes = () => {
  return (
    <>
    <div style={{background:`url(${scenesbg})`, backgroundPosition:"center", backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-scenes w-full py-[88px]">
        <div className="container">
            <div className="scenes-row flex justify-between items-center">
                <div className="scenes-img">
                    <img src={scenesimg} alt="scenes img" />
                </div>
                <div className="scenes-text">
                    <h2 className='text-[48px] font-Poppins font-normal text-[#452112] w-[590px] mb-[44px]'>Experience mesmerizing
                    scenes & landscapes</h2>
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

export default Scenes
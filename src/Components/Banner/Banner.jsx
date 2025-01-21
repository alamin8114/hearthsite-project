import { Link } from 'react-router-dom'
import bannerbg from '../../assets/images/Background.png'
import bannerdot from '../../assets/images/banner-dot.png'
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
  return (
    <>
        <div style={{background:`url(${bannerbg})`, backgroundPosition:'right', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-banner py-[200px] md:py-[365px] w-[100%]">
            <div className="container">
                <div className="banner-text ">
                    <h2  className=' font-normal text-[#452112] w-full md:w-[400px] font-Poppins'>
                    <TypeAnimation
                    sequence={[
                        'Escape int the rural life',
                        1000, 
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '64px', display: 'inline-block' }}
                    repeat={Infinity}
                    /></h2>
                    <div className="flex items-center mt-[8px] mb-[23px]">
                        <div className=" w-[120px] md:w-[182px] h-[1px] bg-[#FFAB53]"></div>
                        <div className="img">
                            <img src={bannerdot} alt="banner-dot" />
                        </div>
                        <div className="w-[120px] md:w-[182px] h-[1px] bg-[#FFAB53]"></div>
                    </div>
                    <p className=' text-[18px] text-gray-300 md:text-[#744F40] font-dm font-medium w-full md:w-[450px] mb-[34px]'>A heartwarming and tranquil farming sim game that
                        invites you to escape city life and embrace the
                        serene beauty of rural living. Play for free.</p>
                        <div className="banner-button">
                        <Link className="py-1 text-[16px] inline-block font-dm font-semibold text-[#003363]  sm:py-[9px] sm:px-[24px] px-[12px]  transition-all duration-[.4s] bg-gradient-to-r to-[#64DBF5] from-[#ADE3EF] rounded-[12px]">Download now</Link>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
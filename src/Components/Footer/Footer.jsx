import { GiGamepad } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import navlogo from '../../assets/images/navlogo.png'
import footerdot from '../../assets/images/meet-dot.png'
import bannerdot from '../../assets/images/banner-dot.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="alamin-footer w-full py-[80px] bg-[#EEDCC9]">
        <div className="container">
            <div className="footer-head flex flex-col md:flex-row gap-3 md:justify-between items-center">
                <h1 className="text-[32px] font-Poppins font-semibold text-[#452112]">Stay connected</h1>
                <div className="icons flex gap-[24px] items-center">
                    <GiGamepad className="text-[40px] text-gray-600 hover:text-[#452112]"/>
                    <FaYoutube className="text-[30px] text-gray-600 hover:text-[#452112]"/>
                    <IoLogoTiktok className="text-[30px] text-gray-600 hover:text-[#452112]"/>
                    <AiFillInstagram className="text-[30px] text-gray-600 hover:text-[#452112]"/>
                    <FaFacebook className="text-[30px] text-gray-600 hover:text-[#452112]"/>
                </div>
            </div>
            <div className="flex items-center justify-center my-[53px]">
                <div className="w-[150px] sm:w-[300px] md:w-[635px] h-[1px] bg-[#FFAB53]"></div>
                <div className="img">
                <img src={bannerdot} alt="banner-dot" />
                </div>
                <div className="w-[150px] sm:w-[300px] md:w-[635px] h-[1px] bg-[#FFAB53]"></div>
            </div>
            <div className="footer-menu flex flex-col lg:flex-row md:justify-between items-center">
                <div className="footer-logo">
                    <img src={navlogo} alt="footer-logo" />
                </div>
                <div className="footer-nav">
                    <ul className="flex flex-col sm:flex-row gap-[12px] md:gap-[24px] items-center">
                    <li className="hover:scale-[1.1]"><Link className="text-[16px] md:text-[24px] font-Poppins font-semibold  text-[#452112]" to={''}>News</Link></li>
                    <img className="w-[20px]" src={footerdot} alt="dot" />
                    <li className="hover:scale-[1.1]"><Link className="text-[16px] md:text-[24px] font-Poppins font-semibold  text-[#452112]" to={''}>Support</Link></li>
                    <img className="w-[20px]" src={footerdot} alt="dot" />
                    <li className="hover:scale-[1.1]"><Link className="text-[16px] md:text-[24px] font-Poppins font-semibold  text-[#452112]" to={''}>Privacy</Link></li>
                    <img className="w-[20px]" src={footerdot} alt="dot" />
                    <li className="hover:scale-[1.1]"><Link className="text-[16px] md:text-[24px] font-Poppins font-semibold  text-[#452112]" to={''}>Terms</Link></li>
                    <img className="w-[20px]" src={footerdot} alt="dot" />
                    <li className="hover:scale-[1.1]"><Link className="text-[16px] md:text-[24px] font-Poppins font-semibold  text-[#452112]" to={''}>Licenses</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
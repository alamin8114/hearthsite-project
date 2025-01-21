import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import navlogo from '../../assets/images/navlogo.png'
const Navbar = () => {
  return (
    <>
    <div className="alamin-nav py-[24px] bg-[#EEDCC9]">
        <div className="container">
            <div className="nav-row flex justify-between items-center">
            <div className="nav-logo">
                <img className=' w-[90px] sm:w-[193px]' src={navlogo} alt="nav logo" />
            </div>
            <div className="menu-nav flex gap-[12px] sm:gap-[48px] items-center">
                <div className="menu-nav-list hidden md:block">
                <ul className='flex md:gap-[20px] lg:gap-[48px]'>
                    <li><Link to={''}>Watch trailer</Link></li>
                    <li><Link to={''}>News</Link></li>
                    <li><Link to={''}>Support</Link></li>
                </ul>
                </div>
                <div className="nav-button flex gap-[8px] sm:gap-[12px]">
                <Link className="btn py-1 sm:py-[9px] sm:px-[24px] px-[12px] bg-[#F1E6DA] transition-all duration-[.4s] hover:bg-gradient-to-r to-[#64DBF5] from-[#ADE3EF] rounded-[12px]">Download now</Link>
                <Link className="btn py-[9px] px-[24px] bg-[#F1E6DA] transition-all duration-[.4s] hover:bg-gradient-to-r to-[#64DBF5] from-[#ADE3EF] rounded-[12px]">Sign in</Link>
                </div>
                <div className="res-menu block md:hidden">
                    <div className="menu-bar relative group">
                    <FaBars className='text-gray-400 hover:text-white'/>
                    <ul className=' absolute w-[120px] justify-center items-center top-[-185px] group-hover:top-[30px] transition-all duration-[.4s] bg-gray-400 rounded right-0 flex flex-col pb-2 gap-1 px-1'>
                        <li><Link to={''}>Watch trailer</Link></li>
                        <li><Link to={''}>News</Link></li>
                        <li><Link to={''}>Support</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
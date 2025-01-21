import meetbg from '../../assets/images/meet-img.png'
import meetdot from '../../assets/images/meet-dot.png'
import meetbutton1 from '../../assets/images/meet-button1.png'
import meetbutton2 from '../../assets/images/meet-button2.png'
import meetboy from '../../assets/images/banner-footer-man.png'
import meetgril from '../../assets/images/meet-gril.png'
import './Meet.css'
import { useState } from 'react'
const Meet = () => {
    const [show,setshow]=useState(true)
  return (
    <>
    <div style={{background:`url(${meetbg})`, backgroundPosition:"top", backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-meet w-full pb-[473px] z-50 mt-[-140px]">
        <div className="container">
            <div className="meet-head pt-[180px] flex gap-[24px] justify-center items-center mb-[80px] ">
                    <img className='w-[20px] h-[20px]' src={meetdot} alt="meet-dot" />
                <h2 className='text-[48px] font-Poppins text-[#452112]'>Meet the people of Hearthside</h2>
                <img className='w-[20px] h-[20px] ' src={meetdot} alt="meet-dot" />
            </div>
            <div className="meet-contain flex justify-between">
                <div className="meet-button flex flex-col gap-[12px]">
                    <button onClick={()=>setshow(!show)}><img src={meetbutton1} alt="btn-ing" /></button>
                    <button  onClick={()=>setshow(!show)}><img src={meetbutton2} alt="btn-ing" /></button>
                </div>
                {
                    show?
                    <div className="meet-img">
                        <img className='w-[420px] ' src={meetgril} alt="meet-gril"/>
                    </div>
                    :
                    <div className="meet-img">
                        <img className='w-[420px] ' src={meetboy} alt="meet-gril"/>
                    </div>
                    
                }
                <div className="meet-row">
                    <div className="meet-text w-[380px] flex flex-col justify-center items-center pt-[44px] pb-[34px] bg-gradient-to-t to-[#64DBF5] from-[#ADE3EF] rounded-[24px]">
                        <div className="flex justify-center items-center gap-[24px]">
                    <img className='w-[20px] h-[20px]' src={meetdot} alt="meet-dot" />
                    <h2 className='text-[64px] font-Poppins text-[#003363]'>Hazel</h2>
                    <img className='w-[20px] h-[20px] ' src={meetdot} alt="meet-dot" />
                        </div>
                        <p className='text-[18px] w-[280px] text-center font-dm font-medium text-[#003363]'>With auburn hair cascading in
                        gentle waves around her face and
                        twinkling hazel eyes that seem to
                        hold the secrets of the world,
                        she's the heart and soul of the
                        local tavern, aptly named "The
                        Hearthstone."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Meet
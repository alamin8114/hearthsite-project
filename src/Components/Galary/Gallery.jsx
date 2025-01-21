import meetdot from '../../assets/images/meet-dot.png'
import gallery1 from '../../assets/images/gallery-img.png'
import gallery2 from '../../assets/images/gallery-img1.png'
import gallery3 from '../../assets/images/gallery-img2.png'
import gallery4 from '../../assets/images/gallery-img3.png'
import gallery5 from '../../assets/images/gallery-img4.png'
import gallery6 from '../../assets/images/gallery-img5.png'

const Gallery = () => {
  return (
    <>
    <div className="alamin-gallery bg-[#F1E6DA] w-full py-[100px]">
        <div className="container">
            <div className="meet-head pt-[100px] flex gap-[24px] justify-center items-center mb-[80px] ">
                <img className='w-[20px] h-[20px]' src={meetdot} alt="meet-dot" />
                <h2 className='text-[48px] font-Poppins text-[#452112]'>Image gallery</h2>
                <img className='w-[20px] h-[20px] ' src={meetdot} alt="meet-dot" />
            </div>  
            <div className="gallery-row flex flex-col gap-[24px]">
            <div className="gallery-coll flex gap-[24px]">
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery1} alt="gallery-img" />
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery2} alt="gallery-img" />
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery3} alt="gallery-img" />
            </div>
            {/* col-2 */}
            <div className="gallery-coll flex gap-[24px]">
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery4} alt="gallery-img" />
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery5} alt="gallery-img" />
              <img className='w-[410px] opacity-[.80] hover:opacity-[100] transition-all duration-[.4s]' src={gallery6} alt="gallery-img" />
            </div>
            </div>         
        </div>
    </div>
    </>
  )
}

export default Gallery
import newsbg from '../../assets/images/news-bg.png'
import meetdot from '../../assets/images/meet-dot.png'
import card1 from '../../assets/images/Image2.png'
import card2 from '../../assets/images/Image1.png'
import card3 from '../../assets/images/Image.png'
import newsdot from '../../assets/images/newsdot.png'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
    <div className="alamin-news bg-[#F1E6DA] w-full">
        <div style={{background:`url(${newsbg})`, backgroundPosition:'top', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-news-bg w-full pb-[100px]">
        <div className="container">
            <div className="meet-head pt-[180px] flex gap-[24px] justify-center items-center mb-[80px] ">
                <img className='w-[20px] h-[20px]' src={meetdot} alt="meet-dot" />
                <h2 className='text-[48px] font-Poppins text-[#452112]'>News</h2>
                <img className='w-[20px] h-[20px] ' src={meetdot} alt="meet-dot" />
            </div>
            <div className="news-row flex flex-col md:flex-wrap gap-[20px] lg:gap-0 lg:flex-row justify-center items-center lg:justify-between">
                <div className="single-card">
                    <img className= 'w-[310px] sm:w-[410px]' src={card1} alt="card-img" />
                    <div className="card-text bg-[#F1E6DA]  w-[310px] sm:w-[410px] rounded-b-[24px] pl-[24px]">
                    <div className="flex gap-[10px] items-center pt-[24px] ">
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>March 18, 2024</h2>
                        <img className='w-[9px]' src={newsdot} alt="news-dot" />
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>Promotions</h2>
                    </div>
                    <h1 className='text-[24px] font-dm font-semibold text-[#452112] pt-[16px]'>Natus Quas Et</h1>
                    <p className=' text-[16px] font-dm text-[#744F40] font-medium pt-[15px] pb-[230px] w-full md:w-[360px]' >Voluptatem eveniet voluptates. Doloremque ut
                        et. Ducimus tempore quod laborum dolores
                        minima tempore minima quia. Dolorem mollitia
                        nesciunt ad aperiam ea et. Placeat expedita et
                        deserunt velit corrupti incidunt. Non non placeat
                        ut. Eiu</p>
                    </div>
                </div>
                {/* card-2 */}
                <div className="single-card">
                    <img className= 'w-[310px] sm:w-[410px]' src={card2} alt="card-img" />
                    <div className="card-text bg-[#F1E6DA]  w-[310px] sm:w-[410px] rounded-b-[24px] pl-[24px]">
                    <div className="flex gap-[10px] items-center pt-[24px] ">
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>March 18, 2024</h2>
                        <img className='w-[9px]' src={newsdot} alt="news-dot" />
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>Updates</h2>
                    </div>
                    <h1 className='text-[24px] font-dm font-semibold text-[#452112] pt-[16px]'>Ullam Impedit</h1>
                    <p className=' text-[16px] font-dm text-[#744F40] font-medium pt-[15px] pb-[255px] w-full md:w-[360px]' >Maxime aut qui voluptatum et quo dolores ut
                    recusandae quod. Est voluptatibus voluptatibus
                    vel voluptas qui doloribus deleniti voluptas
                    architecto. Omnis ullam atque sapiente ea
                    doloremque earum.</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="single-card">
                    <img className= 'w-[310px] sm:w-[410px]' src={card3} alt="card-img" />
                    <div className="card-text bg-[#F1E6DA]  w-[310px] sm:w-[410px] rounded-b-[24px] pl-[24px]">
                    <div className="flex gap-[10px] items-center pt-[24px] ">
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>March 18, 2024</h2>
                        <img className='w-[9px]' src={newsdot} alt="news-dot" />
                        <h2 className='text-[16px] font-medium font-dm text-[#744F40]'>Updates</h2>
                    </div>
                    <h1 className='text-[24px] font-dm font-semibold text-[#452112] w-[250px] pt-[16px]'>Quibusdam Inventore
                    Quisquam Expedita</h1>
                    <p className=' text-[16px] font-dm text-[#744F40] font-medium pt-[15px] pb-[224px] w-full md:w-[360px]' >Sint voluptas et sed impedit atque eum. Facere
                        eius assumenda voluptatem velit. Unde deserunt
                        laborum praesentium pariatur beatae
                        temporibus rerum. Illo voluptatibus aspernatur
                        eu</p>
                    </div>
                </div>
            </div>
            <div className="news-btn  mt-[80px]  flex justify-center ">
                <Link className='text-[16px] px-[24px] py-[9px] hover:scale-[1.1] hover:bg-[#d1b89c] transition-all duration-[.4s] bg-[#F1E6DA] w-[126px] rounded-[12px] font-dm font-semibold text-[#452112] '>Browse all</Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default News
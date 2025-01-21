
import bannerFooter from '../../assets/images/Section.png'
import bannerman from '../../assets/images/banner-footer-man.png'
import bannervideo from '../../assets/images/Container.png'
const BannerFooter = () => {
  return (
    <>
    <div style={{background:`url(${bannerFooter})`, backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:'no-repeat'}}  className="alamin-banner-footer w-full relative  h-[650px]">
      <div className="container">
        <div className="banner-footer-row">
          <div className="img absolute top-[-130px] z-30 left-[50%] translate-x-[-50%]">
            <img src={bannerman} alt="" />
          </div>
        </div>
        <div className="youtube-vidio-box flex justify-center pt-[100px]">
          <img className='z-50 opacity-[.950] hover:opacity-[100]' src={bannervideo} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default BannerFooter
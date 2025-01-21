import BannerFooter from "../Components/Banner-footer/BannerFooter"
import Banner from "../Components/Banner/Banner"
import Enjoy from "../Components/Enjoy/Enjoy"
import Footer from "../Components/Footer/Footer"
import Gallery from "../Components/Galary/Gallery"
import Live from "../Components/Live/Live"
import Meet from "../Components/Meet/Meet"
import News from "../Components/News/News"
import Places from "../Components/Places/Places"
import Scenes from "../Components/Scenes/Scenes"
import Update from "../Components/Update/Update"

const Home = () => {
  return (
    <>
    <Banner/>
    <BannerFooter/>
    <Scenes/>
    <Live/>
    <Enjoy/>
    <Meet/>
    <Places/>
    <News/>
    <Gallery/>
    <Update/>
    <Footer/>
    </>
  )
}

export default Home
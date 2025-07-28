
import BestsellerProducts from '../layout/BestsellerProducts'
import Blog from '../layout/Blog'
import Carousel from '../layout/Carousel'
import Clients from '../layout/Clients'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import PrimaryPopularCard from '../layout/PrimaryPopularCard'
import PrimaryProductCards from '../layout/PrimaryProductCards'
import SecondaryPopularCard from '../layout/SecondaryPopularCard'
import SecondaryProductCards from '../layout/SecondaryProductCards'
import ShopCards from '../layout/ShopCards'

function HomePage() {
  return (
    <>
    <Header />
    <Carousel />
    <ShopCards />
    <PrimaryProductCards />
    <PrimaryPopularCard />
    <SecondaryProductCards />
    <SecondaryPopularCard/>
    <BestsellerProducts />
    <Clients />
    <Blog />
    <Footer />
    </>
  )
}

export default HomePage
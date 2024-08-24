import Hero from '../components/Hero'
import CategoryNav from '../components/CategoryNav'
import MostLiked from '../components/MostLiked'
import CardContainer from '../components/CardContainer'
import '../components/components.css'
import CardsHeading from '../components/CardsHeading'

const HomePage = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
        <div className='mt-1 mb-1'>
          <Hero/>
          <CategoryNav/>
        </div>
        <div className="overflow-y-auto scrollbar-hide">
          <MostLiked/>
          <CardsHeading title='Browse Recipes'/>
          <CardContainer/>
        </div>
    </div>
  )
}

export default HomePage
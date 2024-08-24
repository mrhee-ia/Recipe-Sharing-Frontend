import Hero from '../components/Hero'
import CategoryNav from '../components/CategoryNav'
import MostLiked from '../components/MostLiked'
import CardContainer from '../components/CardContainer'
import '../components/components.css'

const HomePage = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
        <div className='mt-1 mb-1'>
          <Hero/>
          <CategoryNav/>
        </div>
        <div className="overflow-y-auto scrollbar-hide">
          <MostLiked/>
          <div className="flex items-center mt-2 mb-2">
            <div className="flex-1"></div>
            <h3 className="px-6 text-white text-xl">Browse Recipes</h3>
            <div className="flex-1"></div>
          </div>
          <CardContainer/>
        </div>
    </div>
  )
}

export default HomePage
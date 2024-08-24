import Hero from '../components/Hero'
import CategoryNav from '../components/CategoryNav'
import MostLiked from '../components/MostLiked'
import CardContainer from '../components/CardContainer'
import '../components/components.css'

const HomePage = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
        <Hero/>
        <CategoryNav/>
        <div className="overflow-y-auto scrollbar-hide">
            <CardContainer/>
        </div>
    </div>
  )
}

export default HomePage
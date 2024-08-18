import foods from '../foods.json'
import CardContent from './CardContent'

const CardContainer = () => {
  return (
    <section className="bg-yellow-50 px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* <!-- Recipe Card --> */}
          {foods.map((food) => (
              <CardContent key={food.id} food={food}/>
          ))}
        </div>
    </section>
  )
}

export default CardContainer
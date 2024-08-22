import { useState, useEffect } from 'react'
import CardContent from './CardContent'

const CardContainer = () => {

  const [foods, setFoods] = useState([])

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/foods')
          const jsonData = await response.json()
          setFoods(jsonData)
        } catch (error) {
          console.log(error)
        }
      };
      fetchData();
    }, []
  )

  return (
    <section className="bg-yellow-50 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* <!-- Recipe Card --> */}
          {foods.map((food) => (
              <CardContent key={food.id} food={food}/>
          ))}
        </div>
    </section>
  )
}

export default CardContainer
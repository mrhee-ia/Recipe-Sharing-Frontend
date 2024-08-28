import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CardContent from './CardContent'

const CardContainer = ({url = '/foods'}) => {

  const [foods, setFoods] = useState([])

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api${url}`)
          const jsonData = await response.json()
          setFoods(jsonData)
        } catch (error) {
          console.log(error)
        }
      };
      fetchData();
    }, [url]
  )

  return (
    <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* <!-- Recipe Card --> */}
          {foods.map((food) => (
              <Link to={`/foods/${food.id}`}>
                <CardContent key={food.id} food={food}/>
              </Link>
          ))}
        </div>
    </section>
  )
}

export default CardContainer
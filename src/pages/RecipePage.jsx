import { useParams, useLoaderData, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const foodLoader = async ({params}) => {
    const response = await fetch(`/api/foods/${params.id}`)
    const jsonData = await response.json()
    return jsonData
}

const RecipePage = () => {

    const {id} = useParams()
    const food = useLoaderData()

    return (
        <div>{food.recipe}</div>
    )
}

export {RecipePage as default, foodLoader}
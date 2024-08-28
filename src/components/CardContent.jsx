import {FaThumbsUp, FaComments} from 'react-icons/fa'
import CardMedia from './CardMedia'

const CardContent = ({food}) => {

    let description = food.description.substring(0, 101) + "..."

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className='p-3'>
                <div className='mb-2 ml-2 text-gray-400'>{food.category}</div>
                <div className='mb-4 px-4'>
                    <CardMedia media={food.media}/>
                </div>
                <div className='m-2 w-full h-30 overflow-hidden'>
                    <p className='text-md font-bold'>{food.recipe}</p>
                    <p className='text-sm'>{description + " "}
                        <span className='text-green-600 hover:text-green-800'>read more</span>
                    </p>
                </div>
                <div className='mb-4 border border-gray-200'></div>
                <div className='mr-2 ml-2 flex flex-col lg:flex-row justify-between'>
                    <div className='mb-1 text-green-700'>
                        <button><FaThumbsUp className='inline text-md mb-2 mr-1'/>
                            <span className='text-sm'>{food.likes} Likes</span>
                        </button>
                    </div>
                    <div className='mb-1 text-blue-700'>
                        <button><FaComments className='inline text-md mb-1 mr-1'/>
                            <span className='text-sm'>{food.comments} Comments</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContent
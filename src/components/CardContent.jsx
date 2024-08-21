import React, {useState} from 'react'
import {FaThumbsUp, FaComments} from 'react-icons/fa'
import CardMedia from './CardMedia'

const CardContent = ({food}) => {

    const [fullView, setFullView] = useState(false)
    let description = food.description
    if (!fullView) {
        description = description.substring(0, 101) + "..."
    }

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-2 ml-2 text-gray-400'>{food.category}</div>
                <div className='mb-4 px-4'>
                    <CardMedia media={food.media}/>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 text-xl font-bold'>{food.recipe}</h3>
                    <div className='mb-2 text-sm'>{description + " "}
                        <button
                            className='text-green-600 hover:text-green-800'
                            onClick={() => setFullView( (prevState)=>!prevState )}>
                            { fullView ? 'view less' : 'read more'}
                        </button>
                    </div>
                </div>
                <div className='mb-5 border border-gray-100'></div>
                <div className='mr-2 ml-2 flex flex-col lg:flex-row justify-between'>
                    <div className='mb-2 text-green-700'>
                        <button><FaThumbsUp className='inline text-xl mb-2 mr-2'/>
                            <span className='text-sm'>{food.likes} Likes</span>
                        </button>
                    </div>
                    <div className='mb-2 text-blue-600'>
                        <button><FaComments className='inline text-xl mb-2 mr-2'/>
                            <span className='text-sm'>{food.comments} Comments</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContent
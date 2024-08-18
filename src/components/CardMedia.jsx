const CardMedia = ({media}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-3xl overflow-hidden">
        <img className="w-full h-48 object-cover" src={media} alt="Media" />
    </div>
  )
}

export default CardMedia
const CardsHeading = ({title}) => {
  return (
    <div className="flex items-center mt-2 mb-2">
        <div className="flex-1"></div>
        <h3 className="px-6 text-white text-2xl">{title}</h3>
        <div className="flex-1"></div>
    </div>
  )
}

export default CardsHeading
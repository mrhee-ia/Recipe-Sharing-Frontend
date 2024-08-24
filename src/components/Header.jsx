const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white">
      {/* Left Side (Logo) */}
      <div className="flex items-center space-x-4">
        <img src="https://i.pinimg.com/originals/78/24/70/782470772ec88649090e1d5054259629.jpg" alt="Logo" className="h-10"/>
        <span className="text-xl font-semibold">RecipeSpree</span>
      </div>
      {/* Right Side (Search) */}
      <div className="flex items-center rounded-[50px] p-0.5 bg-gradient-to-r from-green-500 to-blue-500">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-[50px] bg-white text-black"
        />
      </div>
    </header>
  )
}
export default Header
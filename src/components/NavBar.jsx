import {NavLink} from 'react-router-dom'

const NavBar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 px-4 bg-orange-500 text-white'
      : 'block py-2 px-4 hover:bg-orange-500 hover:bg-opacity-60 text-white'

  return (
    <aside className="w-1/5 py-4 mr-5 border-r-2 border-gray-300">
      <div className="flex flex-col items-center pt-2 mb-6">
        <div className="mb-2 p-0.5 w-21 h-21 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
          <img src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="User Profile" 
            className="w-20 h-20 rounded-full object-cover" />
        </div>
        <div className="text-center">
          <p className="text-white text-md">Ma. Cristina M. Pasague</p>
          <p className="text-white text-sm">@areeyahs</p>
        </div>
      </div>
      <nav className="space-y-2">
          <NavLink to="user-profile" className={linkClass}>User Profile</NavLink>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="my-recipes" className={linkClass}>My Recipes</NavLink>
          <NavLink to="liked-recipes" className={linkClass}>Liked Recipes</NavLink>
          <NavLink to="notifications" className={linkClass}>Notifications</NavLink>
          <NavLink to="settings" className={linkClass}>Settings</NavLink>
      </nav>
    </aside>
  )
}

export default NavBar
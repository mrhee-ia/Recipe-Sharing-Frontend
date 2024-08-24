import {NavLink} from 'react-router-dom'

const NavBar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 px-4 bg-orange-500 text-white'
      : 'block py-2 px-4 hover:bg-orange-500 hover:bg-opacity-60 text-white'

  return (
    <aside className="w-1/5 py-4 mr-5 border-r-2 border-gray-300">
        <nav className="space-y-4">
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
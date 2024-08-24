import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <aside className="w-1/5 py-2">
        <nav className="space-y-4">
            <NavLink to="user-profile" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">User Profile</NavLink>
            <NavLink to="/" className="block py-2 px-3 bg-blue-500 text-white text-white">Home</NavLink>
            <NavLink to="my-recipes" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">My Recipes</NavLink>
            <NavLink to="liked-recipes" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Liked Recipes</NavLink>
            <NavLink to="notification" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Notifications</NavLink>
            <NavLink to="settings" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Settings</NavLink>
        </nav>
    </aside>
  )
}

export default NavBar
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <aside className="w-1/5 py-2">
        <nav className="space-y-4">
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">User Profile</Link>
            <Link to="#" className="block py-2 px-3 bg-blue-500 text-white text-white">Home</Link>
            <Link to="my-recipes" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">My Recipes</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Liked Recipes</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Notifications</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white text-white">Settings</Link>
        </nav>
    </aside>
  )
}

export default NavBar
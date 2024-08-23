import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <aside className="w-1/5 bg-indigo-500 py-2">
        <nav className="space-y-4">
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white">User Profile</Link>
            <Link to="#" className="block py-2 px-3 bg-blue-500 text-white">Home</Link>
            <Link to="my-recipes" className="block py-2 px-3 hover:bg-blue-500 hover:text-white">My Recipes</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white">Liked Recipes</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white">Notifications</Link>
            <Link to="#" className="block py-2 px-3 hover:bg-blue-500 hover:text-white">Settings</Link>
        </nav>
    </aside>
  )
}

export default NavBar
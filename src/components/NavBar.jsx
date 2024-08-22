const NavBar = () => {
  return (
    <aside className="w-1/5 bg-yellow-200 py-2">
        <nav className="space-y-4">
            <a href="#" className="block py-2 pl-3 pr-1 bg-blue-500 text-white">User Profile</a>
            <a href="#" className="block py-2 pl-3 pr-1 hover:bg-blue-500 hover:text-white">Home</a>
            <a href="#" className="block py-2 pl-3 pr-1 hover:bg-blue-500 hover:text-white">My Recipes</a>
            <a href="#" className="block py-2 pl-3 pr-1 hover:bg-blue-500 hover:text-white">Liked Recipes</a>
            <a href="#" className="block py-2 pl-3 pr-1 hover:bg-blue-500 hover:text-white">Notifications</a>
            <a href="#" className="block py-2 pl-3 pr-1 hover:bg-blue-500 hover:text-white">Settings</a>
        </nav>
    </aside>
  )
}

export default NavBar
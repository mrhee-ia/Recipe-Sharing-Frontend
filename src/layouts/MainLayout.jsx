import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className="flex flex-grow overflow-hidden">
          <NavBar/>
          <main className="w-4/5">
            <Outlet/>
          </main>
        </div>
    </div>
  )
}

export default MainLayout
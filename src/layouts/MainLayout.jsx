import Header from "../components/Header";
import NavBar from "../components/NavBar";

const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className="flex flex-grow">
          <NavBar/>
          <main className="w-4/5">
            {children}
          </main>
        </div>
    </div>
  )
}

export default MainLayout
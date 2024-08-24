import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import MyRecipesPage from './pages/MyRecipesPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='user-profile' element={<MyRecipesPage/>} />
      <Route path='/my-recipes' element={<MyRecipesPage/>} />
      <Route path='liked-recipes' element={<MyRecipesPage/>} />
      <Route path='notifications' element={<MyRecipesPage/>} />
      <Route path='settings' element={<MyRecipesPage/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

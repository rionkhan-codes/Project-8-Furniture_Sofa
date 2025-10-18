
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Shop } from './pages/Shop'
import { Contact } from './pages/Contact'
import { BlogPage } from './pages/BlogPage'
import { LogInPage } from './pages/LogInPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element = {<LayoutOne/>}>
    <Route index element = {<Home/>}/>
    <Route path='/shop' element = {<Shop/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/blog' element = {<BlogPage/>}/>
    <Route path='/about' element = {<About/>}/>
    </Route>
    <Route path='/registerPage' element = {<RegisterPage/>}/>
    <Route path='/LogInPage' element = {<LogInPage/>}/>
  </Route>
))

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomepageRouter from './routes/HomepageRouter'
import LandingPage from './pages/LandingPage'
import './App.css'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Contact from './pages/Contact'

export default function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <HomepageRouter/>,
      children : [
        {index: true, element: <LandingPage/>},
        {path : "/about", element: <About/>},
        {path : "/services", element: <ServicesPage/>},
        {path : "/contact", element: <Contact/>}
      ]
    }
  ])

  return (<RouterProvider router = {routes}/>)
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomepageRouter from './routes/HomepageRouter'
import LandingPage from './pages/LandingPage'
import './App.css'

export default function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <HomepageRouter/>,
      children : [
        {index: true, element: <LandingPage/>}
      ]
    }
  ])

  return (<RouterProvider router = {routes}/>)
}

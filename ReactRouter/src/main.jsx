import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"user/:userId",
        element: <User />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

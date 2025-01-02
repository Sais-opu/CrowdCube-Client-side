import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Root from './Root.jsx'
import AuthProvider from './Component/Provider/authProvider.jsx'
import Register from './Component/Register/Register.jsx'
import Login from './Component/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      {
        path: '/register', element: <Register></Register>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)

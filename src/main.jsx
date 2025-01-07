import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Root from './Root.jsx'
import AuthProvider from './Component/Provider/authProvider.jsx'
import Register from './Component/Register/Register.jsx'
import Login from './Component/Login/Login.jsx'
import ErrorPage from './Component/Errorpage.jsx'
import RunningCampaigns from './Component/Home/RunningCampaigns.jsx'
import AllCampaigns from './assets/AllCampaign/AllCampaigns.jsx'
import CampaignDetails from './Component/CampaignDetails/CampaignDetails.jsx'
import AddCampaign from './Component/AddCampaign/AddCampaign.jsx'
import MyCampaign from './Component/MyCampaign/MyCampaign.jsx'
import UpdateCampaign from './Component/Update/updateCampaign.jsx'
import PrivateRoute from './Component/PrivateRoute.jsx'
import Donation from './Donation.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      {
        path: '/register', element: <Register></Register>
      },
      { path: '/running-campaigns', element: <RunningCampaigns></RunningCampaigns> },
      { path: '/campaigns', element: <AllCampaigns></AllCampaigns> },
      { path: '/campaign/:id', element: <CampaignDetails></CampaignDetails> },
      { path: '/addCampaign', element: <PrivateRoute> <AddCampaign></AddCampaign></PrivateRoute> },
      {
        path: '/myCampaign',
        element:<PrivateRoute> <MyCampaign></MyCampaign></PrivateRoute>
      },
      { path: '/updateCampaign/:id', element: <UpdateCampaign></UpdateCampaign> },
      {path: '/donation', element: <PrivateRoute><Donation></Donation></PrivateRoute>}
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

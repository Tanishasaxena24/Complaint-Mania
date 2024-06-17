import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import UserAdminPage from './components/userAdminPage/UserAdminPage.jsx'
import UserComplaint from './components/userComplaint/UserComplaint.jsx'
import LoginAdmin from './components/loginAdmin/LoginAdmin.jsx'
import LoginUser from './components/loginUser/LoginUser.jsx'
import SignupUser from './components/signupUser/SignupUser.jsx'
import SignupAdmin from './components/signupAdmin/SignupAdmin.jsx'
import AdminDashboard from './components/adminDashboard/AdminDashboard.jsx'
import Explore from './components/explore/Explore.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='complaint' element={<UserComplaint/>}/>
      <Route path='loginsignup' element={<UserAdminPage/>}/>
      <Route path='admin' element={<LoginAdmin/>}/>
      <Route path='user' element={<LoginUser/>}/>
      <Route path='signupuser' element={<SignupUser/>}/>
      <Route path='signupadmin' element={<SignupAdmin/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='admindashboard' element={<AdminDashboard/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

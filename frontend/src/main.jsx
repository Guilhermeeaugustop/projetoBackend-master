import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import Login from './Components/Paginas/Login.jsx';
import SingIn from './Components/Paginas/SingIn.jsx';
import Site from './Components/Paginas/Site.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,
  },
  {
    path:"/Site",
    element: <Site/>
    },
  {
    path:"/SingIn",
    element: <SingIn />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

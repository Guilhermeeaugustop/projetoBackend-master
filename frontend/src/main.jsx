import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Login from './Components/Paginas/Login.jsx';
import SingIn from './Components/Paginas/SingIn.jsx';
import Site from './Components/Paginas/Site.jsx';

import RequireAuth from './auth/RequireAuth.jsx';
import RedirectIfAuthed from './auth/RedirectIfAuthed.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  // público: redireciona pro /Site se já estiver logado
  { path: "/", element: (
      <RedirectIfAuthed>
        <Login />
      </RedirectIfAuthed>
    )
  },
  { path: "/SingIn", element: (
      <RedirectIfAuthed>
        <SingIn />
      </RedirectIfAuthed>
    )
  },

  // privado: só entra se estiver logado
  { path: "/Site", element: (
      <RequireAuth>
        <Site />
      </RequireAuth>
    )
  },

  // fallback
  { path: "*", element: <Navigate to="/" replace /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

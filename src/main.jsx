import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvier';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
    </React.StrictMode>,
  </AuthProvider>
)

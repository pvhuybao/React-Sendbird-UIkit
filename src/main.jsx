import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Test from './components/Test'
import Test2 from './components/Test2'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Test/>
  },
  {
    path: '/test',
    element: <Test2/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {Memories} from './pages/Memories'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Photos } from './pages/Photos/Photos'

const router = createBrowserRouter([
  {
    path: "/react-guy-project/",
    element: <Home/>
  },
  {
    path: "/react-guy-project/memories",
    element: <Memories/>
  },
  {
    path: "/memories/photos",
    element: <Photos/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

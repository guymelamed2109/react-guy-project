import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {Memories} from './pages/Memories'
import {Navbar} from './components/Navbar'
import App from './App'
import './index.css'
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
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
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path= "/react-guy-project/" element={ <Home/>} />
    <Route  path= "/react-guy-project/memories" element={ <Memories/>} />
    <Route  path= "/memories/photos" element={ <Photos/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/sojida/MainSection.jsx'
import Personal from './components/pages/HomePage.jsx'
import Catalog from './components/shxsh/Kiyim.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Basket from './components/pages/Basket.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      }, {
        path: "/personal",
        element: <Personal />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/basket",
        element: <Basket/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

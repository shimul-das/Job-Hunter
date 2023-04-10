import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductLoader from './Components/loaders/CartProductLoader/CartProductLoader';
import Checkout from './Components/Checkout/Checkout';
import HomeMain from './Components/HomeMain/HomeMain';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Error from './Components/error/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<HomeMain></HomeMain>
      },
      {
        path:'Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

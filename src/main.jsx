import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import PopularCategories from './Pages/Category/PopularCategories';
import Toyota from './BrandPage/Toyota/Toyota';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        // loader:()=>fetch('http://localhost:5000/cars')
        loader:()=>fetch("/brand.json")
      },
      {
          path:"/",
          element:<PopularCategories></PopularCategories>,
          
          
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path: "/brand/:brandName",
        element:<Toyota></Toyota>,
        loader:()=>fetch(`http://localhost:5000/cars`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)

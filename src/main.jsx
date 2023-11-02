import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import MyCart from './Pages/MyCart/MyCart';
import AddProduct from './Pages/AddProduct/AddProduct';
import ContactUs from './Pages/ContactUs/ContactUs';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import BrandProduct from './Pages/BrandProduct/BrandProduct';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path:"/product/:brand_name",
        element: <BrandProduct></BrandProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.brand_name}`)

      },


      {
        path :"/mycart",
        element : <PrivateRoute>
                  <MyCart></MyCart>
                  </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path :"/addproduct",
        element : <PrivateRoute>
                  <AddProduct></AddProduct>
                  </PrivateRoute>
      },
      {
        path : "/contactus",
        element : <ContactUs> </ContactUs>
      },
      {
        path : "/updateProduct/:id",
        element : <PrivateRoute>
                  <UpdateProduct></UpdateProduct>
                  </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:"/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      }
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import './App.css'
import {Home} from './Components/Pages/Home';
import { Services } from './Components/Pages/Services';
import { Products } from './Components/Pages/Products';
import { SignUp } from './Components/Pages/SignUp';

const router = createBrowserRouter([{
    path: "/",
    element:
    <>
    <App/> 
    <Home/>
    <Services/>
    <Products/>
    <SignUp/>
    

    </> 
},

 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <RouterProvider router={router} />
    {/* <App /> */}
    </>
);


reportWebVitals();

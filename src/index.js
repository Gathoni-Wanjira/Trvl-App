import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Components/Pages/Home';
const router = createBrowserRouter([{
    path: "/",
    element:<><App/> <Home/></> 
},
{
    path: "/home",
    element: <Home/>
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <RouterProvider router={router} />
    {/* <App /> */}
    </>
);


reportWebVitals();

import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import { ContactPage } from './component/Contacts';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { BookPage } from './component/pages/book';
import { LoginPage } from './component/pages/login';
import { Home } from './component/Home';


const LayOut =()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut/>,
      errorElement: <div>404 not found </div>,
      children: [
        { index: true, element: <Home/> }
        ,
        {
          path: "contacts",
          element: <ContactPage/>,
        },
        {
         
          path: "Books",
          element: <BookPage/>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage/>,
      
    },
  ]);

  return (
    <>

    <RouterProvider router={router} /> 
    </>
  );
}

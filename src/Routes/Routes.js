import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import SignUp from '../Pages/SignUp/SignUp';
import UserProfiles from '../Pages/UserProfiles/UserProfiles';


const Routes =createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'resetPassword',
        element:<ResetPassword></ResetPassword>
      },
      {
        path:'userProfiles',
        element:<UserProfiles></UserProfiles>
      },
    ]
  }
])

export default Routes;
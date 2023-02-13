import React from "react";
import { useContext } from "react";
import { createContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Sppiner/Sppiner";
import { AuthContext } from "../Contexts/AuthProvider";


const PrivateRouteContext = createContext();

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);



  if (loading) {
    
    return <Spinner></Spinner>

  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
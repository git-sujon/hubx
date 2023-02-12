import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
  <>
   <RouterProvider router={Routes}></RouterProvider>
   <Toaster />
   </>
  );
};

export default App;
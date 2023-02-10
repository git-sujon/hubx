import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';

const App = () => {
  return (
   <RouterProvider router={Routes}></RouterProvider>
  );
};

export default App;
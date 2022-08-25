import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './router/AppRoutes';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>
);


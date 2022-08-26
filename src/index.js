import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <ChakraProvider>
    <AppRoutes />
  </ChakraProvider>
);


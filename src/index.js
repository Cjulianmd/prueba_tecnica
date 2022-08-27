import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';


ReactDOM.render(
  <ChakraProvider>
    <AppRoutes />
  </ChakraProvider>,
  document.getElementById('root') || document.createElement('div')
);


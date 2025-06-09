import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/theme'; // Import your custom theme
import './assets/css/App.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
);

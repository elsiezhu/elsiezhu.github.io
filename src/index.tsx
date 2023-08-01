import React from 'react';
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from "@nextui-org/react";
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      	<App />
    </NextUIProvider>
  </React.StrictMode>
);

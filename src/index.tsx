import React from 'react';
import ReactDOM from 'react-dom/client';
import { grommet, Grommet } from 'grommet';
import App from './App';

const theme = grommet;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Grommet theme={theme}>
            <App />
        </Grommet>
    </React.StrictMode>
);

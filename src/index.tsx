import React from 'react';
import ReactDOM from 'react-dom/client';
import { grommet, Grommet } from 'grommet';
import App from './App';
import { deepMerge } from 'grommet/utils';

const colors = {
    // brand: '#00563f',
    // brand: '#327765',
    brand: '#3e7868',
};
  
const theme = deepMerge(grommet, {
    global: {
        colors
    }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Grommet theme={theme}>
            <App />
        </Grommet>
    </React.StrictMode>
);

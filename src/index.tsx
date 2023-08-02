import React from 'react';
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from "@nextui-org/react";
import App from './App';
import './input.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="light text-foreground bg-background">
                <App />
            </main>
        </NextUIProvider>
    </React.StrictMode>
);

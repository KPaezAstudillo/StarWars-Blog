import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { DataContextProvider } from './store/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataContextProvider>
        <App />
    </DataContextProvider>
);


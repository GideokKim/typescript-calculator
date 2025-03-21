import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalculatorUI } from './components/CalculatorUI';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <CalculatorUI />
    </React.StrictMode>
); 
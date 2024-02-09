import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const container = document.getElementById('root');
if (!(container instanceof HTMLElement)) throw new Error('Testing playground root is missing');
createRoot(container).render(<React.StrictMode><App /></React.StrictMode>);

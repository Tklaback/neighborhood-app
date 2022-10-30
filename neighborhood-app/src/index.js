import React from 'react';
import ReactDOM from 'react-dom/client';
import  { App, About, Profile } from './App.js';

import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/About' element={<About />} />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
);

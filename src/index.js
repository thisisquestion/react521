import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import "./assets/css/ui.css"
import "./assets/css/base.css"
import {BrowserRouter} from "react-router-dom";
import "./library/font"


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
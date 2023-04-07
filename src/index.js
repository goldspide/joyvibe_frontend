import React from 'react';
import * as  ReactDOM  from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';


var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>  
<App/>
</Router>,
);

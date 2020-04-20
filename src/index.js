//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//include bootstrap npm library into the bundle
import 'bootstrap/dist/css/bootstrap.css';

//import your own components
import App from './Component/App.jsx';

//render your react application
ReactDOM.render(<App/>,document.getElementById('app'));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoogleMapsContainer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GoogleMapsContainer />, document.getElementById('root'));
registerServiceWorker();

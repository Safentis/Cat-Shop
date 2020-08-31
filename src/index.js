if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js').then(registration => {
        console.log(registration);
    }).catch(error => {
        console.log(error);
    });
}

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
 
import App from './components/App';

ReactDOM.render(  
    <App/>,
    document.getElementById('root')
);

module.hot.accept(); 
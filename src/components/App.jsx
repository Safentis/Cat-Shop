import React, {useState, useEffect} from 'react';
import './App.scss';

import Header from './Header/Header';
import Main from './Main/Main';

const App = (props) => {
    return (
        <div className="content-wrapper">
            <Header />
            <Main /> 
        </div>
    )
}

export default App;
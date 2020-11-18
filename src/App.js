import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom"
import Header from './Components/Header'
import Routes from './Routes'

function App() {
    return (
        <div className='dom'>
            <Router>
                <Header />
                <Routes /> 
            </Router>
        </div>
    );
}

export default App;

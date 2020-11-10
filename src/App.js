import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Header from './Components/Header'
import Students from './Components/Students'
import Assignments from './Components/Assignments'
import Reporting from './Components/Reporting'

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div>
                    <Switch>
                        <Route path="/students">
                            <Students/>
                        </Route>
                        <Route path="/assignments">
                            <Assignments/>
                        </Route>
                        <Route path="/reporting">
                            <Reporting/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

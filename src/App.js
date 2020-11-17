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
import Settings from './Components/Settings'
import Account from './Components/Account'

function App() {
    return (
        <div className='dom'>
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
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/account">
                            <Account/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

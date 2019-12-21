import React from 'react';
import './reset.scss'
import Header from "./components/HomePage/Header";
import CreateNewPost from "./components/CreateNewPost";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PDP from "./components/PDP";

function App() {
    return (

            <Router>
                <div>
                <Switch>
                    <Route path='/' exact>
                    <Header/>
                    </Route>
                    <Route path='/new'>
                        <Header/>
                        <CreateNewPost/>
                    </Route>
                    <Route path='/PDP'>
                        <Header/>
                        <PDP/>
                    </Route>
                </Switch>
                </div>
            </Router>

    )
}

export default App;

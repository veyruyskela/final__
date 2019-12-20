import React from 'react';
import './reset.scss'
import Header from "./components/HomePage/Header";
import CreateNewPost from "./components/CreateNewPost";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>

            <Router>
                <Switch>
                    <Route path='/' exact/>
                    <Route path='/new' component={CreateNewPost} />
                    <Route path='/PLP' />
                </Switch>
            </Router>
        </div>
    )
}

export default App;

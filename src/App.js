import React, { useState } from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
            </Switch>
        </Router>
    )

}  

export default App;
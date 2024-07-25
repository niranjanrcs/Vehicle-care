import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // create a Home component
import Services from './components/Services'; // create a Services component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/services" component={Services} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;

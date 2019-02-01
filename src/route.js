import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

export default (
    <Switch>
        <div>
            <Route component={Wizard} path='/wizard' />
            <Route component={Dashboard} exact path='/' />
        </div>

    </Switch>
)
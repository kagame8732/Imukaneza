import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../app/home/home';
import Dashboard from '../app/admin/dashboard';
const Routes = () => {
    return(
        <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={Home} 
                />
                <Route 
                    exact 
                    path="/dashboard" 
                    component={Dashboard} 
                />
        </Switch>
    )
}
export default Routes;
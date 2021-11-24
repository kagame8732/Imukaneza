import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../app/main/pages/admin/dashboard';
import Login from '../app/main/pages/registration/login'
import Signup from '../app/main/pages/registration/signup';
import Profile from '../app/main/pages/profile/profile';
import Report from '../app/main/pages/report/report';
import Settings from '../app/main/pages/settings/settings';
const Routes = () => {
    return(
        // this How Routing is done
        <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={Login} 
                />
                <Route 
                    exact 
                    path="/signup" 
                    component={Signup} 
                />
                <Route 
                    exact 
                    path="/profile" 
                    component={Profile} 
                />
                <Route 
                    exact 
                    path="/report" 
                    component={Report} 
                />
                <Route 
                    exact 
                    path="/settings" 
                    component={Settings} 
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
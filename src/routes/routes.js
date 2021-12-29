import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../app/main/pages/dashboards/dashboardAdmin';
import Login from '../app/main/pages/registration/login'
import Signup from '../app/main/pages/registration/signup';
import Forgot from '../app/main/pages/registration/forgot';
import Profile from '../app/main/pages/profile/profile';
import Report from '../app/main/pages/report/report';
import Settings from '../app/main/pages/settings/settings';
import Service from '../app/main/pages/service/service';
import ServiceAdd from '../app/main/pages/service/addingMaterials'
import Verify from '../app/main/pages/registration/Verify';
// import Logout from '../app/main/pages/Logout/Logout';
const Routes = () => {

    return (
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
                path="/users/verify/users/:token"
                component={Verify}
            />
            <Route
                exact
                path="/forgot"
                component={Forgot}
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
            {/* <Route
                exact
                path="/logout"
                component={Logout} */}
            />
            <Route
                exact
                path="/service"
                component={Service}
            />
            <Route
                exact
                path="/service/:whichOne"
                component={ServiceAdd}
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
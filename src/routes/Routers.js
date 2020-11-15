import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { DashboardRoutes} from './DashboardRoutes';
import { Login } from '../components/Login';


export const Routers = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ Login } />
                    
                    <Route path="/" component= {DashboardRoutes}  />
                </Switch>
            </div>
        </Router>
    )
}
import React from 'react'
import { Route, Redirect } from 'react-router'
import { isLogged } from '../components/login/auth/localStorage' 

export const PublicRoute = props => isLogged()
    ? <Redirect to="/"/>
    : <Route {...props}/>

 
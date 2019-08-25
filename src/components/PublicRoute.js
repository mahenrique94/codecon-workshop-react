import React from 'react'
import { Route, Redirect } from 'react-router'
import { isLogged } from '../utils/auth'

const PublicRoute = props => isLogged()
    ? <Redirect to="/"/>
    : <Route {...props} />

export default PublicRoute

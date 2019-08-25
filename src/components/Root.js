import React from 'react'
import { Router, Switch } from 'react-router'
import { history } from '../history'
import { Provider } from 'react-redux'
import { store } from '../store'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import NotFound from '../pages/NotFound'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <PublicRoute exact path="/sign-in" component={SignIn}/>
                <PublicRoute exact path="/sign-up" component={SignUp}/>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute component={NotFound}/>
            </Switch>
        </Router>
    </Provider>
)

export default Root

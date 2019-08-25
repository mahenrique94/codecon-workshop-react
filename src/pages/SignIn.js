import React from 'react'
import { getApp } from '../utils/firebase'
import { login } from '../utils/auth'
import { history } from '../history'

import Sign from './Sign'

const SignUp = () => {
    const handleSubmit = ({ email, password }) => {
        getApp()
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                login(response.user.ra)
                history.push('/')
            })
    }
    return <Sign handleSubmit={handleSubmit} confirmButton="Sign in"/>
}

export default SignUp

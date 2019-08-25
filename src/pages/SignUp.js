import React from 'react'
import { getApp } from '../utils/firebase'
import { history } from '../history'

import Sign from './Sign'

const SignUp = () => {
    const handleSubmit = ({ email, password }) => {
        getApp()
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => history.push('/sign-in'))
    }
    return <Sign handleSubmit={handleSubmit} confirmButton="Sign up"/>
}

export default SignUp

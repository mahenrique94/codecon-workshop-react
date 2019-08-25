import * as yup from 'yup'
import React from 'react'
import styled from 'styled-components'

import Public from '../containers/Public'

import Form from '../components/form'
import Title from '../components/Title'
import Link from '../components/Link'

const StyledLink = styled.div`
    text-align: center;
    margin-top: 1rem;
`

const fields = [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' }
]

const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

const SignUp = ({ handleSubmit, confirmButton }) => (
    <Public>
        <Title>{ confirmButton }</Title>
        <Form
            fields={fields}
            validations={validations}
            handleSubmit={handleSubmit}
            initialValues={{}}
            confirmButton={confirmButton}
        />
        <StyledLink>
            { confirmButton === 'Sign in'
                ? <Link to="/sign-up">Don't have an account? Sign up</Link>
                : <Link to="/sign-in">Already have an account? Sign in</Link>
            }
        </StyledLink>
    </Public>
)

export default SignUp

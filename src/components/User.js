import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUser = styled.span`
    color: #333;
    font-weight: bold;
    font-size: 1.2rem;
    word-break: break-all;
`

const User = ({ children }) => <StyledUser>{children}</StyledUser>

User.propTypes = {
    children: PropTypes.string.isRequired
}

export default User

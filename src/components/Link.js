import React from 'react'
import styled from 'styled-components'

import { Link as RouterLink  } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
    color: #0099ff;
    display: block;
    text-decoration: none;
`

const Link = ({ children, to }) => <StyledLink to={ to }>{ children }</StyledLink>

export default Link

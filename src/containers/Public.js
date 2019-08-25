import React from 'react'
import styled from 'styled-components'

import Container from '../components/Container'

const StyledPublic = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Public = ({ children }) => (
    <StyledPublic>
        <Container>
            { children }
        </Container>
    </StyledPublic>
)

export default Public

import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import User from './User'

const StyledTweet = styled.div`
    display: flex;
    flex-direction: column;
    p {
        color: #595959;
        margin: .5rem 0;
        line-height: 1.5;
    }
`

const Tweet = ({ username, tweet }) => (
    <Container>
        <StyledTweet>
            <User>{ username }</User>
            <p>{ tweet }</p>
        </StyledTweet>
    </Container>
)

export default Tweet

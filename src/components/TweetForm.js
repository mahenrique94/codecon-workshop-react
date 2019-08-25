import React, { useState } from 'react'
import styled from 'styled-components'

import Container from './Container'
import TextArea from './TextArea'
import Button from './Button'
import Row from './Row'
import Remaining from './Remaining'

const StyledTweetForm = styled.form``

const maxLength = 155

const TweetForm = ({ onSubmit }) => {
    const [tweet, updateTweet] = useState('')

    const handleFormSubmit = event => {
        event.preventDefault()
        if (tweet.trim()) {
            onSubmit({ tweet })
            updateTweet('')
        }
    }

    return (
        <Container>
            <StyledTweetForm onSubmit={handleFormSubmit}>
                <Row>
                    <TextArea onChange={e => updateTweet(e.target.value)} maxLength={maxLength} value={tweet}/>
                    <Remaining>{ tweet.length } / { maxLength }</Remaining>
                </Row>
                <Row align="right">
                    <Button>Tweet</Button>
                </Row>
            </StyledTweetForm>
        </Container>
    )
}

export default TweetForm

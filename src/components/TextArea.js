import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    color: #595959;
    font-size: 1.3rem;
    height: 100px;
    padding: 1rem;
    resize: none;
    width: 100%;
    &:focus {
        border-color: #0099ff;
        box-shadow: 0 0 5px rgba(0, 153, 255, .5);
        outline: none;
    }
`

const TextArea = ({ onChange, maxLength, value }) => (
    <StyledTextArea
        onChange={onChange}
        placeholder="Type a new tweet here..."
        maxLength={maxLength}
        value={value}
    />
)

export default TextArea
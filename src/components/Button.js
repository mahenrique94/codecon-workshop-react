import React from 'react'
import styled, { css } from 'styled-components'

const btnSize = css`
    ${({ size }) => {
        if (size === 'sm') {
            return 'padding: .5rem 1rem'
        }
        if (size === 'md') {
            return 'padding: .6rem 1.2rem'
        }
        return 'padding: .8rem 1.4rem'
    }}
`

const StyledButton = styled.button`
    border: none;
    font-size: 1.2rem;
    background-color: #0099ff;
    border-radius: 50px;
    color: #fdfdfd;
    ${btnSize};
    &:focus {
        outline: none;
    }
    &:hover {
                background-color: #008ae6;
            }
`

const Button = ({ children, size }) => <StyledButton size={size}>{ children }</StyledButton>

Button.defaultProps = {
    size: 'md'
}

export default Button
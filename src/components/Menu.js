import React from 'react'
import styled from 'styled-components'
import { getTokenInfo, logout } from '../utils/auth'
import { history } from '../history'

const StyledMenu = styled.div`
    color: #595959;
    font-weight: 100;
    font-size: .9rem;
`

const StyledLogout = styled.button`
    background: transparent;
    border: none;
    color: #0099ff;
    padding: 0;
    padding-left: .25rem;
    &:focus {
        outline: none;
    }
    &:hover {
        text-decoration: underline;
    }
`

const Menu = () => {
    const handleLogout = () => {
        logout()
        history.push('/sign-in')
    }
    return (
        <StyledMenu>
            Olá {getTokenInfo().email},
            <StyledLogout onClick={handleLogout}>sair</StyledLogout>.
        </StyledMenu>
    )
}

export default Menu

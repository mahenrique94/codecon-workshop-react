import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import Menu from './Menu'
import Link from './Link'

const StyledHeader = styled.header`
    background-color: #ffffff;
    box-shadow: 0 0 7px rgba(0, 0, 0, .1);
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 0px) {
        flex-direction: column;
    }
    @media(min-width: 768px) {
        flex-direction: row;
    }
`

const Header = () => (
    <StyledHeader>
        <Link to="/">
            <Brand/>
        </Link>
        <Menu/>
    </StyledHeader>
)

export default Header

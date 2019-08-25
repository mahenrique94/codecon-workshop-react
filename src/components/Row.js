import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
    margin-bottom: 1rem;
    text-align: ${({ align }) => align};
    &:last-child {
        margin-bottom: 0;
    }
`

const Row = ({ align, children }) => <StyledRow align={ align }>{ children }</StyledRow>

Row.defaultProps = {
    align: 'left'
}

Row.propTypes = {
    align: PropTypes.string
}

export default Row

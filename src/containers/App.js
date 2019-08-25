import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'

const App = ({ children }) => (
    <>
        <Header/>
        { children }
    </>
)

App.propTypes = {
    children: PropTypes.any.isRequired
}

export default App

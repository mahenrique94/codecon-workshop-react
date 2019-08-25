import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'
import GlobalStyle from './components/GlobalStyle'

import { init } from './utils/firebase'

import 'normalize.css'

init()

ReactDOM.render(
    <>
        <GlobalStyle/>
        <Root />
    </>,
    document.getElementById('root')
)

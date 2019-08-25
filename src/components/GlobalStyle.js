import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #f9f9f9;
        font-family: Arial, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, ul, li {
        padding: 0;
        margin: 0;
    }

    button:hover {
        cursor: pointer;
    }
`

export default GlobalStyle

import styled from 'styled-components'

const Container = styled.section`
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, .15);
    margin: 1rem auto;
    padding: 2rem;
    @media(min-width: 0px) {
        max-width: 90vw;
    }
    @media(min-width: 768px) {
        max-width: 50vw;
    }
`

export default Container

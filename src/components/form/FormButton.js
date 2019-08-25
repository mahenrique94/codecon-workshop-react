import styled from 'styled-components'

const FormButton = styled.button`
    display: block;
    background: ${({ disabled }) => disabled ? '#dcdcdc' : '#0099ff'};
    color: #fdfdfd;
    border-radius: 7px;
    border: none;
    padding: .5rem;
    width: 100%;
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #008ae6;
    }
`

export default FormButton

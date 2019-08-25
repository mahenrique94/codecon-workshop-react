import styled from 'styled-components'
import { ErrorMessage } from 'formik'

const FormError = styled(ErrorMessage)`
    color: #ff8080;
    display: block;
    margin-top: .15rem;
    padding-left: .25rem;
    font-size: .9rem;
`

export default FormError

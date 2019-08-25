import styled from 'styled-components'
import { Field } from 'formik'

const FormField = styled(Field)`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    color: #333;
    padding: .5rem .75rem;
    font-size: 1.2rem;
    &:focus {
        border-color: #0099ff;
        box-shadow: 0 0 5px rgba(0, 153, 255, .5);
        outline: none;
    }
`

export default FormField

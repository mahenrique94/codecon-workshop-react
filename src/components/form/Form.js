import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Formik, Form as FormikForm } from 'formik'

import FormField from './FormField'
import FormError from './FormError'
import FormGroup from './FormGroup'
import FormButton from './FormButton'

const StyledForm = styled(FormikForm)`
    @media(min-width: 0px) {
        width: 275px;
    }
    @media(min-width: 768px) {
        width: 480px;
    }
`

const Form = ({ fields, handleSubmit, initialValues, confirmButton, validations }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        {({ isValid }) => (
            <StyledForm>
                { fields.map((field, index) => (
                    <FormGroup key={index}>
                        <FormField name={field.name} placeholder={field.placeholder} type={field.type}/>
                        <FormError component="span" name={field.name}/>
                    </FormGroup>
                ))}
                <FormButton disabled={!isValid} type="submit">{ confirmButton }</FormButton>
            </StyledForm>
        )}
    </Formik>
)


Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    confirmButton: PropTypes.string.isRequired,
    validations: PropTypes.object.isRequired
}

export default Form
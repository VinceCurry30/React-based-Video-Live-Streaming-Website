// Field is a component, reduxForm is a function very similar to connect

import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        ) 
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    // Field component doesn't know how to deal with the label prop passed to it, so it just passes it to renderInput() by default
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

// if the errors object has a property name that is identical to the name prop in a Field, that error message will be passed to renderInput()
const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

// StreamForm gor wrapped inside of redux form
export default reduxForm({form: 'streamForm', validate})(StreamForm);
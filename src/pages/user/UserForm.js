import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {submitUserAction} from "../../actions/user/UserAction";
import {connect} from "react-redux";

const UserFormFunc = props => {
        const {handleSubmit} = props;
        console.log(props)

        const submit = (data, submitUserAction) => {

            let error = {};
            let isError = false;

            if (data.nome.trim() === '') {
                error.name = 'Required';
                isError = true;
            }

            if (data.nome.length > 200) {
                error.name = 'Too long';
                isError = true;
            }

            if (data.email.trim() === '') {
                error.email = 'Required';
                isError = true;
            }

            if (isError) {
                throw new SubmissionError(error);
            } else {
                submitUserAction(data);
            }
        }

        return (
            <form onSubmit={handleSubmit((fields) => submit(fields, props.submitUserAction))}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field
                            name="nome"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    };

const UserForm = (reduxForm({
    form: 'formUser',
}))(UserFormFunc);


const mapStateToProps = state => ({
    saved: state.UserFormReducer.saved,
    submitUserAction: state.UserFormReducer.submitUserAction,
})

export default connect(mapStateToProps, {submitUserAction})(UserForm);

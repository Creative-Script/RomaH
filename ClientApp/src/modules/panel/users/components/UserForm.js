
import { Formik, Form } from 'formik';
import Loader from '../../../../components/loader';
import * as Yup from 'yup';
import InputField from '../../../../components/inputField';
import { Link } from 'react-router-dom';

export default function UserForm(props) {
    const { user, handleSubmit, isProcessing } = props;
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("username is required")
            .min(4, "username must be atleast 4 characters"),
        password: Yup.string()
            .required("Passsword is required")
            .min(6, "Password must be atleast 6 characters")
            .max(15, "Password can't be longer than 15 characters")
    });

    return (
        <div>
            <Formik
                initialValues={user}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className="form-control">
                    <InputField
                        name="username"
                        placeholder="Enter your username"
                        label="User name"
                        type="text"
                        isLoading={isProcessing}
                        required={true}
                    ></InputField>
                     <InputField
                        name="password"
                        placeholder="Enter your password"
                        label="password"
                        type="password"
                        isLoading={isProcessing}
                        required={true}
                    ></InputField>
                    <hr />
                    {isProcessing && <Loader isProcessing={isProcessing}></Loader>}
                    <Link to="/contacts"><button hidden={isProcessing} className='btn btn-sm btn-outline-danger' type="button">Cancel</button></Link>
                    <button hidden={isProcessing} className='btn btn-sm btn-outline-primary float-end' type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
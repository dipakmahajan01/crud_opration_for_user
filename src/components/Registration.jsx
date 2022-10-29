import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const navigate = useNavigate();
  function formSubmit(values) {
    navigate(
      '/emailvalidation',
      {
        state: {
          email: values.userMail,
        },
      },
    );
    alert('form is submited');
  }
  return (
    <div className="container">
      <Formik
        initialValues={{
          userName: '',
          userAge: '',
          userMail: '',
          userPassword: '',
          userAddress: '',
        }}
        validationSchema={yup.object().shape({
          userName: yup
            .string()
            .min(5, 'User Name should be at least 5 characters')
            .max(16, 'User Name should be not more than 16 character')
            .required('User name is required'),
          userAge: yup.number().required('Age is required'),
          userMail: yup
            .string()
            .email('Please insert the valid Email')
            .required('Email is  required')
            .lowercase(),
          userPassword: yup
            .string()
            .min(8, 'User password should be at least 8 character')
            .max(16, 'User password should not more than 16 characters')
            .required('user password is required'),
          userAddress: yup.string().required('User Address is required'),
        })}
        // eslint-disable-next-line react/jsx-no-bind
        onSubmit={formSubmit}
      >
        <dl className="w-100 d-flex justify-content-center">
          <Form className="w-50 m-5">
            <h2 className="card-title my-3">Register Here</h2>
            <dt>User Name</dt>
            <dd className="w-100">
              <Field className="form-control" type="text" name="userName" />
              <div className="invalid-feedback">
                <ErrorMessage name="userName" />
              </div>
            </dd>
            <dt>User Age</dt>
            <dd className="form-group">
              <Field className="form-control" type="text" name="userAge" />
              <div className="invalid-feedback">
                <ErrorMessage name="userAge" />
              </div>
            </dd>
            <dt>User Mail</dt>
            <dd className="form-group">
              <Field className="form-control" type="text" name="userMail" />
              <div className="invalid-feedback">
                <ErrorMessage name="userMail" />
              </div>
            </dd>
            <dt>User PassWord</dt>
            <dd className="form-group">
              <Field className="form-control" type="text" name="userPassword" />
              <div className="invalid-feedback">
                <ErrorMessage name="userPassword" />
              </div>
            </dd>
            <dt>User Address</dt>
            <dd>
              <Field className="form-control" type="text" name="userAddress" />
              <div className="invalid-feedback">
                <ErrorMessage name="userAddress" />
              </div>
            </dd>
            <button type="submit" className="btn btn-primary btn-lg">Register</button>
          </Form>
        </dl>
      </Formik>
    </div>
  );
}

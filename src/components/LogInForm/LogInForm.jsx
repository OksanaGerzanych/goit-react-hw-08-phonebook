import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormField } from './LogInForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: 'Email is not valid.',
    })
    .required('Please, enter email'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Please, enter password'),
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values)
    dispatch(logIn(values))
    actions.resetForm();
  }


  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            Email
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="span" />
          </FormField>

          <FormField>
            Password
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="span" />
          </FormField>
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
    </div>
  );
};

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormField } from './LogInForm.styled';
import * as Yup from 'yup';

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
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Please, enter password'),
});

export const LogInForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={values => {
          console.log(values);
        }}
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

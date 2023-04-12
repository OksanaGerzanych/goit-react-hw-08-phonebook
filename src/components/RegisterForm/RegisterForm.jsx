import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormField } from './RegisterForm.styled';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Invalid name.',
    })
    .required('Please, enter name'),
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

export const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <FormField>
            Name
            <Field name="name" placeholder="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </FormField>

          <FormField>
            Email
            <Field name="email" placeholder="email" type="email" />
            <ErrorMessage name="email" component="span" />
          </FormField>

          <FormField>
            Password
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="span" />
          </FormField>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

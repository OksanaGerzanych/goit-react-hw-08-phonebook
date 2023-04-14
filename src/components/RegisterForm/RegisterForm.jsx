import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormField } from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
    .required('Please, enter password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values)
    dispatch(register(values))
    actions.resetForm();
}

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" placeholder="name" />
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

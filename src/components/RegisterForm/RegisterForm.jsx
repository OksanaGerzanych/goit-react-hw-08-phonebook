import { Formik, Field, Form } from 'formik';
import { Container, Title } from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Invalid name.',
    })
    .required(),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: 'Email is not valid.',
    })
    .required(),
  password: Yup.string()
    .min(8)
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Container>
      <Title>Register</Title>
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
          <Box margin={1}>
            <Field
              type="text"
              name="name"
              component={TextField}
              label="Name"
              helperText="Please Enter Name"
              style={{width: 400}}
            />
          
          </Box>
          <Box margin={1}>
            <Field
              name="email"
              type="email"
              component={TextField}
              label="Email"
              helperText="Please Enter Email"
              style={{width: 400}}
            /> 
          </Box>
          <Box margin={1}>
            <Field
              type="password"
              name="password"
              component={TextField}
              label="Password"
              style={{width: 400}}
            />
          </Box>
           <Box margin={1}>
            <Button type="submit" sx={{margin: 2}}
              variant="contained"
              color="primary"
              style={{width: 400}}
              >
              Register</Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

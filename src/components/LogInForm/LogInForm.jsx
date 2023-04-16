import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Container, Title } from 'components/RegisterForm/RegisterForm.styled';

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
    <Container>
       <Title>Login</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <Box margin={1}>
            <Field type="email" name="email"  component={TextField}
              label="Email"
              helperText="Please Enter Email"
              style={{width: 400}} />
          </Box>

         <Box margin={1}>
            <Field type="password" name="password"  component={TextField}
              label="Password"
              style={{width: 400}} />
          </Box>
          <Box margin={1}>
          <Button type="submit" sx={{margin: 2}}
              variant="contained"
              color="primary"
              style={{ width: 400 }}>LogIn</Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

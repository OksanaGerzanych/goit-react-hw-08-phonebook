import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux/es/exports';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {Form} from 'components/ContactForm/ContactForm.styled';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Container } from 'components/RegisterForm/RegisterForm.styled';


const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        'Invalid name. Name may contain only letters, apostrophe, dash and spaces.',
    })
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
, {
      message: 'Phone number is not valid.',
    })
    .required('Please, enter phone number'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
   
    const existstName = contacts.find(contact => contact.name === values.name);
  
    if (existstName) {
      return Notify.info(`This name is already in contacts!`);
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form>
         <Box margin={1}>
            <Field type="text" name="name" component={TextField}
              label="Name"
              helperText="Please Enter Name"
              style={{width: 400}}/>
           </Box>
          <Box margin={1}>
            <Field type="tel" name="number" component={TextField}
              label="Number"
              helperText="Please Enter Number"
              style={{width: 400}}/>
          </Box>
          <Box margin={1}>
            <Button type="submit" sx={{margin: 2}}
              variant="contained"
              color="primary"
              style={{ width: 400 }}>
              Add contact</Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
};

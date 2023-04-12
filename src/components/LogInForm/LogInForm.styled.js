import styled from "styled-components";
import { Form as FormikForm,  ErrorMessage as FormikError } from 'formik';


export const Form = styled(FormikForm)`
 width: 320px;
`
export const FormField = styled.label`
  display: flex;
  gap: 2px;
  flex-direction: column;
  width: 270px;
  font-size: 18px;
`;

export const ErrorMessage = styled(FormikError)`
color: tomato;
font-size: 10px;
`
// import { useDispatch, useSelector  } from 'react-redux'; 
// import { useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));



export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage  />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
    </Route>
  </Routes>
  );
}

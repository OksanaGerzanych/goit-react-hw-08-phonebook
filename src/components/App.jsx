import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : ( 
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={ <PrivateRoute  component={<ContactsPage />} redirectTo="/login" />   } />
          <Route path="/register" element={ <RestrictedRoute  component={<RegisterPage />} redirectTo='/contacts'/> } />
        <Route path="/login" element={<RestrictedRoute   component={<LoginPage />} redirectTo='/contacts' />}  />
      </Route>
    </Routes>
  
  );
};

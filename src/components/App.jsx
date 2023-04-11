// import { useDispatch, useSelector  } from 'react-redux'; 
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Home } from 'pages/Home';
import { LogIn } from 'pages/LogIn';
import { Route, Routes } from 'react-router-dom';

export function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contacts' element={ <Contacts />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/login' element={ <LogIn />}/>
      <Route path="*" element={<Home />}/>
  </Routes>
  );
}

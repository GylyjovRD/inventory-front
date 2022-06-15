import './App.css';
import React, { useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/actions/userActions';
import HomePage from './pages/home/HomePage';

function App() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state)


  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      dispatch(loginUser(JSON.parse(localUser)))
    }
  }, [])

  return (
    <>
      {user.access ? <HomePage /> : <LoginPage />}

    </>
  );
}

export default App;

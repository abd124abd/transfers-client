import React, { useState } from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';

/*

- if logged in
  - Dashboard

- if visitor
  - LandingPage

*/

const App = () => {

  const [user, updateUser] = useState<boolean | string>(false);
  const [authFormVisible, updateAuthFormVisible] = useState(true);
  // state for form - can use reducer and dispatch
  // here since passing down multiple levels

  const handleUserSubmit = (authFormType: string, userData: any) => {
    // authFormType === login or register
    // submit auth API calls then update user
    const endpoint = authFormType === 'login'
      ? 'auth/login'
      : 'users';

    fetch(`http://localhost:8080/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.error(err)
    })
    updateUser('');
  };

  const logoutUser = () => {
    updateUser(false);
    // redirect to homepage
  };

  const mainJSX = user === false
    ? <LandingPage
        handleUserSubmit={handleUserSubmit}
        authFormVisible={authFormVisible}
      />
    : <Dashboard />

  return (
    <div className='container'>
      <Header
        handleUpdateAuthFormVisible={updateAuthFormVisible}
        user={user}
        logoutUser={logoutUser}
      />
      <main role='main'>
        {mainJSX}
      </main>
    </div>
  );
}

export default App;

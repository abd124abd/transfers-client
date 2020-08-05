import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Header from './Header';

/*

- if logged in
  - Dashboard

- if visitor
  - LandingPage

*/

const App = () => {

  const [user, updateUser] = useState<boolean | string>('user123');
  const [authFormVisible, updateAuthFormVisible] = useState(false);
  // state for form - can use reducer and dispatch
  // here since passing down multiple levels

  const handleUserSubmit = (authFormType: string) => {
    // authFormType === login or register
    // submit auth API calls then update user
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

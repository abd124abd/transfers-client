import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
import AuthController from '../controllers/auth';

/*

- if logged in
  - Dashboard

- if visitor
  - LandingPage

*/

const authController = new AuthController();

const App = () => {

  const [user, updateUser] = useState<any>(false);
  const [authFormVisible, updateAuthFormVisible] = useState(false);

  if (authController.currentToken() && !user) {
    const payload = authController.extractUserFromToken(authController.currentToken());
    updateUser({id: payload.user_id, username: payload.sub});
  };

  const handleUserSubmit: {(formType: string, userData: any): undefined} = (formType, userData) => {
    const endpoint = formType === 'login'
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
      authController.setAuthToken(data.authToken);
      updateUser(data.user);
    })
    .catch(err => {
      console.error(err)
    })

    return undefined;
  };

  const logoutUser = () => {
    authController.clearAuthToken();
    updateUser(false);
    // redirect to homepage
  };

  const mainJSX = user === false
    ? <LandingPage
        handleUserSubmit={handleUserSubmit}
        authFormVisible={authFormVisible}
      />
    : <Dashboard
        user={user}
      />

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

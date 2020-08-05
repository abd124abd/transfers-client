import React from 'react';
import TotalTransactionData from './TotalTransactionData';
import AuthWindow from './AuthWindow';
import './LandingPage.css';

/*

- TotalTransactionData
- AuthWindow

*/

interface Props {
  handleUserSubmit: {(value: any): void};
  authFormVisible: boolean;
}

const LandingPage = ({handleUserSubmit, authFormVisible}: Props) => {

  const landingPageJSX = authFormVisible
    ? <AuthWindow submitHandler={handleUserSubmit} />
    : <TotalTransactionData />

  return (
    <div className="landing-page">
        {landingPageJSX}
    </div>
  );
}

export default LandingPage;

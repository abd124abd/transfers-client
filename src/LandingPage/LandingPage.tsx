import React from 'react';
import TotalTransactionData from '../TotalTransactionData/TotalTransactionData';
import AuthWindow from '../AuthWindow/AuthWindow';
import './LandingPage.css';

/*

- TotalTransactionData
- AuthWindow

*/

interface Props {
  handleUserSubmit: {(formType: string, userData: any): undefined};
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

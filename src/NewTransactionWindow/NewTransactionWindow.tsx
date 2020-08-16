import React, {useState} from 'react';
import Form from '../Form/Form';
import './NewTransactionWindow.css';
import newTransactionFormProperties from '../constants/new-transaction-form-properties';
import AuthController from '../controllers/auth';

interface Props {
  user: any;
}

const NewTransactionWindow = ({user}: Props) => {
  const authController = new AuthController();

  const [transactionMessage, setTransactionMessage] = useState('');

  const handleNewTransactionSubmit: {(formType: string, transactionData: any): undefined} = (formType, transactionData) => {
    const {receiver, amount} = transactionData;

    fetch(`http://localhost:8080/transfers/user/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authController.getAuthToken()}`
      },
      body: JSON.stringify(transactionData),
    })
    .then(res => res.json())
    .then(data => {
      if (data.hasOwnProperty('error')) {
        console.log(data)
        throw new Error(data.error);
      };
      console.log(data);
      // sucessful transfer message render
      setTransactionMessage(`Success! You sent ${amount} to ${receiver}`);
    })
    .catch(err => {
      setTransactionMessage(`There was a problem with the transaction. ${err}`)
    })

    return undefined;
  };

  const generateTransactionResolutionJSX = () => {
    const transactionStatus = transactionMessage === '' ? '' : transactionMessage.includes('Success') ? 'success' : 'failure';
    return <p className={`transaction-resolution-message ${transactionStatus}`}>{transactionMessage}</p>;
  }

  return (
    <section className="new-transaction">
      {generateTransactionResolutionJSX()}
      <Form
        formType='new-transaction'
        formProperties={newTransactionFormProperties()}
        submitHandler={handleNewTransactionSubmit}
      />
    </section>
  )

};

export default NewTransactionWindow;

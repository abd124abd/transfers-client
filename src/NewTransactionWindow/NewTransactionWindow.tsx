import React from 'react';
import Form from '../Form/Form';
import newTransactionFormProperties from '../constants/new-transaction-form-properties';
import AuthController from '../controllers/auth';

interface Props {
  user: any;
}

const NewTransactionWindow = ({user}: Props) => {
  const authController = new AuthController();

  const handleNewTransactionSubmit: {(formType: string, transactionData: any): undefined} = (formType, transactionData) => {

    fetch(`http://localhost:8080/transfers/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${authController.getAuthToken()}`
      },
      body: JSON.stringify(transactionData),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err)
    })

    return undefined;
  };

  return (
    <section className="new-transaction">
      <Form
        formType='new-transaction'
        formProperties={newTransactionFormProperties()}
        submitHandler={handleNewTransactionSubmit}
      />
    </section>
  )

};

export default NewTransactionWindow;

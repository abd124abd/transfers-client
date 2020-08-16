const newTransactionFormProperties = () => {
  return {
    legend: 'New Transaction',
    inputs: [
      {
        type: 'text',
        name: 'receiver',
        id: 'receiver',
        minLength: 3,
        maxLength: 10,
        value: '',
        placeholder: '',
      },
      {
        type: 'number',
        name: 'amount',
        id: 'amount',
        value: '',
        placeholder: '',
      }
    ],
  }
};

export default newTransactionFormProperties;

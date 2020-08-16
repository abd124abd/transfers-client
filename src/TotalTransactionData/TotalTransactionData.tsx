import React, { useState, useEffect } from 'react';

const TotalTransactionData = () => {
  const [transfersData, updateTransactionData] = useState({count: 0, total: 0});

  useEffect(() => {
    fetch(`http://localhost:8080/transfers`)
    .then(res => res.json())
    .then(data => {
      const newTransactionData = {count: data.count, total: data.total};
      updateTransactionData(newTransactionData);
    })
    .catch(err => {
      console.error(err)
    })
  }, []);

  return (
    <section className="transfers-data">
      <h3>Transfers sent</h3>
      <p>{transfersData.count}</p>
      <h3>Total Value Transferred</h3>
      <p>${transfersData.total}</p>
    </section>
  )
};

export default TotalTransactionData;

import React, { useState } from 'react';
import MyTransactionWindow from '../MyTransactionWindow/MyTransactionWindow';
import NewTransactionWindow from '../NewTransactionWindow/NewTransactionWindow';
import './Dashboard.css';

/*

below are two tabs
- New Transaction

- My Transactions

message of updates (sent money, added as payee)

*/

interface Props {
  user: any;
}

const Dashboard = ({user}: Props) => {

  const [dashboardSelected, updateDashboardSelected] = useState('new');

  const dashboardJSX = dashboardSelected === 'new'
    ? <NewTransactionWindow user={user} />
    : <MyTransactionWindow />;

  return (
    <div className="dashboard">
      <nav className='dashboard-nav'>
        <p className={dashboardSelected === 'new' ? 'selected' : ''} onClick={() => updateDashboardSelected('new')}>New Transaction</p>
        <p className={dashboardSelected === 'my' ? 'selected' : ''} onClick={() => updateDashboardSelected('my')}>My Transactions</p>
      </nav>
      {dashboardJSX}
    </div>
  );
}

export default Dashboard;

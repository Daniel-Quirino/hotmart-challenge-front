import React from 'react';
import Header from './Components/Header';
import Timeline from './Components/Timeline';
import SideBar from './Components/SideBar';
import AddExpense from './Components/AddExpense/AddExpense';

import './Refund.scss';

const AnticipationRefund = () => {
  // const { state, dispatch } = React.useContext(Store);
  const [ addExpense, setAddExpanse ] = React.useState(false);

  const addNewExpense = () => {
    setAddExpanse(!addExpense)
  }

  const renderAddExpenseButton = () => {
    return (
      <button className='add-expense-button' onClick={addNewExpense}>
        Adicionar Despesa
      </button>
    )
  }
  
  return (   
      <div className='quick_ops__grid'>
        <div className='quick_ops__header-timeline'>
          <Header />
          <div className='quick_ops__expense-button'>
            {renderAddExpenseButton()}
          </div>
          {!addExpense ? <Timeline /> : AddExpense({addNewExpense: addNewExpense})}
        </div>
        <div className='quick_ops__side-bar' >
          <SideBar  />
        </div>
    </div>
  );
}

export default AnticipationRefund;

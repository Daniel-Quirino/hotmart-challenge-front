import React from 'react';
import Header from './Components/Header';
import Timeline from './Components/Timeline';
import SideBar from './Components/SideBar';
import Button from './Components/Button/Button';


import './Refund.scss';

const AnticipationRefund = () => {
  // const { state, dispatch } = React.useContext(Store);
  const [ addExpense, setAddExpanse ] = React.useState(false);

  const addNewExpense = () => {
    setAddExpanse(!addExpense)
  }
  
  return (   
      <div className='quick_ops__grid'>
        <div className='quick_ops__header-timeline'>
          <Header />
          <div className='quick_ops__expense-button'>
            <Button addNewExpense={addNewExpense}/>
          </div>
          {!addExpense ? <Timeline /> : <></>}
        </div>
        <div className='quick_ops__side-bar' >
          <SideBar  />
        </div>
    </div>
  );
}

export default AnticipationRefund;

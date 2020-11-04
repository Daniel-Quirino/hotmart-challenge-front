import React from 'react';
import Header from './Components/Header';
import Timeline from './Components/Timeline';
import SideBar from './Components/SideBar';

import './AnticipationRefund.scss';

const AnticipationRefund = () => {
  return (   
      <div className='quick_ops__grid'>
        <div className='quick_ops__header-timeline'>
          <Header />
          <Timeline />
        </div>
        
        <div className='quick_ops__side-bar' >
          <SideBar  />
        </div>
    </div>
  );
}

export default AnticipationRefund;

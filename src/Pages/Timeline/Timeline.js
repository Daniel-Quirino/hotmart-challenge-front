import React from 'react';

import './Timeline.scss';

const renderIcon = () => {
  return (
    <div className='timeline__icon'>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'></div>
        <p className='timeline__label'>21/05/2019</p>
      </div>
    </div>
  )
}

const renderAction = () => {
  return (
    <li className='timeline__action'>
      <p className='timeline__label'> Ação </p>
      <p className='timeline__label'> Pagamento Realizado </p>
    </li>
  )
}

const renderValue = () => {
  return (
    <li className='timeline__value'>
      <p className='timeline__label'> Valor </p>
      <p className='timeline__label'> BRL 3.458,94 </p>
    </li>
  )
}

const renderNote = () => {
  return (
    <li className='timeline__note'>
      <p className='timeline__label'> Observação </p>
      <p className='timeline__label'> Depositamos na conta 12345-32, agência 123, Banco Itaú </p>
    </li>  
  )
}

const renderReceipt = () => {
  return (
    <li className='timeline__receipt'>
      <a href='http://localhost:3000'> Ver recebido</a>
    </li>
  )
}

const Timeline = () => {
  return (
    <li className='timeline' >
      <ul className='timeline__grid ' >
        {renderIcon()}
        {renderAction()}
        {renderValue()}
        {renderNote()}
        {renderReceipt()}
      </ul>
    </li>
  );
}

export default Timeline;


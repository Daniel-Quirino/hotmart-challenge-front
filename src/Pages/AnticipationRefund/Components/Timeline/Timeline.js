import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

import { Store } from '../../../../Infrastructure/Store/Store';
import doGetTimeline from '../../../../Infrastructure/Actions/Timeline';


import './Timeline.scss';

const renderIcon = () => {
  return (
    <div className='timeline__icon'>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'>
          <FontAwesomeIcon 
            className='timeline__concierge_bell-color'
            icon={faConciergeBell} 
            size="3x"
          />
        </div>
        <p className='timeline__text'>21/05/2019</p>
      </div>
    </div>
  )
}


const renderTimelineAction = (label, strongText, text) => {
  return (
    <li className='timeline__action'>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__strong_text'> {strongText} </p>
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderTimelineValue = (label, strongText, text) => {
  return (
    <li className='timeline__value'>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__strong_text'> {strongText} </p>
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderTimelineStatus = (label, aproveButtonText, deductibleButtonText, text) => {
  return (
    <li className='timeline__status'>
      <p className='timeline__label'> {label} </p>
      {aproveText()}
      {deductibleText()}
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const aproveText = () => {
  return (
    <p className='timeline__aprove_button'>
      Aprovado
    </p>
  )
}

const deductibleText = () => {
  return (
    <p className='timeline__dedutive_text'>
      Dedutível
    </p>
  )
}

const renderReceipt = () => {
  return (
    <li className='timeline__receipt'>
      <a href='http://localhost:3000' className='timeline__link'>
        <FontAwesomeIcon 
          className='timeline__note_icon-color'
          icon={faReceipt} 
          size="1x" 
        /> Ver nota fiscal
      </a>
    </li>
  )
}


const Timeline = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ timeline, setTimeline ] = React.useState([]);

  useEffect(() => {
    doGetTimeline(dispatch);
  }, []);

  useEffect(() => {
    if(state.timeline) setTimeline(state.timeline);
    console.log(state)
  }, [state]);

  

  return (
    <div className='timeline' >
      <ul className='timeline__grid ' >
        {renderIcon()}
        {renderTimelineAction('Ação', 'Almoço', 'Almoço com cliente')}
        {renderTimelineValue('Valor', 'BRL 3.458,94', 'Valor da nota: BRL 220,00')}
        {renderTimelineStatus('Status', 'Aprovado', 'Dedutível', 'Valor aprovação 220,00')}
        {renderReceipt()}
      </ul>
    </div>
  );
}

export default Timeline;


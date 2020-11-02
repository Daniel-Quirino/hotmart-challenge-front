import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

import './Icon.scss';

const renderHotelIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__concierge_bell-color'
      icon={faConciergeBell} 
      size="3x"
    />
  )
}

const renderAsteriskIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__concierge_bell-color'
      icon={faAsterisk} 
      size="3x"
    />
  )
}

const renderUsersIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__users-color'
      icon={faUsers} 
      size="3x"
    />
  )
}

const renderReceiptIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__note_icon-color'
      icon={faReceipt} 
      size="1x" 
    />
  )
}

const renderFoodIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__food-color'
      icon={faUtensils} 
      size="3x" 
    />
  )
}

const renderHotmartIcon = () => {
  return (
    <FontAwesomeIcon 
      className='timeline__hotmart-color'
      icon={faFireAlt} 
      size="3x" 
    />
  )
}

const renderExpanseIcon = (expenseType) => {
  let icon = <></>;
  
  switch (expenseType) {
    case 'hotel-fee':
      icon = renderHotelIcon();
      break;
    case 'food':
      icon = renderFoodIcon();
      break;
    default:
      icon = renderHotmartIcon();
      break
  }
  
  return icon;
}



export const renderFontAwesomeIcon = (cardType, typeCode = '') => {
  let icon = <></>;

  switch (cardType) {
    case 'ACCOUNTABILITY_SUBMITTED':
      icon = renderAsteriskIcon();
      break;
    case 'EVALUATION':
      icon = renderUsersIcon();
      break;
    case 'ACCOUNTABILITY_CREATED':
      icon = renderAsteriskIcon();
      break;
    case 'EXPENSE':
      icon = renderExpanseIcon(typeCode);
      break;
    case 'RECEIPT':
      icon = renderReceiptIcon();
      break;
    default:
      icon = renderUsersIcon();
      break;
  }

  return icon;
}




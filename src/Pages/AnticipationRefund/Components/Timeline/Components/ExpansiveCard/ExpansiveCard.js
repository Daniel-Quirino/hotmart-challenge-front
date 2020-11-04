import { renderFontAwesomeIcon } from '../../../Icons/Icons';
import { formatTimeSpanToDefault } from '../../../../../../Common/date';
import { formatedStatus } from '../../../Status/Status';
import { 
  getExpenseType, 
  formatedApprovedValue,
  formatedSpentValue
} from '../utils';

import './ExpansiveCard';

const renderExpanseCardIconData = (item) => {
  return (
    <li className='timeline__icon' key={item.id+item.cardDate}>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'>
          {renderFontAwesomeIcon(item.cardType, item.expenseTypeCode)}
        </div>
      <span className='timeline__text'>{formatTimeSpanToDefault(item.cardDate)}</span>
      </div>
    </li>
  )
}

const renderExpanseCardtype = (label, strongText, text) => {
  return (
    <li className='timeline__action' key={label + text}>
      <span className='timeline__label'> {label} </span>
      <span className='timeline__strong_text'> {strongText} </span>
      <span className='timeline__text'> {text} </span>
    </li>
  )
}


const renderExpanseCardValue = (label, strongText, text) => {
  return (
    <li className='timeline__value' key={label + text}>
      <span className='timeline__label'> {label} </span>
      <span className='timeline__strong_text'> {strongText} </span>
      <span className='timeline__text'> {text} </span>
    </li>
  )
}

const renderExpanseCardStatus = (label, status, text) => {
  return (
    <li className='timeline__status' key={label + text}>
      <span className='timeline__label'> {label} </span>
      {formatedStatus(status)}
      <span className='timeline__text'> {text} </span>
    </li>
  )
}

const renderExpanseCardReceipt = (id) => {
  return (
    <li className='timeline__receipt' key={id}>
      <a href='http://localhost:3000' className='timeline__link'>
        {renderFontAwesomeIcon('RECEIPT')} Ver nota fiscal
      </a>
    </li>
  )
}

export const renderExpenseCard = (item) => {
  return (
    <ul className='timeline__grid' key={item.id}>
      {renderExpanseCardIconData(item)}
      {renderExpanseCardtype('Tipo', getExpenseType(item.expenseTypeCode), ' - ')}
      {renderExpanseCardValue('Valor', formatedApprovedValue(item.currencySymbol, item.amountTotal), formatedSpentValue(item.currencySymbol, item.amountSpent))}
      {renderExpanseCardStatus('Status', item.status, formatedSpentValue(item.currencySymbol, item.amountSpent))}
      {renderExpanseCardReceipt(item.id)}
    </ul>
  )
}

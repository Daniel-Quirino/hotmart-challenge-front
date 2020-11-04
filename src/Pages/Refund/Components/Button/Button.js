import { renderFontAwesomeIcon } from '../../Components/Icons/Icons';

import './Button.scss';

const Button = (props) => {
  return (
    <button className='add-expense-button' onClick={props.addNewExpense}>
      {renderFontAwesomeIcon('RECEIPT')} Adicionar Despesa
    </button>
  )
}

export default Button;

import { renderFontAwesomeIcon } from '../../Components/Icons/Icons';

import './AddExpense.scss';

const AddExpense = (props) => {
  return (
    <div className='add-expense-padding'>
      <div className='add-expense'>
        <div className='add-expense__title'>
          <span className='add-expense__title__text'> Adicionar Despesa </span>
        </div>
        <div className='add-expense__receipt'>
          <div className='add-expense__container'>
            <span className='add-expense__receipt__title'>Envie o comprovante</span>
            <span className='add-expense__receipt__tipe'>Você pode enviar arquivos nos formatos PNG, JPG ou PDF, tamanho máximo 10MB</span>
            <span className='add-expense__receipt__choose'>Escolher arquivo</span>
          </div>
        </div>
        <div className='add-expense__inputs'>
          <span>INPUTS</span>
        </div>
        <div className='add-expense__buttons'>
          <span>CANCELAR / ADICIONAR</span>
        </div>
      </div>
    </div>
  )
}

export default AddExpense;

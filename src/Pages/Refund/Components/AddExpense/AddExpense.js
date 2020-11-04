import './AddExpense.scss';
import { enumExpenseTypes } from '../../../../Enum/Enum';
import { enumCoins } from '../../../../Enum/Enum';

const renderCancelButton = (props) => {
  return (
    <button className='add-expense-button_cancel' onClick={props.addNewExpense} >
      Cancelar
    </button>
  )
}

const renderSaveButton = (props) => {
  return (
    <button type='submit' className='add-expense-button_save' onClick={props.addNewExpense}  >
      Salvar
    </button>
  )
}

const selectTypes = () => {
  return (
    <select defaultValue={'DEFAULT'} >
        <option value="DEFAULT" disabled> Tipo</option>
      <option> {enumExpenseTypes['hotel-fee']} </option>
      <option> {enumExpenseTypes['food']} </option>    
    </select>
  )
}


const selectCoins = () => {
  return (
    <select  defaultValue={'DEFAULT'} >
       <option value="DEFAULT" disabled> Moeda </option>
      <option> {enumCoins['BRL']} </option>
      <option> {enumCoins['USA']} </option> 
      <option> {enumCoins['UK']} </option>    
    </select>
  )
}



const AddExpense = (props) => {
  return (
    <form className='add-expense-padding'>
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
        <div className='add-expense__inputs__form'>
          <div className="add-expense__inputs__type">
            <label>Tipo*</label>
            {selectTypes()}
          </div>
          <div className="add-expense__inputs__coin">
            <label>Moeda*</label>
            {selectCoins()}
          </div>
          <div className="add-expense__inputs__expense_description">
            <label>Descrição*</label>
            <input 
              type='text'
              placeholder='Tipo'
            />
          </div>
          <div className="add-expense__inputs__voucher_date">
            <label>Data do Comprovante*</label>
            <input 
              placeholder='Selecione a data'
              type='date'
              onChange={() =>{}}
            />
          </div>

        </div>
        <div className='add-expense__buttons'>
          {renderCancelButton(props)}          
          <div className='add-expense__buttons_margin'>
            {renderSaveButton(props)}
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddExpense;

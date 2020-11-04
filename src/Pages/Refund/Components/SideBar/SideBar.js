import React, { useEffect } from 'react';

import { renderFontAwesomeIcon } from '../../Components/Icons/Icons';
import { openStatusCard } from '../../Components/Status/Status'
import { Store } from '../../../../Infrastructure/Store/Store';
import doGetSideBar from '../../../../Infrastructure/Actions/SideBar';

import './SideBar.scss';


const SideBar = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ sideBar, setSideBar ] = React.useState([]);

  useEffect(() => {
    doGetSideBar(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(state.sideBar) setSideBar(state.sideBar);
  }, [state]);

  const renderExtractBoldLabel = (label) => {
    return (
      <span className="side-bar__extract__label-bold">
        {label}
      </span>
    )
  }

  const renderExtractLabel = (label) => {
    return (
      <span className="side-bar__extract__label">
        {label}
      </span>    
    )
  }

  const renderExtractValue = (label) => {
    return (
      <span className="side-bar__extract__value">
        {label}
      </span>    
    )
  }

  const renderExtractResume = (sideBar) => {
    return (
      <React.Fragment>
        <div className="side-bar__extract__row">
          {renderExtractBoldLabel('Despesas declaradas')}
          {renderExtractLabel('Despesas declaradas pelo trooper')}
        </div>
        {renderExtractValue(`${sideBar.currency.symbol} ${sideBar.declared}`)}
        <div className="side-bar__extract__row">
          {renderExtractBoldLabel('Despesas aprovadas')}
          {renderExtractLabel('Despesas aprovadas pelo trooper')}
        </div>
        {renderExtractValue(`${sideBar.currency.symbol} ${sideBar.received}`)}
        <div className="side-bar__extract__row">  
          {renderExtractBoldLabel('Pagamento realizado')}
          {renderExtractLabel('Pagamento realizado pelo financeiro')}
        </div>
        {renderExtractValue(`${sideBar.currency.symbol} ${sideBar.returned}`)}
      </React.Fragment>
    )
  }

  if(!sideBar)
    return <></>

  return (
    <React.Fragment>
      {sideBar.map((sideBar, index) => (
        <div className="side-bar" key={sideBar.updatedOn + index}>
          {openStatusCard(sideBar.accountabilityStatus)}
          <div className="side-bar__balance">
            <span className="side-bar__balance__label">
              SALDO
            </span>
            <span className="side-bar__balance__text">
              {`${sideBar.currency.symbol}: ${sideBar.declared}`}
            </span>
          </div>
          <div className="side-bar__contante">            
            <div className='side-bar__up-down'>
              {renderFontAwesomeIcon('BALANCE_DOWN')}
              <div className='side-bar_flex-column'>
                <span className="side-bar__content__label">
                  Gastou
                </span>
                <span className="side-bar__card__container-resumo__gasto-recebeu__value">
                  {`${sideBar.currency.symbol}: ${sideBar.declared}`}
                </span>
              </div>
            </div>
            <div className='side-bar__up-down'>
              {renderFontAwesomeIcon('BALANCE_UP')}
              <div className='side-bar_flex-column'>
                <span className="side-bar__content__label">
                  Recebeu
                </span>
                <span className="side-bar__card__container-resumo__gasto-recebeu__value">
                  {`${sideBar.currency.symbol}: ${sideBar.received}`}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="side-bar__extract__title">Extrato</div>
            <div className="side-bar__extract">
              <span className="side-bar__extract__sub-title">
                Descrição
              </span>
              <span className="side-bar__extract__sub-title">
                Valor
              </span>
              {renderExtractResume(sideBar)}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default SideBar;

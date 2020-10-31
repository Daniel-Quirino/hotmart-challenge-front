import React from 'react';

import './QuickOps.scss';

const QuickOps = () => {
  return (
      <header className='header__container'>
        <div className='header__grid'>
          <strong className='header__title'> Reembolso - Confraternização </strong>
          <ul className='header__resume'>
            <li className='header__item'>
              <strong className='header__label' > Justificativa: </strong>
              <p className='header__paragraph' > Reembolso referente a confraternização das equipes Backoffice / BI / Analytics.</p>
            </li>
            <li className='header__item'>
              <strong className='header__label' > Finalidade: </strong>
              <p className='header__paragraph' > Confraternização</p>
            </li>
            <li className='header__item'>
              <strong className='header__label' > Quantidade: </strong>
              <p className='header__paragraph' > 33 pessoas</p>
            </li>
            <li className='header__item'>
              <strong className='header__label'> Projeto: </strong>
              <p className='header__paragraph'> - </p>
            </li>
          </ul>
          <div className='header__coste'>
                <hr/>
                <ul >
                  <li>
                    <strong className='header__label' > Centro de Custo: </strong>
                  </li>
                  <li className='header__item'>
                    <p className='header__paragraph'> 50% - TEC-DEV-Back Office </p>
                  </li>
                  <li className='header__item'>
                    <p className='header__paragraph'> 50% - BKO-DEV-BI-Analytics </p>
                  </li>
                </ul>
            </div>
          <div className='header__education'>
            <hr/>
            <p className='header__paragraph'> Esta solicitação será paga com o Budget de educação / confraternização. </p>
          </div>
        </div>
      </header>
  );
}

export default QuickOps;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { handleHeaderTitle } from './utils';

import { Store } from '../../Infrastructure/Store/Store';
import doGetHeader from '../../Infrastructure/Actions/Header';

import './Header.scss';

const Header = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ header, setHeader ] = React.useState();

  useEffect(() => {
    doGetHeader(dispatch);
  }, []);

  useEffect(() => {
    if(state.header) setHeader(state.header);
  }, [state]);

  const renderHeaderResume = () => {
    return (
      <ul className='header__resume'>
        <li className='header__item'>
          <strong className='header__label' > Justificativa: </strong>
          <p className='header__paragraph' > {header.justification}</p>
        </li>
        <li className='header__item'>
          <strong className='header__label' > Finalidade: </strong>
          <p className='header__paragraph' > {header.purpose} </p>
        </li>
        <li className='header__item'>
          <strong className='header__label' > Quantidade: </strong>
          <p className='header__paragraph' > {header.accountabilityExtraInfo.amountOfPeople}</p>
        </li>
        <li className='header__item'>
          <strong className='header__label'> Projeto: </strong>
          <p className='header__paragraph'> - </p>
        </li>
      </ul>
    )
  }


  if(!header || !header.accountabilityExtraInfo)
    return <></>

  return (
      <header className='header__container'>
        <div className='header__grid'>
          <strong className='header__title'> {handleHeaderTitle(header)} </strong>
          {renderHeaderResume()}
          <div className='header__hr1'>
            <hr/>
          </div>
          <div className='header__coste'>
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
          <div className='header__hr2'>
            <hr/>
          </div>
          <div className='header__education'>
            <FontAwesomeIcon icon={faGraduationCap} size="2x"/>
            <p className='header__paragraph'> Esta solicitação será paga com o Budget de educação / confraternização. </p>
          </div>
        </div>
      </header>
  );
}

export default Header;

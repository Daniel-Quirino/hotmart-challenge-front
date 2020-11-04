import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { handleHeaderTitle, getPurposeByIdentifier } from './utils';

import { Store } from '../../../../Infrastructure/Store/Store';
import doGetHeader from '../../../../Infrastructure/Actions/Header';

import './Header.scss';

const Header = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ header, setHeader ] = React.useState();

  useEffect(() => {
    doGetHeader(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(state.header) setHeader(state.header);
  }, [state]);

  const renderHeaderResumeList = () => {
    return (
      <ul className='header__resume'>
        {renderHeaderResumeItem('Justificativa', header.justification)}
        {renderHeaderResumeItem('Finalidade', getPurposeByIdentifier(header.purpose))}
        {renderHeaderResumeItem('Quantidade', header.accountabilityExtraInfo.amountOfPeople)}
        {renderHeaderResumeItem('Projeto', header.project.title)}
      </ul>
    )
  }

  const renderHeaderResumeItem = (label, paragraph) => {
    return(
      <li className='header__item' key={label+paragraph}>
        <strong className='header__label' > {label}: </strong>
        <span className='header__paragraph' > {paragraph} </span>
      </li>
    )
  }

  const renderCoste = (costCenters) => {
    return (
      <div className='header__coste'>
        <ul >
          <li key={costCenters}>
            <strong className='header__label' > Centro de Custo: </strong>
          </li>
          {renderListOfCostCenters(costCenters)}
        </ul>
      </div>
    )
  }

  const renderListOfCostCenters = (costCenters) => {
    return costCenters.map(cost => {
      return (
        <li className='header__item' key={cost.id}>
          <span className='header__paragraph'> {`${cost.percentage}% - ${cost.reviser.name}`} </span>
        </li>
      )
    });
  }

  const renderIsEducationBudget = (isEducation) => {
    return (
      <div className='header__education'>
        <FontAwesomeIcon 
          className='header__education_icon-color'
          icon={faGraduationCap} 
          size="2x"
        />
    <p className='header__paragraph'> Esta solicitação {isEducation ? '' : <b>não</b>} será paga com o Budget de educação / confraternização. </p>
      </div>
    )
  }


  if(!header || !header.accountabilityExtraInfo)
    return <></>

  return (
    <header className='header__container'>
      <div className='header__grid'>
        <strong className='header__title'> {handleHeaderTitle(header)} </strong>
        {renderHeaderResumeList()}
        <div className='header__hr1'>
          <hr/>
        </div>
        {renderCoste(header.costCenters)}
        <div className='header__hr2'>
          <hr/>
        </div>
        {renderIsEducationBudget(header.fraternizationEducationBudget)}
      </div>
    </header>
  );
}

export default Header;

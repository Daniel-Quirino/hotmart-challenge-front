import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  company: 'Hotmart',
  header: {},
  timeline: []
};

export const Store = createContext(initialState);

export const useAppContext = () => useContext(Store);

export function reducer(state, action) {
  switch (action.type) {
    case 'HEADER':
      return {
        ...state,
        header: action.payload
      }
    case 'TIMELINE':
      return {
        ...state,
        timeline: action.payload
      }
    default:
      return { ...state };
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { children } = props;
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

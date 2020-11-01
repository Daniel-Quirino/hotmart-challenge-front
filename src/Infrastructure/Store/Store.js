import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  company: 'Hotmart',
};

export const Store = createContext(initialState);

export const useAppContext = () => useContext(Store);

export function reducer(state, action) {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        user: action.payload
      }
    case 'ANOTHER_USER':
      return {
        ...state,
        anotherUser: action.payload
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

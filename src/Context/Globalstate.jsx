import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
//intial state
const intialState = {
  transaction: [
    
  ],
};

//create context

export const GlobalContext = createContext(intialState);

//provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  //Actions  
  function deleteTransaction(id) {
   dispatch({
    type:'DELETE_TRANSACTION',
    payload:id
   });
  }
  function AddTransaction(transaction) {
    dispatch({
     type:'ADD_TRANSACTION',
     payload:transaction
    });
  }
  return (
    <GlobalContext.Provider 
    value={{ transaction: state.transaction,
    deleteTransaction,
    AddTransaction
     }}>
      {children}
    </GlobalContext.Provider>
  );
};

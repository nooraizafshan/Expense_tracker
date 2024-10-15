import React, { createContext, useReducer } from "react";
import AppReduceer from './AppReduceer';
//intial state
const intialState = {
  transaction: [
    { id: 1, text: "Cash", amount: 400 },
    { id: 2, text: "Salary", amount: 5000 },
    { id: 3, text: "Rent", amount: -1000 },
    { id: 4, text: "Groceries", amount: 200 },
  ],
};

//create context

export const GlobalContext = createContext(intialState);

//provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  return (
    <GlobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalstate";
export const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

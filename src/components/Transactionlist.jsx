import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalstate";
import { Transaction } from "./Transaction";

export const Transactionlist = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/Globalstate';

export const Transaction = () => {
  const { AddTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,  // Make sure to use 'amount' instead of 'Amount'
    };
    AddTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text.....'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}  // Corrected here
            placeholder='Enter amount.....'
          />
          <button className='btn'>Add transaction</button>
        </div>
      </form>
    </>
  );
};

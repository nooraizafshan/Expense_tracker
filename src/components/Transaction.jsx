import React,{useState} from 'react'

export const Transaction = () => {

    const[text,setText]=useState();
    const [Amount,setAmount] = useState (0);
  
  return (
    <>
      <h3>Add new Transaction</h3>
      <form>
      <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' value={text} onChange={(e) =>setText(e.target.value)} placeholder='Enter text.....'/>
      </div>
      <div className='form-control'>

        <label htmlFor='amount'>
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input type='number'value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount.....'/>
         <button className='btn'>Add transaction</button>

      </div>
      </form>
    </>
  )
}



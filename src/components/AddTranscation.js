import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTranscation = () => {
    const { addTranscation } = useContext(GlobalContext);
    const[text, setText] = useState('');
    const[amount, setAmount] = useState(0);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTranscation(newTransaction);
    }

  return (
    <>
       <h3>Add New Transcation</h3> 
       <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label for='text'>Text</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text...'/>
        </div>
        <div className='form-control'>
            <label for='text'>Amount <br/> (Negative-Expense, Positive-Income) </label>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value) } placeholder='Enter Amount...'/>
        </div>
        <button className='btn'>Add Transcation</button>
       </form>
    </>
  )
}

export default AddTranscation
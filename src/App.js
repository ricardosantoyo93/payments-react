import React, { useState } from 'react';

import Item from './components/Item';

import './App.css';

const App = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState();

  const handleEdit = (value, index) => {
    let newState = [...payments];
    newState[index] = value;
    setPayments(newState);
  };

  const handleDelete = (index) => {
    const newState = [...payments];
    newState.splice(index, 1);

    setPayments(newState);

    paymentList = payments.map((value, index) => (
      <Item key={index} index={index} edit={handleEdit} del={() => handleDelete(index)}>{ value }</Item>
    ));
  }

  const handleSubmit = () => {
    const newState = [...payments];
    newState.push(newPayment);

    setPayments(newState);
    setNewPayment('');
  };

  let paymentList = payments.map((value, index) => (
    <Item key={index} index={index} edit={handleEdit} del={() => handleDelete(index)}>{ value }</Item>
  ));

  return (
    <div className="App">
      <input className="app-input" type='text' onChange={(e) => setNewPayment(e.target.value)} value={newPayment} placeholder='Enter Payment' />
      <button className='app-submit' onClick={handleSubmit}>Submit</button>
      { paymentList }
    </div>
  );
}

export default App;

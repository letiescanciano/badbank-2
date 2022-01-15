import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import logo from './bank-logo.jpg';
import Spa from './index';
import { useContext } from 'react';
import Balance from './balance';
import { UserContext } from './UserContext';

const ATMDeposit = ({ onChange, isDeposit, isValid }) => { 
  const choice = ['Deposit'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange}></input>
      <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
    </label>
  );
};

const Deposit = () => {
  // let deposit = 0; // state of this transaction
  const [deposit, setDeposit] = React.useState(0)
  const [totalState, setTotalState] = React.useState('')
  const [isDeposit, setIsDeposit] = React.useState(true)
  const [atmMode, setAtmMode] = React.useState('')
  // const [newTotal, setNewTotal] = React.useState('')
  const [validTransaction, setValidTransaction] = React.useState(false)
  const ctx = React.useContext(UserContext)
  const user = ctx.users.find(user => user.email === 'abel@mit.edu')

  let status = `Account Balance $ ${user.balance} `
  const handleChange = event => {
    console.log(Number(event.target.value))
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false)
    } else {
      setValidTransaction(true)
    }
    setDeposit(Number(event.target.value))
  }

  const handleSubmit = event => {
    let newTotal = deposit + user.balance
    ctx.setBalance(newTotal)
    //I want to set user.balance to refresh as the newTotal;

    alert('Transaction Successful! Your balance is now $' + newTotal + '!')
    setValidTransaction(false)
    // event.preventDefault();
  }

  const handleModeSelect = event => {
    console.log(event.target.value)
    setAtmMode(event.target.value)
    setValidTransaction(false)
    if (event.target.value === 'Deposit') {
      setIsDeposit(true)
    } else {
      setIsDeposit(false)
    }
  }

  return (
    <form
      style={{ background: '#d3d3d3', width: '28rem', textAlign: 'right' }}
      onSubmit={handleSubmit}
    >
      <>
        <h2 id='total'>{status}</h2>
        <label>
          <br></br>
          <br></br>Insert amount below to deposit:{' '}
        </label>
        <br></br>
        <br></br>
        <select
          onChange={e => handleModeSelect(e)}
          name='mode'
          id='mode-select'
        >
          <option id='no-selection' value=''>
            Select
          </option>
          <option id='deposit-selection' value='Deposit'>
            Deposit
          </option>
        </select>
        {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
          ></ATMDeposit>
        )}
      </>
    </form>
  )
}

export default Deposit

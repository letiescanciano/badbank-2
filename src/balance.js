
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
// import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import logo from './bank-logo.jpg';
import userContext from './contextProject';
// import { useContext } from 'react';
import ATMWithdraw from './withdraw';
import Deposit from './deposit'; 
import UserContext from './index';


// function Balance(){
  // const [totalState, setTotalState] = React.useState(0);
  // const [totalAmount, setTotalAmount] = React.useState(0);
  // let status = 'zero';
//     const ctx = React.useContext(UserContext);
     
const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState('');
  // const ctx = React.useContext(UserContext); 
  
  let status = `Account Balance $ ${totalState} `;
      let Balance = `Your Account Balance is $ ${totalAmount} `;
          console.log(`Your Account Balance: ${totalAmount}`);
      const handleChange = (event) => {
            console.log(Number(event.target.value));
            setTotalAmount(Number(event.target.value));
      }

      // const handleSubmit = (event) => {
      //   let newTotal = Balance;
      //   setTotalState(newTotal);
      // // setValidTransaction(false);
      // event.preventDefault();
      // }; 

return (
    <div>
        <p>Your account balance is ${userContext}</p>
    </div>
    );
  };

export default Account;
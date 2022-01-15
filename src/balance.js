
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
// import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import logo from './bank-logo.jpg';
import { useContext } from 'react';
import ATMWithdraw from './withdraw';
import Deposit from './deposit'; 
import { UserContext } from './UserContext';
import { totalState} from './deposit';
     

const Balance = () => {
  const ctx = React.useContext(UserContext); 
  const user = ctx.users.find(user => user.email ==='abel@mit.edu');

return (
    <div>
        <p>Your account balance is ${user.balance}</p>
    </div>
    );
  }

export default Balance;
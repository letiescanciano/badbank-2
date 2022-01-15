import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
// import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import logo from './bank-logo.jpg';
import { Card } from "react-bootstrap";
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Balance from './balance';
import Spa from './index';

const AllData = () => {
    const ctx = React.useContext(UserContext); 
    const user = ctx.users.find(user => user.email ==='abel@mit.edu');

return (
    <>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
          {ctx.users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
    </tbody>
        </>
    );
  }

export default AllData;
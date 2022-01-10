import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { Card } from "react-bootstrap";
import './App.css';
import userContext from './contextProject';
import { useContext } from 'react';

function AllData(){
    const ctx = React.useContext(userContext);
    let users = userContext.state.users;
    let nav = document.getElementById("nav1");
    if (nav !== null) {
      document.getElementById("nav1").className = "nav-item";
      document.getElementById("nav2").className = "nav-item";
      document.getElementById("nav3").className = "nav-item";
      document.getElementById("nav4").className = "nav-item active";    
  }

    return (
      <>
      <h1>{users}</h1>
      {JSON.stringify(ctx)}
      </>
    );
  }

export default AllData;

//   return (
//     <Card style={{ backgroundColor: "lightsalmon", color: "black", width: "24rem" }}>
//       <Card.Header>All Data in Store</Card.Header>
//       <Card.Body>
//         <JSONPretty id="json-pretty" data={users}></JSONPretty>
//       </Card.Body>

//     </Card>
    
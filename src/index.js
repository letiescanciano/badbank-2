import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext, UserContextProvider } from './UserContext'
import { useContext } from 'react'

import './index.css'
import NavBar from './navBar'
import Home from './home'
import CreateAccount from './createAccount'
import Login from './login'
import AllData from './alldata'
import reportWebVitals from './reportWebVitals'
import Balance from './balance'
import Withdraw from './withdraw'
import Deposit from './deposit'

function Spa() {
  const [totalState, setTotalState] = React.useState(0)

  return (
    <HashRouter>
      <NavBar />
      <UserContextProvider>
        <div className='container' style={{ padding: '20px' }}>
          <Route path='/' exact component={Home} />
          <Route path='/home/' exact component={Home} />
          <Route path='/login/' component={Login} />
          <Route path='/createAccount/' component={CreateAccount} />
          <Route path='/deposit/' component={Deposit} />
          <Route path='/withdraw/' component={Withdraw} />
          <Route path='/balance/' component={Balance} />
          <Route path='/alldata/' component={AllData} />
        </div>
      </UserContextProvider>
    </HashRouter>
  )
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

reportWebVitals();

export default Spa;


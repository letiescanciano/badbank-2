import React, { useState } from 'react';
import Balance from './balance';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(200)

  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name: 'abel',
            email: 'abel@mit.edu',
            password: 'secret',
            balance: balance,
          },
        ],
        setBalance,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
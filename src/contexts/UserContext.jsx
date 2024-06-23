import { createContext, useState } from 'react';

// Create Context -> Assign any initial value(optional)
const UserContext = createContext({
  loggedInUser: 'Hi!',
});

export default UserContext;

// Create required states, Create Provider and then wrap App.jsx with it.
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

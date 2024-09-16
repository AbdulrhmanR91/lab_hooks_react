import React, { createContext, useState, useContext } from 'react';
import ComponentTwo from '../componentTwo/ComponentTwo';
import ComponentFour from '../ComponentFour/componentFour';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function ComponentOne() {
  const [user] = useState({
    name: "Abdo",
    Email: "Abdo@gmail.com",
    Address: "cairo",
    age: 21,
    Gender: "Male"
  });

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user.name}!`}</h1>
      <ComponentTwo />
      <ComponentFour />
    </UserContext.Provider>
  );
}

export default ComponentOne;
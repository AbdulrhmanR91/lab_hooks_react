import React from 'react';
import { useUserContext } from '../../componentOne/componentOne';


function ComponentFive() {
  const user = useUserContext();

  return (
    <div className="Card2">
      <h2>Component Five</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.Email}</p>
      <p>Address: {user.Address}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.Gender}</p>
    </div>
  );
}
export default ComponentFive;
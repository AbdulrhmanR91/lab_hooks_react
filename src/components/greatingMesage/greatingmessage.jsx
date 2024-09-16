import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (username) {
      setGreeting(`Hello, ${username}!`);
    } else {
      setGreeting("");
    }
  }, [username]); 

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={handleInputChange}
        required
      />
      <h2>{greeting}</h2>
    </div>
  );
};

export default Greeting;

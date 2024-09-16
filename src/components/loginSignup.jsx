import React, { useState, useRef, useEffect } from "react";
import "../components/Form.css";

function Form() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (isSignUp) {
      nameInputRef.current.focus();
    } else {
      emailInputRef.current.focus();
    }
  }, [isSignUp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString();
    setSubmittedData({ name, email, now });
  };

  return (
    <div className="container">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="details">
            <label htmlFor="name">Name:</label>
            <input
              ref={nameInputRef}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="details">
          <label htmlFor="email">Email:</label>
          <input
            ref={emailInputRef}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <button className="toggle-btn" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Login" : "Sign Up"}
      </button>

      {submittedData && (
        <div className="result">
          {isSignUp ? (
            <>
              <h3>Welcome: {submittedData.name}</h3>
              <p>Your email is: {submittedData.email}</p>
              <p>You are signed up to the website at {submittedData.now}</p>
            </>
          ) : (
            <>
              <h3>Welcome: {submittedData.email}</h3>
              <p>You are logged in to the account at {submittedData.now}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Form;

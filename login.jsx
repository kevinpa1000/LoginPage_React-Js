import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // do something with username and password
    console.log('Username:', username);
    console.log('Password:', password);
    setLoggedIn(true);
  }

  if (loggedIn) {
    return <SuccessPage />;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function SuccessPage() {
  return (
    <div className="success-container">
      <h1>Welcome!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default LoginPage;
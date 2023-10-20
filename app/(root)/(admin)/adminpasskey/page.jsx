"use client";

import { useState } from "react";

const Page = () => {

  const [password, setPassword] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Entered password:", password);
    console.log("Correct Password:", process.env.PASSWORD)
    if (password === process.env.PASSWORD) {
      // Redirect the user to the protected content page
      console.log("Okay!!")
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

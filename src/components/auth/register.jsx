"use client";

import { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    const { firstName, lastName, username, email, password } = registerData;

    if (!firstName || !lastName || !username || !email || !password) {
      console.log("All fields must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="space-y-4">
      <div className="text-center">
        <h1>Register</h1>
        <p>Create an account for ecourse</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChangeInput}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChangeInput}
        />
      </div>
      <input
        name="username"
        placeholder="username"
        onChange={handleChangeInput}
      />
      <input
        name="email"
        placeholder="Email@domain.com"
        onChange={handleChangeInput}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChangeInput}
      />
      <button onClick={handleRegister}>Register</button>
    </main>
  );
};

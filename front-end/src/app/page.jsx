"use client";

import Login from "./login/page";
import Signup from "./sign-up/page";

export default function Home() {
  // const BACKEND_ENDPOINT = "http://localhost:4000/sign-up";

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const userData = {
  //     name: event.target.name.value,
  //     password: event.target.password.value,
  //     email: "bb@gmail.com",
  //   };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   };
  //   const response = await fetch(BACKEND_ENDPOINT, options);
  //   const data = await response.json();
  // };

  return (
    <div>
      <Login />
    </div>
  );
}

"use client";

import Link from "next/link";

export default function Login() {
  const BACKEND_ENDPOINT = "http://localhost:4000/sign-up";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
      email: "bb@gmail.com",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
  };

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex items-center justify-center ">
            <img className="w-[120px] h-[50px] " src="./Geld.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="h1">Welcome Back</h1>
            <p>Welcome back, Please enter your details</p>
          </div>
          <form
            action=""
            className="flex flex-col gap-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                className="border p-2 rounded-lg "
                placeholder="email"
              />

              <input
                type="password"
                name="password"
                className="border p-2 rounded-lg"
                placeholder="password"
              />
            </div>
            <Link
              className="flex justify-center items-center"
              href={"/loading"}
            >
              <button className="btn btn-primary rounded-xl bg-blue-700">
                Log in
              </button>
            </Link>
            <div className="flex justify-center items-center gap-2">
              <p className="text-base">Don't have account?</p>

              <Link href={"/sign-up"}>
                <button className="btn">
                  <span className="loading loading-spinner"></span>Sign up
                </button>
              </Link>
            </div>
          </form>

          <div className="bg-blue-100" href="/"></div>
        </div>
      </div>
      <div className="bg-blue-700 w-[50%]"></div>
    </div>
  );
}
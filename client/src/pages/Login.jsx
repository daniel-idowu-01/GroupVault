import React, { useState } from "react";
import { Link } from "react-router-dom";
import SavingImage from "../../public/images/savings.svg";
import Google from "../../public/images/google.svg";

const Login = () => {
  const [formInput, setFormInput] = useState({});
  const inputStyle = "border block my-2 ml-5 px-4 py-2";
  const buttonStyle =
    "border bg-button p-3 rounded-md hover:bg-opacity-80 transition-all";

  const handleFormChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("Error!!!");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log("Errrrrrrrrrr", err);
      });
  };

  return (
    <section className="md:flex">
      <article className="md:w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="mt-5 text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => handleFormChange(e)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  onChange={(e) => handleFormChange(e)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center w-full gap-5 opacity-50">
              <div className="border w-full"></div>
              <p>OR</p>
              <div className="border w-full"></div>
            </div>

            <button
              type="button"
              className={`${buttonStyle} bg-white text-black w-full flex items-center justify-center gap-5`}
            >
              <img src={Google} alt="" className="inline w-5" />
              Continue with Google
            </button>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </article>

      <article className="md:w-1/2 h-screen hidden md:flex flex-col items-center justify-center">
        <img src={SavingImage} alt="Savings" className="animate-updown" />
      </article>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const edit = () => {
  const router = new useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "number") {
      setNumber(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "confirm-password") {
      setConfirmPassword(e.target.value);
    }
  };

  const submit = async (e) =>{
    e.preventDefault();

    if (password != ConfirmPassword) {
      toast.error("Password doesn't match with confirm-password.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setName("");
      setNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const dataBody = {
      name: name,
      number: number,
      email: email,
      password: password,
    };

    let res = await fetch("/api/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();

    setName("");
    setNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    toast.success(
      "Your Account credentials has been edited successfully.",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div class="min-h-screen  flex items-center justify-center flex-col">
        <h2 class="font-semibold text-4xl  mx-auto mb-3">
          Edit Your Profile ✏️
        </h2>

        <div class="container max-w-screen-sm my-10 p-6 shadow-2xl rounded-lg">
          <div class="md:col-span-5 my-6">
            <label htmlFor="full_name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={name}
            />
          </div>

          <div class="md:col-span-5 my-6">
            <label htmlFor="number">Number</label>
            <input
              onChange={handleChange}
              type="number"
              name="number"
              id="number"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={number}
            />
          </div>

          <div class="md:col-span-5 my-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg w-full p-2 "
              placeholder="xyz@email.abc"
              required={true}
              value={email}
            />
          </div>

          <div class="md:col-span-5 my-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg w-full p-2 "
              placeholder="******"
              required={true}
              value={password}
            />
          </div>

          <div class="md:col-span-5 my-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg w-full p-2 "
              placeholder="******"
              required={true}
              value={confirmPassword}
            />
          </div>
          <div className="flex flex-end" onClick={submit}>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Commit Changes
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default edit;

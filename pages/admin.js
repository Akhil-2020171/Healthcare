import React from "react";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";
import crypto from "crypto";

const Admin = () => {
  const router = new useRouter();
  const [token, setToken] = useState();
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setIsLogged] = useState();

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataBody = {
      email: email,
      password: crypto.createHash("sha256").update(password).digest("hex"),
    };
    let res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();

    setEmail("");
    setPassword("");
    if (response.success == true) {
      localStorage.setItem("token", response.token);
      toast.success("Your are succesffully loged in.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLogged(true);
    } else {
      toast.error(response.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const Users = async () => {
    const dataBody = {
      email: String,
    };
    let res = await fetch("/api/getAllusers", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    if (response.success == true) {
      setUserData(response.result);
    } else {
      setUserData([]);
    }
  };
  const Delete = async (Email) => {
    const dataBody = {
      email: Email,
    };
    let res = await fetch("/api/deleteUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    console.log(response.success);
    setTimeout(() => {
      router.push("/admin");
    }, 2000);
  };

  const Approve = async (Email) => {
    const dataBody = {
      email: Email,
    };
    let res = await fetch("/api/approveUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    console.log(response.success);
    setTimeout(() => {
      router.push("/admin");
    }, 2000);
  };

  useEffect(() => {
    Users();
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    if (localStorage) {
      localStorage.removeItem("token");
      setToken("");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
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
        pauseOnHover
        theme="light"
      />
      {isLogged ? (
        <div>
          <div>
            <button
              onClick={handleLogOut}
              className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              {" "}
              <Link
                href="/"
                legacyBehavior
              >
                Admin Log out
              </Link>
            </button>
          </div>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Role</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((x) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={x.email}
                    >
                      <td>{x.name}</td>
                      <td>{x.email}</td>
                      <td>{x.phone}</td>
                      <td>{x.role}</td>
                      <td>{x.status}</td>
                      <button
                        type="button"
                        onClick={() => Delete(x.email)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <Link href="#">Delete</Link>
                      </button>
                      {x.status ? (
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-base mt-4 md:mt-0">
                          <Link href="#">Approved</Link>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => Approve(x.email)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          <Link href="#">Approve</Link>
                        </button>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
              <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-3xl">
                    Admin Login 🔖
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                    method="POST"
                  >
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        value={email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
                        placeholder="xyz@email.abc"
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                        required={true}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-5 text-gray-600 bg-gray-300 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Admin;

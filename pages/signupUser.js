import React from "react";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import crypto from "crypto";

const Signup = () => {
  const router = new useRouter();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [Otp, setOtp] = useState();
  const [otp0, setotp0] = useState();
  const [isOTPField, setIsOTPField] = useState(false);

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
    } else if (e.target.name == "role") {
      setRole(e.target.value);
    } else if (e.target.name == "otp") {
      setOtp(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
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
      setRole("");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const dataBody = {
      email: email,
    };

    let res0 = await fetch("/api/getEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response0 = await res0.json();

    if (response0.data != null) {
      toast.error("Email Already Exists.", {
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
      setRole("");
      setPassword("");
      setOtp("");
      setConfirmPassword("");
      return;
    }
  };

  const submitData = async () => {
    if (otp0.toString() != Otp.toString()) {
      setName("");
      setNumber("");
      setEmail("");
      setRole("");
      setPassword("");
      setConfirmPassword("");
      setOtp("");
      toast.error("OTP doesn't match.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/signupUser",as="ihdhu23b123n2323j1n32n3");
      }, 5000);
    } else {
      const dataBody = {
        name: name,
        number: number,
        role: role,
        email: email,
        password: crypto.createHash("sha256").update(password).digest("hex"),
        status: false,
      };

      let res = await fetch("/api/signup", {
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
      setRole("");
      setConfirmPassword("");
      setOtp("");
      toast.success(
        "Your Account has been created but need to be aproved by admin.",
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
    }
  };

  const SendOtp = async () => {
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    setotp0(otp);

    const dataBody_otp = {
      email: email,
      otp: otp,
    };

    let res1 = await fetch("/api/sendOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody_otp),
    });

    let response1 = await res1.json();
    if (response1.success == true) {
      console.log("Done");
      setIsOTPField(true);
    } else {
      console.log("Error");
      return;
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
        pauseOnHover={false}
        theme="light"
      />
      {isOTPField ? (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Enter your OTP ✏️
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={submitData}
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="otp"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      OTP
                    </label>
                    <input
                      value={Otp}
                      onChange={handleChange}
                      type="number"
                      name="otp"
                      id="otp"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-gray-500 bg-gray-200 hover:bg-green-200 font-normal rounded-lg text-sm px-2 py-2 text-center "
                  >
                    Enter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create your account ✏️
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={handleChange}
                      type="name"
                      name="name"
                      id="name"
                      placeholder="John Raje Chak"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone
                    </label>
                    <input
                      value={number}
                      onChange={handleChange}
                      type="number"
                      name="number"
                      id="number"
                      placeholder="8753217897"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Role : User or Organisation
                    </label>
                    <input
                      value={role}
                      onChange={handleChange}
                      type="role"
                      name="role"
                      id="role"
                      placeholder="Type User or Type Organisation"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      value={email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      placeholder="xyz@email.abc"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
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
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Confirm password
                    </label>
                    <input
                      value={ConfirmPassword}
                      onChange={handleChange}
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-black-200 sm:text-sm rounded-lg w-full p-2 "
                      required={true}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                        required={true}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-500 hover:underline"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => SendOtp()}
                    type="submit"
                    className="w-full text-gray-500 bg-gray-200 hover:bg-green-200 font-normal rounded-lg text-sm px-2 py-2 text-center "
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href={"/loginUser"}
                      legacyBehavior
                      as={
                        "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                      }
                    >
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:text-green-300"
                      >
                        Login here
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Signup;

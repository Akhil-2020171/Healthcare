import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

const forgot = () => {
  const router = new useRouter();
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [Otp, setOtp] = useState();
  const [otp0, setotp0] = useState();
  const [isOTPField, setIsOTPField] = useState(false);
  const [addNewPass, setAddNewPass] = useState(false);

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "otp") {
      setOtp(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "confirm-password") {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    if (response0.data == null) {
      toast.error("Email not Exists.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
      return;
    } else {
      SendOtp();
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (otp0.toString() != Otp.toString()) {
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
      return;
    } else {
      setAddNewPass(true);
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

  const handleSubmitNew = async (e) => {
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
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    const response = await fetch("/api/newPass", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.success == true) {
      toast.success("New Password has been added.", {
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
        router.push("/loginUser",as="568sd26a5sd6dsdad6s5d");
      }, 5000);
    } else {
      toast.error("Error.", {
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
        router.push("/forgotPass",as="65651s5d5a1sd51sd12s");
      }, 5000);
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
      {!addNewPass ? (
        <div>
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
                      Forgot Password 💭
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit}
                      method="POST"
                    >
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
                      <button
                        type="submit"
                        className="w-full text-gray-500 bg-gray-200 hover:bg-green-200 font-normal rounded-lg text-sm px-2 py-2 text-center "
                      >
                        Sumbit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        <div>
          <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Enter New Password 💭
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={() => handleSubmitNew()}
                    method="POST"
                  >
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

                    <button
                      type="submit"
                      className="w-full text-gray-500 bg-gray-200 hover:bg-green-200 font-normal rounded-lg text-sm px-2 py-2 text-center "
                    >
                      Confirm
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

export default forgot;
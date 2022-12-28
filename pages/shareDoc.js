import React from "react";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Share = () => {
  const router = useRouter();
  const { Block, Blockchain } = require("../blockchain.js");
  const [token, setToken] = useState();
  const [userData, setUserData] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [input, setInput] = useState(false);
  const [isDoc, setIsDoc] = useState(false);
  const [EmailChose , setEmailChose] = useState(false);

  const handleChange = (e) => {
    if (e.target.name == "role") {
      setRole(e.target.value);
    }
  };

  var decodeData = {};
  if (token) {
    decodeData = jwt_decode(token.toString());
  }

  const counting = async () => {

    const body = { email: decodeData.email };
    const count = await fetch("/api/countDocs", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(body),
    });

    const res = await count.json();
    if (res.result > 0) {
      setIsDoc(true);
    }
  };

  const Files = async () =>{
    const dataBody = {
      email: decodeData.email,
    };

    let res = await fetch("/api/getAllFiles", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });

    let response = await res.json();
    if (response.success == true) {
      setFileData(response.result);
    } else {
      setFileData([]);
    }
  };

  const Users = async () => {
    const dataBody = {
      role: role,
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

  const submitData = async (e) => {
    e.preventDefault();
    setInput(true);
  };

  const Share = (Email) => {
    setEmail(Email);
    setEmailChose(true);
    Files();
  };

  const ShareFile = async (File) =>{
    
    const dataBody = {
      email : email,
      file : File
    };

    let res = await fetch("/api/share", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(dataBody),
    });    

    let response = await res.json();
    console.log(response);

    const Chain = new Blockchain();
    Chain.addBlock(new Block(Date.now().toString(), dataBody));
    fs.writeFile("../blockchain.txt", Chain.chain, (err) => {
      if (err) throw err;
    });
    console.log(Chain.isValid(Chain));
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    Users();
    counting();
  }, []);

  return (
    <div>
      {isDoc ? (
        <div>
          {input ? (
            <div>
              {EmailChose ? (
                <div>
                  <section>
                    <div>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th className="py-3 px-6">File</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fileData?.map((x) => {
                            return (
                              <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={x.email}
                              >
                                <td>{x.file}</td>

                                <button
                                  type="button"
                                  onClick={() => ShareFile(x.file)}
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                  <Link href="#">Share</Link>
                                </button>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </section>     
                </div>
              ) : (
                <div>
                  <section>
                    <div>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th className="py-3 px-6">Email</th>
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

                                <button
                                  type="button"
                                  onClick={() => Share(x.email)}
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                  <Link href="#">Share</Link>
                                </button>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}
            </div>
          ) : (
            <div>
              <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Enter your Role ✏️
                      </h1>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={submitData}
                        method="POST"
                      >
                        <div>
                          <label
                            htmlFor="role"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Role
                          </label>
                          <input
                            value={role}
                            onChange={handleChange}
                            type="text"
                            name="role"
                            id="role"
                            placeholder="User / Organisation"
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
            </div>
          )}
        </div>
      ) : (
        <div>
          <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    You have no file to share!!
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
export default Share;
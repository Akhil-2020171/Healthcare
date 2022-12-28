import React from "react";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [docs, setDocs] = useState(0);

  var decodeData = {};
  if (token) {
    decodeData = jwt_decode(token.toString());
  }

  const body = { email: decodeData.email };

  const counting = async () => {
    const count = await fetch("/api/countDocs", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(body),
    });

    const res = await count.json();
    setDocs(res.result);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    counting();
  }, []);

  const handleLogOut = () => {
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
      <div>
        <div className="m-10 p-16 h-screen">
          <div className="p-8 bg-white shadow mt-24">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {" "}
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">{docs}</p>{" "}
                  <p className="text-gray-400">Documents</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative">
                {" "}
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                </div>{" "}
              </div>{" "}
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <Link
                    href={"/shareDoc"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a href="#">Share</a>
                  </Link>
                </button>{" "}
                <button className="text-white py-2 px-8 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  <Link
                    href={"/editDetails"}
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a href="#">Edit</a>
                  </Link>
                </button>{" "}
                <button
                  onClick={handleLogOut}
                  className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  <Link
                    href="/"
                    legacyBehavior
                    as={
                      "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                    }
                  >
                    <a href="#">Log out</a>
                  </Link>
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-20 text-center border-b pb-12">
              {" "}
              <h1 className="text-4xl font-medium text-gray-700">
                {decodeData.name}
              </h1>{" "}
              <p className="font-light text-gray-600 mt-3">
                {decodeData.email}
              </p>{" "}
              <p className="font-light text-gray-600 mt-3">{decodeData.role}</p>{" "}
            </div>{" "}
            <div className="mt-12 flex flex-col justify-center">
              {" "}
              <p className="text-gray-600 text-center font-light lg:px-16">
                It was the best of times, it was the worst of times, it was the
                age of wisdom, it was the age of foolishness, it was the epoch
                of belief, it was the epoch of incredulity, it was the season of
                Light, it was the season of Darkness, it was the spring of hope,
                it was the winter of despair.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

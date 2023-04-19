import React from "react";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";
import { useRef, useState, useEffect } from "react";

const navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  const [token, setToken] = useState("");
  if (typeof window != "undefined") {
    useEffect(() => {
      setToken(localStorage.getItem("token"));
    }, [localStorage.getItem("token")]);
  }

  var decodeData = {};
  if (token) {
    decodeData = jwt_decode(token.toString());
  }

  const ref = useRef();
  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-sm mb-2">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link
              href={"/"}
              legacyBehavior
              as={
                "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
              }
            >
              <a href="/Home" className="mr-5 hover:text-red-500">
                Home
              </a>
            </Link>
            <Link
              href={"/product"}
              legacyBehavior
              as={
                "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
              }
            >
              <a href="#" className="mr-5 hover:text-red-500">
                Buy
              </a>
            </Link>
            <Link
              href={"/contact"}
              legacyBehavior
              as={
                "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
              }
            >
              <a href="#" className="mr-5 hover:text-red-500">
                Contact Us
              </a>
            </Link>
            <Link
              href={"/team"}
              legacyBehavior
              as={
                "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
              }
            >
              <a href="#" className="hover:text-red-500">
                Our Team
              </a>
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="45px"
              viewBox="0 0 107 122"
            >
              <path d="M36.69,14.05h8.74a3,3,0,0,1,3,3V27.15H58.53a3,3,0,0,1,3,3v8.74a3,3,0,0,1-3,3H48.4V51.7a3,3,0,0,1-3,3H36.69a3,3,0,0,1-3-3V41.83H23.59a3,3,0,0,1-3-3V30.11a3,3,0,0,1,3-3H33.72V17a3,3,0,0,1,3-3Z" />
              <path d="M107.51,64.09c1.58,32-10.24,50.91-31.18,58.79C56.1,115.49,44.14,97.41,45,63.6c10.63.56,21.07-1.74,31.18-9.59,9,5.69,20.41,11.07,31.3,10.08Zm-90.3,9.7a2.88,2.88,0,1,1,0-5.76H32.94a2.88,2.88,0,0,1,0,5.76ZM82,17h9.16a6.56,6.56,0,0,1,6.55,6.55c0,11,4.73,30.86-5.61,26.41V23.53a.87.87,0,0,0-.28-.65.92.92,0,0,0-.66-.29H82V44.87q-2.76-1.56-5.58-3.36h0l0,0v-35a1,1,0,0,0-.95-.94H6.55a.84.84,0,0,0-.65.29.86.86,0,0,0-.29.65V84.36A.85.85,0,0,0,5.9,85a.92.92,0,0,0,.65.28H36.21q.57,2.9,1.29,5.61H21.32v10.42a.87.87,0,0,0,.28.66,1,1,0,0,0,.66.29H41.4c.84,1.95,1.76,3.82,2.73,5.61H22.26a6.56,6.56,0,0,1-6.55-6.56V90.92H6.55A6.56,6.56,0,0,1,0,84.36V6.55A6.56,6.56,0,0,1,6.55,0H75.43A6.56,6.56,0,0,1,82,6.55V17ZM97.81,71.83c1.08,21.82-7,34.71-21.26,40.09l-.27-.1V65.09l.18-.13c6.11,3.87,13.92,7.55,21.35,6.87ZM76.22,58c10.34,6.55,19.68,9.66,27.7,8.92,1.4,28.33-9.06,45.06-27.59,52-17.91-6.53-28.49-22.54-27.72-52.47A39.53,39.53,0,0,0,76.22,58Z" />
            </svg>
            <span className="ml-3 text-xl">LumiiHealth</span>
          </a>
          <div className="lg:w-2/5 flex justify-end ">
            {!token ? (
              <button className="inline-flex items-center hover:bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-base mt-4 md:mt-0">
                <Link
                  href={"/loginUser"}
                  legacyBehavior
                  as={
                    "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                  }
                >
                  Login
                </Link>
              </button>
            ) : (
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-base mt-4 md:mt-0">
                <Link
                  href={"/profilePage"}
                  legacyBehavior
                  as={
                    "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
                  }
                >
                  <a href="">{decodeData.name}</a>
                </Link>
              </button>
            )}{" "}
            <button
              onClick={toggleCart}
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-base mt-4 md:mt-0 "
            >
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>

        {/*sidebar*/}
        <div
          ref={ref}
          className=" mt-2 mr-2 rounded-lg w-80 sideCart absolute top-0 right-0 shadow-lg bg-green-50 px-8 py-10 transition-transform translate-x-full border-gray-300 border"
        >
          <h2 className="font-bold text-3xl text-center">Your Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-2 right-2 cursor-pointer text-xl"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className=" font-normal text-center">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 256 256"
                  className="mx-auto mt-5"
                >
                  <path
                    d="m129.27 142.19-85.32-46.82a2.31 2.31 0 0 0 -3.43 2c-.41 18-2 93.55.09 96 3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16c3.66-2.11.86-78.2.15-96.08a2.32 2.32 0 0 0 -3.43-1.93z"
                    fill="#191919"
                  />
                  <path
                    d="m129.27 252.5c-2.47 0-4.81 0-48.44-25.2-42.92-24.79-45.39-27.68-46.32-28.77-2.38-2.8-3.28-3.85-2.89-47.45.19-21.47.69-44.87.9-53.93a10.31 10.31 0 0 1 15.28-8.8l81.48 44.71 81.54-44.74a10.32 10.32 0 0 1 15.27 8.68c.36 9.09 1.23 32.57 1.57 54.15.19 12.24.17 22 0 29.11-.38 12.16-1 17.37-5.66 20.07-.67.39-3.4 2-7.5 4.47-80.02 47.7-81.87 47.7-85.23 47.7zm-81.27-63.59c11.93 8.12 68.16 40.61 81.26 47 8-4 33.89-19.1 77-44.86l4.92-2.94c1-9.16.77-40.76-.71-81.3l-77.35 42.39a8 8 0 0 1 -7.7 0l-77.11-42.31c-.88 41.74-1.01 73-.31 82.02z"
                    fill="#191919"
                  />
                  <path
                    d="m40.6 91.49 88.67-47.29 88.67 47.29-88.67 48.65z"
                    fill="#fff"
                  />
                  <path d="m130.52 41.08v95.94l-88.67-48.66z" fill="#e6e6e6" />
                  <path
                    d="m129.27 142.19-88.67-48.66s-2.38 97 0 99.81c3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16 0-99.81 0-99.81z"
                    fill="#e83a2a"
                  />
                  <path
                    d="m129.27 142.19c-1 2.06-2 102.81 0 102.31 6.35-1.56 85.32-46.93 89-51.75 1.58-2.09 2.39-97.93-.31-99.22s-87.66 46.6-88.69 48.66z"
                    fill="#d32920"
                  />
                  <path
                    d="m217.42 88c4.59-2.53 29.46-16.33 28.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-24.48 14.1-28.13 16.5-3.76-2.61-30.82-21.24-33.9-19.52-3.31 1.8-83.39 46.48-86.26 48.14-2.64 1.57 26.79 16.36 31.34 18.64-4.25 2.15-29.69 14.59-28.12 15.49s83.82 49.44 88.22 49.92c2.83.31 25.8-14.24 28.82-16.24 3.38 2.24 31 20.48 33.76 18.92l87.13-50c1.61-.88-25.92-15.44-31.16-18.16zm-89.73 48.86-87.75-48.81 87.59-46.72 88.31 46.58z"
                    fill="#191919"
                  />
                  <path
                    d="m161.14 164.31c-4 0-9.47-2.68-20.47-9.33-4.79-2.9-9.64-6-13-8.2-2.87 1.8-6.64 4.14-10.33 6.33-13.41 7.89-16.34 8.65-19.34 8.33-2.56-.28-5.74-.62-89.37-49.78l-2-1.17a8.12 8.12 0 0 1 -4.06-7.29c.17-5.52 4.61-7.87 14.34-13 1.38-.73 2.82-1.48 4.25-2.21l-3.58-1.99c-14.26-7.76-18.15-10.64-18.31-16.06a8.3 8.3 0 0 1 4.17-7.44c2.2-1.27 46.78-26.15 83.79-46.8l2.57-1.43c5.16-2.88 11-.32 24.84 8.34 4.81 3 9.61 6.2 13.06 8.54 24.9-16.2 26.79-15.62 30.37-14.52 3.42 1 90.8 46.91 91.51 47.33a8.18 8.18 0 0 1 4.04 7.04c-.05 5.43-3.52 7.44-16.41 14.93l-3.21 1.86 4.77 2.63c14.33 8 17.72 10.07 17.82 15.51a8.13 8.13 0 0 1 -4.07 7.2l-79.15 45.38-8 4.58a8.31 8.31 0 0 1 -4.23 1.22zm-18.25-26.76c7.55 4.74 14 8.49 17.37 10.08l5.21-3 67.9-38.93c-4.31-2.43-9.94-5.51-16.7-9.1zm-116.71-34.15c44.25 25.93 66.18 38.21 72.94 41.54 2.91-1.42 8.15-4.46 13.18-7.51l-73.1-40.63c-5.51 2.75-9.76 4.91-13.02 6.6zm30.49-15.2 71 39.48 71.33-39.58-71.48-37.7zm-34.45-17.88c4.58 2.57 10.55 5.74 17 9l73.28-39.08a184 184 0 0 0 -17.58-10.52c-40.63 22.67-61.84 34.52-72.71 40.6zm120.7-29.91 73.68 38.86c5-2.78 9.58-5.39 13.34-7.59-20.94-11-63.28-33-74.59-38.71-2.62 1.41-7.08 4.03-12.43 7.44z"
                    fill="#191919"
                  />
                  <path
                    d="m218.42 88c .08-1.3 28.46-16.33 27.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-27.54 16.43-28.13 16.5s-30.83-21.28-33.9-19.56c-3.31 1.84-83.39 46.52-86.26 48.18-2.64 1.57 31.27 17.8 31.34 18.64s-29.69 14.59-28.13 15.49 83.83 49.44 88.23 49.92c2.83.31 27.92-16.24 28.82-16.24s31 20.48 33.76 18.92l87.13-50c1.61-.88-30.24-16.89-30.16-18.16zm-90.73 48.86c-1-.08-87.72-48.14-87.74-48.78s87-46.63 87.59-46.72 88.32 45.33 88.31 46.58-87.15 48.97-88.16 48.89z"
                    fill="#fff"
                  />
                  <path
                    d="m72.15 187.68-.44-35.68c0-2.23 2.05-2.7 3.71-.82l25.44 28.82c1.59 1.81 1.62 4.47.06 4.89l-25 6.81c-1.63.49-3.74-1.79-3.77-4.02z"
                    fill="#fff"
                  />
                  <path
                    d="m128.67 142.67c-.67 17.17-1 77.67.61 101.83"
                    fill="#d32920"
                  />
                  <path
                    d="m129.27 248.5a4 4 0 0 1 -4-3.73c-1.64-24.68-1.27-85.22-.61-102.25a4 4 0 1 1 8 .31c-.64 16.44-1 77.43.6 101.41a4 4 0 0 1 -3.73 4.26z"
                    fill="#191919"
                  />
                </svg>
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold text-lg">
                      {cart[k].name}
                    </div>
                    <div className="flex font-semibold justify-around w-1/3 space-x-3 text-lg">
                      <AiOutlinePlusSquare
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].varient
                          );
                        }}
                        className="cursor-pointer mt-1"
                      />
                      <span className="">{cart[k].qty}</span>
                      <AiOutlineMinusSquare
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].varient
                          );
                        }}
                        className="mt-1 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="total font-normal mt-5">
                    {" "}
                    Subtotal: ₹{subTotal}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex">
            <Link
              href={"/checkoutPay"}
              legacyBehavior
              as={
                "5fba00408e9137e9045b0b496828e9219c9d47a0dbd67021fab588840b607829"
              }
            >
              <a href="#">
                <button className="flex mx-auto mt-5 text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
                  Checkout
                </button>
              </a>
            </Link>
            <button
              onClick={clearCart}
              className="flex mx-auto mt-5 text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg"
            >
              Clear
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default navbar;

import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import fs from "fs";

const checkout = ({ cart, subTotal, clearCart, addToCart, removeFromCart }) => {
  // const { Block, Blockchain } = require("../blockchain.js");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name == "address") {
      setAddress(e.target.value);
    }

    if (
      name.length > 2 &&
      email.length > 2 &&
      phone.length > 2 &&
      address.length > 2
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const initiatePayment = async () => {
    let amount = subTotal;
    let cart = "Paracetamol";
    let oid = Math.floor(Math.random() * Date.now());
    const data = { cart, amount, oid, email: "email" };

    let a = await fetch("/api/initiateTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let txnResponse = await a.json();
    console.log(txnResponse);
    let txnToken = txnResponse.txnToken;

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid,
        token: txnToken,
        tokenType: "TXN_TOKEN",
        amount: subTotal,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        window.Paytm.CheckoutJS.invoke();
        // var Data = config.data;
        // const Chain = new Blockchain();
        // Chain.addBlock(new Block(Date.now().toString(), Data));
        // fs.writeFile("../blockchain.txt", Chain.chain, (err) => {
        //   if (err) throw err;
        // });
      })
      .catch(function onError(error) {
        console.log("Error =>", error);
      });
  };
  return (
    <div className="container m-auto min-h-screen">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={
          process.env.NEXT_PUBLIC_PAYTM_HOST +
          "/merchantpgpui/checkoutjs/merchants/" +
          process.env.NEXT_PUBLIC_PAYTM_MID +
          ".js"
        }
      ></Script>
      <h1 className="mt-4 mb-10 font-bold text-4xl text-center">Checkout</h1>
      <form>
        <div className="flex justify-around">
          <h2 className="mt-4 mb-2 font-semi-bold text-2xl">
            Delivery Details
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                onChange={handleChange}
                value={phone}
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="px-2 w-full">
            <div className="mb-4">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <textarea
                onChange={handleChange}
                value={address}
                name="address"
                id="address"
                cols="30"
                rows="3"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <h2 className="mt-4 mb-2 font-semi-bold text-2xl">Review Items</h2>
        </div>

        <div className=" m-2 w-2/3  mx-auto rounded-lg  sideCart shadow-lg bg-green-50 px-8 pt-2 pb-5 my-4  border-gray-100 border">
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className=" font-normal text-center">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 256 256"
                  className="mx-auto mt-2"
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
                  <div className="item flex my-5 mx-auto">
                    <div className="font-normal text-lg mx-5">
                      {cart[k].name}
                    </div>
                    <div className="flex font-normal justify-content w-1/3 space-x-3 text-lg">
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
                </li>
              );
            })}
            <div className="total font-normal"> Subtotal: ₹{subTotal}</div>
          </ol>
        </div>

        <div className="flex justify-around">
          <button
            disabled={disabled}
            onClick={initiatePayment}
            className="disabled:bg-gray-100 inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded-lg text-base mt-4 md:mt-0"
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default checkout;

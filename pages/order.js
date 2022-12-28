import React from "react";
import Link from "next/link";
const order = () => {
  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font">
        <div className="container sm:mt-5 md:mt-10 lg:mt-40 items-centerflex mx-auto text-center">
          <div className="mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">
              🎉 Your Order was Placed Successfully 🎉
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Thanks for shopping with us!
            </p>
          </div>
          <h2 className="text-gray-500 text-2xl mb-6 text-left">
            Order ID: #3453124
          </h2>
          <div class="flex mb-8">
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Product</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Type</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Price</a>
          </div>
          <div className="flex justify-around border-t border-gray-200 py-2">
            <span className="text-gray-500">Paracetamol</span>
            <span className="  text-gray-500">Tablets</span>
            <span className="  text-gray-900">10 units</span>
            <span className="  text-gray-900"> ₹58.00</span>
          </div>
          <div className="flex justify-around border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Xarelto</span>
            <span className="  text-gray-500">Tablets</span>
            <span className="  text-gray-900">4 units</span>
            <span className="  text-gray-900"> ₹58.00</span>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              ₹58.00
            </span>
            <button
              href="/index"
              className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default order;

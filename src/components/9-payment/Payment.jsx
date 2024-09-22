// import React from "react";
import paymentOptionsImg from "../../../public/img/image111.png";
import ProfileFace from "../../../public/img/profileface.png";
import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";

const PaymentPage = () => {
  return (
    <div className="container flex flex-col justify-center px-4 my-20 space-x-10 md:flex-row md:px-16 lg:px-24">
      {/* Payment Details Form */}
      <div className="flex w-full lg:flex-[2] flex-col bg-white p-8 rounded-lg shadow-lg mb-9">
        <form>
          <h1 className="py-4 mb-4 text-2xl font-semibold text-blue-900">
            Payment Details
          </h1>

          {/* Email Input */}
          <div className="py-2 mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-2 py-4 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Credit Card Input */}
          <div className="py-2 mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="cardNumber"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              className="w-full px-2 py-4 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
          </div>

          {/* Expiry Date and CVC */}
          <div className="flex py-2 mb-4 space-x-4"> 
            <div className="w-1/2">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="expDate"
              >
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full px-2 py-4 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                type="text"
                className="w-full px-2 py-4 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="xxx"
                required
              />
            </div>
          </div>
        </form>

        {/* Payment Summary */}
        <div className="py-2 border-b">
          <div className="flex justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-xl font-semibold text-blue-900">
              EGP 3500.00
            </span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-400">Platform Fee</span>
            <span className="text-xl font-semibold text-blue-900">
              EGP 150.00
            </span>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between py-4 mt-4">
          <span className="text-gray-400">Total Amount</span>
          <span className="text-xl font-semibold text-blue-900">
            EGP 3650.00
          </span>
        </div>

        {/* Payment Options */}
        <div>
          <h3 className="mb-2 font-bold text-blue-900">Payment Options</h3>
          <img src={paymentOptionsImg} alt="Payment Options" />
        </div>

        {/* Confirm Button */}
        <div>
          <button
            type="submit"
            className="w-full p-4 mt-12 font-semibold text-white transition duration-200 bg-orange-500 rounded-md shadow-md hover:bg-orange-400"
          >
            Confirm & Cart
          </button>
        </div>
      </div>

      {/* Task Summary */}
      <div className="w-full mt-10 lg:flex-1 md:mt-0">
        <div className="flex flex-col max-w-md bg-white shadow-xl rounded-xl">
          <h2 className="py-4 text-base font-semibold text-center text-blue-900 md:text-lg lg:text-xl">
            Furniture Assembly
          </h2>
          <div className="flex justify-center">
            <img src={ProfileFace} alt="Profile" />
          </div>
          <div className="py-4 text-center">
            <h4 className="text-base font-semibold text-blue-900">
              Omar Mohamed
            </h4>
          </div>
          <div className="px-10 py-4">
            <div className="flex items-center space-x-2">
              <MdDateRange className="text-gray-400 text-[22px]" />
              <span className="text-gray-400">Sun, Sep 9 at 9.30am</span>
            </div>
            <div className="flex items-center my-2 space-x-2">
              <MdOutlineLocationOn className="text-gray-400 text-[22px]" />
              <span className="text-gray-400">
                Egypt <br />
                Mansoura, Ahmed Maher
              </span>
            </div>
            <div className="py-4 border-b">
              <button className="px-4 py-1 text-orange-500 border border-orange-500 rounded-full">
                Edit Task
              </button>
            </div>
          </div>

          {/* Task Details */}
          <div className="px-10">
            <h4 className="mb-4 font-semibold text-blue-900">Your Task Details</h4>
            <textarea
              value="I need assistance assembling [item(s) to be assembled, e.g., a bed frame, bookshelf, etc.]. The furniture is [brand or type, if applicable] and still in the box. Please bring any necessary tools, and let me know if you need additional details about the space or setup."
              disabled
              className="p-3 h-[240px] resize-none w-full rounded-lg border bg-white text-gray-400 overflow-y-scroll"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

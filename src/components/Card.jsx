import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { BrowserRouter as Redirect } from "react-router-dom";
toast.configure();
/* eslint-disable */

function Card({ link, desc, price, metamask_account, handleSubmit }) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
      {/* <a href="https://flowbite.com/docs/images/blog/image-1.jpg"> */}
      <img
        className="rounded-t-lg"
        height="500"
        width="500"
        src={link}
        alt="Equipment"
      />
      {/* </a> */}
      <div className="p-5 bg-slate-100">
        {/* <a href="http://www.google.com"> */}
        <h5 className="mb-2 text-2xl bg-slate-100 font-bold tracking-tight text-gray-900 dark:text-black">
          {desc}
        </h5>
        {/* </a> */}
        <p className="mb-3 font-bold bg-slate-100 text-gray-700 dark:text-black">
          {price}
        </p>
        <button
          onClick={() => handleSubmit(metamask_account)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center
          text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Rent
          <svg
            className="ml-2 -mr-1 w-4 h-4 bg-inherit"
            fill="white"
            stroke="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;

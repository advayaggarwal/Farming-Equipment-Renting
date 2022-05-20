import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./Welcome";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
toast.configure();
/* eslint-disable */

function Card({ link, desc, price, metamask_account, handleSubmit }) {
  return (
    <Router>
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
          <h5 className="mb-2 text-2xl bg-slate-100 font-bold tracking-tight text-gray-900 dark:text-black">
            {desc}
          </h5>
          <p className="mb-3 font-bold bg-slate-100 text-gray-700 dark:text-black">
            {price}
          </p>
          <a
            type="button"
            href="http://localhost:3001"
            target="__blank"
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
          </a>
        </div>
        <Switch>
          <Route exact path="/connectWalle">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Card;

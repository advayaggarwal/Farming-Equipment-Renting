import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import axios from "axios";
import { BrowserRouter as Redirect } from "react-router-dom";

/* eslint-disable */
toast.configure();

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      metamask_account: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .max(20, "Must be 20 characters or less"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
      metamask_account: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:4500/signup", values)
        .then(function (response) {
          console.log(response);
          console.log(values);
        })
        .catch(function (error) {
          toast.error("Not Successful", {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log(error);
        });
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("email", values.email);
      window.location.reload(true);
    },
  });

  if (localStorage.getItem("loggedIn")) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-inherit py-8 px-0 mt-16 flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Username</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="text"
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.username && formik.touched.username && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.username}
          </p>
        )}

        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Email</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.email}
          </p>
        )}

        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Password</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.password}
          </p>
        )}

        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Metamask Account</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="text"
            name="metamask_account"
            placeholder="Metamask Account"
            value={formik.values.metamask_account}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.metamask_account && formik.touched.metamask_account && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.metamask_account}
          </p>
        )}

        <div className="flex justify-center">
          <button
            className="bg-gray-600 text-white font-semibold px-6 py-3 mt-4 border-2 rounded-md"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

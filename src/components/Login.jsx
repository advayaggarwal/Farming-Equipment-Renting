import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

toast.configure();
function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:4500/login", values)
        // eslint-disable-next-line
        .then(function (response) {
          if (response.data) {
            console.log(response.data);
            localStorage.setItem("email", values.email);
            localStorage.setItem("loggedIn", response.data);
            localStorage.setItem(
              "metamask_account",
              response.data.data.metamask_account
            );
            window.location.reload(true);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
  });

  if (localStorage.getItem("loggedIn")) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-inherit py-8 px-0 mt-16 flex justify-center">
      {/* <h1 className="text-white font-bold mx-200 text-3xl">Login</h1> */}
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 px-4 text-right">
          {/* eslint-disable-next-line */}
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
          {/* eslint-disable-next-line */}
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

        <div className="flex justify-center">
          <button
            className="bg-gray-600 text-white font-semibold px-6 py-3 mt-4 border-2 rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

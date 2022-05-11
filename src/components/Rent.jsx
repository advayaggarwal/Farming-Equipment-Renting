import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

toast.configure();
/* eslint-disable */

function Rent() {
  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
      price: "",
      metamask_account: localStorage.getItem("metamask_account"),
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:4500/rent", values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          toast.error("Not Successful", {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log(error);
        });
      //   localStorage.setItem("loggedIn", true);
      //   localStorage.setItem("email", values.email);
      window.location.reload(true);
    },
  });

  if (!localStorage.getItem("loggedIn")) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-inherit py-8 px-0 mt-16 flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Image</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="text"
            name="image"
            placeholder="Image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.image && formik.touched.image && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.image}
          </p>
        )}

        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Description</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="text"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.description && formik.touched.description && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.description}
          </p>
        )}

        <div className="my-4 px-4 text-right">
          <label className="font-semibold text-lg mx-2">Price</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 inline-flex mt-2 mx-2"
            type="text"
            name="price"
            placeholder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.price && formik.touched.price && (
          <p className="text-red-700 font-semibold text-right mr-8">
            {formik.errors.price}
          </p>
        )}

        <div className="flex justify-center">
          <button
            className="bg-gray-600 text-white font-semibold px-6 py-3 mt-4 border-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Rent;

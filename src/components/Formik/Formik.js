import React, { useState } from "react";
import { useFormik } from "formik";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type="submit">log-in</button>
    </form>
  );
};

export default Formik;

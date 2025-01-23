import React from "react";
import { useFormik } from "formik";

function Formik() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="">First Name</label>
            <input
              className="border-2 border-black rounded-sm"
              type="text"
              name="firstname"
              required
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              className="border-2 border-black rounded-sm"
              type="text"
              name="lastname"
              required
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            className="border-2 border-black rounded-sm"
            type="text"
            name="email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            className="border-2 border-black rounded-sm"
            type="text"
            name="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button className="border-2 border-black " type="Submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Formik;

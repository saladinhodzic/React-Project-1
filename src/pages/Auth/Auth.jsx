import "./Auth.css";
import { SignUp } from "../../components/Signup/Signup";
import { LogIn } from "../../components/Login/Login";
import { useState } from "react";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export function Auth() {
  const [login, signup] = useState(0);

  const handleChange = (e, value) => {
    signup(!value);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your name"),
      email: Yup.string().email("Invalid email adress").required("Required"),
    }),
  });
  return (
    <div className="wrapper">
      <form className="form" onSubmit={formik.onSubmit}>
        <Tabs value={login} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
        <div className="name">
          <input
            id="name"
            name="name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your name"
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className="warning">
            <p className="error-text">{formik.errors.name}</p>
          </div>
        ) : null}
        <div className="email">
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email:"
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="warning">
            <p className="error-text">{formik.errors.email}</p>
          </div>
        ) : null}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

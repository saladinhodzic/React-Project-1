import "./Auth.css";
import { SignUp } from "../../components/Signup/Signup";
import { LogIn } from "../../components/Login/Login";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

export function Auth() {
  const [tab, setTab] = useState("login");

  const handleChange = (e, value) => {
    setTab(value);
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
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
  });
  return (
    <div className="wrapper">
      <form className="form" onSubmit={formik.onSubmit}>
        <TabContext value={tab}>
          <TabList
            onChange={handleChange}
            sx={{
              ".MuiTab-root": {
                color: `white`,
              },
            }}
          >
            <Tab label="login" value="login" color="primary" />
            <Tab label="register" value="register" />
          </TabList>
          <TabPanel value="login">
            <LogIn />
          </TabPanel>
          <TabPanel value="register">
            <SignUp setTabName={setTab} />
          </TabPanel>
        </TabContext>
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
        <div className="password">
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="warning">
            <p className="error-text">{formik.errors.password}</p>
          </div>
        ) : null}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

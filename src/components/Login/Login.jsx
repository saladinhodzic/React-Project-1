import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
export function LogIn() {
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
    <form className=" login" onSubmit={formik.onSubmit}>
      <div className="email">
        <p className="credentials">Email:</p>

        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email:"
          className={
            formik.touched.email && formik.errors.email ? "error" : null
          }
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="warning">
          <p className="error-text">{formik.errors.email}</p>
        </div>
      ) : null}
      <div className="password">
        <p className="credentials">Password:</p>

        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
          className={
            formik.touched.password && formik.errors.password ? "error" : null
          }
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
  );
}

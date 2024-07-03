import "./Signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
export function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your name"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your last name"),
      email: Yup.string().email("Invalid email adress").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
  });
  return (
    <form className="form register" onSubmit={formik.onSubmit}>
      <div className="name">
        <p className="credentials">Name:</p>

        <input
          id="name"
          name="name"
          type="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your name"
          className={formik.touched.name && formik.errors.name ? "error" : null}
        />
      </div>
      {formik.touched.name && formik.errors.name ? (
        <div className="warning">
          <p className="error-text">{formik.errors.name}</p>
        </div>
      ) : null}
      <div className="lastName">
        <p className="credentials">Last name:</p>

        <input
          id="lastName"
          name="lastName"
          type="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your last name"
          className={
            formik.touched.lastName && formik.errors.lastName ? "error" : null
          }
        />
      </div>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="warning">
          <p className="error-text">{formik.errors.lastName}</p>
        </div>
      ) : null}
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

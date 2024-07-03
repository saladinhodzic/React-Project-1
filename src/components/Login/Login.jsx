import { useFormik } from "formik";
import * as Yup from "yup";
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
    <form className="form" onSubmit={formik.onSubmit}>
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
  );
}

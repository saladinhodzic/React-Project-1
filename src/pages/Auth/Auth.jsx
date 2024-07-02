import "./Auth.css";
import { SignUp } from "../../components/Signup/Signup";
import { LogIn } from "../../components/Login/Login";
import { useState } from "react";
import { NewNavbar } from "../../components/NewNavbar/NewNavbar";
import { Formik } from "formik";
export function Auth() {
  return (
    <Formik>
      <form>
        <label>Email:</label>
        <input type="email" />
      </form>
    </Formik>
  );
}

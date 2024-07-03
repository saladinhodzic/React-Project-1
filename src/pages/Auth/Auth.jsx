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

  return (
    <div className="wrapper">
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
    </div>
  );
}

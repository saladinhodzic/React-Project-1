import "./Auth.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SignUp } from "../../components/Signup/Signup";
import { LogIn } from "../../components/Login/Login";
import { useState } from "react";

export function Auth() {
  const [signUp, login] = useState(true);
  const [value, setValue] = useState(0);
  function handleClick(e, value) {
    login(!signUp);
    setValue(value);
  }

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
          width: "50%",
          minHeight: "200px",
        }}
      >
        <Tabs value={value} onChange={handleClick} centered>
          <Tab label="Sign up" />
          <Tab label="Login" />
        </Tabs>
        {signUp ? <SignUp /> : <LogIn />}
      </Box>
    </>
  );
}

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {

  const history = useHistory();

  const checkForUser = () => {
    let user = window.localStorage.getItem("username");
    return user;
  };

  const linkToProducts = () => {
    history.push("/");
  };

  const linkToLogout = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  const linkToLogin = () => {
    history.push("/login");
  };

  const linkToRegister = () => {
    history.push("/register");
  };

    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {hasHiddenAuthButtons && children}
        {!hasHiddenAuthButtons ? (
          <Button
                className="explore-button"
                startIcon={<ArrowBackIcon />}
                variant="text"
                onClick={linkToProducts}
              >
                <p className="link">Back to explore</p>
          </Button>
        ) : (
           checkForUser() ? (
            <Stack direction="row" spacing={2}>
                <Avatar alt={window.localStorage.getItem("username")} src="public/avatar.png" />
                <p>{window.localStorage.getItem("username")}</p>
                <Button className="button" variant="text" onClick={linkToLogout}>
                  Logout
                </Button>
            </Stack>
          ) : (
              <Stack direction="row" spacing={2}>
                <Button className="button" variant="text" onClick={linkToLogin}>
                  Login
                </Button>
                <Button className="button" variant="contained" onClick={linkToRegister}>
                  Register
                </Button>
              </Stack>
              )
          )
        }
      </Box>
    );
};

export default Header;

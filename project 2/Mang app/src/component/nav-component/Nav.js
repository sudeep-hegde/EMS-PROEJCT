import React from "react";

import "./Nav.css";

import FitbitIcon from "@mui/icons-material/Fitbit";

import { Menu, MenuItem } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);

  function logout(e) {
    // e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
    navigate('/login')
    
  }

  return (
    <div className="wrapper-div">
      <div style={{ display: "flex", alignItems: "center" }}>
        <FitbitIcon fontSize="large" />

        <p className="app-name">Mangapp</p>
      </div>

      <div className="nav-user-div">
        <p className="user-name">{localStorage.getItem("email")}</p>

        <Stack direction="row" spacing={2}>
          <Avatar
            className="avatar"
            sx={{ width: "3vw", height: "6vh" }}
            src="/broken-image.jpg"
            onClick={(e) => setOpen(true)}
          />

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}

            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",

              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",

              horizontal: "left",
            }}
          >
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Stack>
      </div>
    </div>
  );
}

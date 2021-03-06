import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../components/Pdf/logo.png";
import { useNavigate } from "react-router";
import { Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store/auth";
import Settings from "../components/Controls/Settings";
import EditItems from "../components/Preview/EditItems";

export default function ButtonAppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" height={50} width={50} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            PHILIPPINE COAST GUARD
          </Typography>
          {isLoggedIn && (
            <>
              <Button color="inherit" onClick={() => navigate("generate")}>
                New Slip
              </Button>
              <Button color="inherit" onClick={() => navigate("preview")}>
                Print Preview
              </Button>
              <EditItems />
              <Settings />
            </>
          )}
          <Divider orientation="vertical" flexItem sx={{ ml: 2, mr: 3 }} />
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem("lastSession");
              dispatch(setIsLoggedIn(false));
              navigate("/");
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

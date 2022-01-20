import { Button, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { setUserPrefs } from "../../store/userprefs";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const latestControl = useSelector((state) => state.userprefs.latestControl);

  return (
    <>
      <Button color="inherit" onClick={toggle}>
        <SettingsIcon />
      </Button>
      <CustomModal open={open} onClose={toggle}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Settings</Typography>
            <Divider/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body">Manually Set Latest Control Number</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={latestControl + 1}
              label="Control Number"
              onChange={(e) => {
                dispatch(setUserPrefs({ latestControl: e.target.value - 1 }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body">Reset Local Data</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">Clear Data</Button>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
}

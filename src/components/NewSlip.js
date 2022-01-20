import {
  Paper,
  Grid,
  Typography,
  TextField,
  Divider,
  Button,
  Autocomplete,
  CssBaseline,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setUserPrefs } from "../store/userprefs";
import { useEffect, useState } from "react";
import Barcode from "./Barcode";
import ExportPDF from "./Pdf/ExportPDF";
import { useNavigate } from "react-router";
import { addToCart } from "../store/cart";

const paperStyle = {
  width: 650,
  p: 4,
  m: "auto",
  mt: 4,
};

export default function NewSlip() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userprefs = useSelector((state) => state.userprefs);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [dateIssued, setDateIssued] = useState(new Date().toISOString().substring(0, 10));
  const currentDate = new Date(dateIssued);
  const validUntil = new Date(currentDate.setMonth(currentDate.getMonth() + 2))
    .toISOString()
    .substring(0, 10);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  const addToPreview = () => {
    dispatch(addToCart({...userprefs, dateIssued, validUntil}));
  };

  return (
    <Paper elevation={2} sx={paperStyle}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Generate Slip</Typography>
          <Button onClick={() => localStorage.clear()}>Clear</Button>
        </Grid>
        <Divider />
        <Grid item xs={6}>
          <TextField label="Control No." fullWidth value={userprefs.latestControl + 1} />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Date of Issuance"
            value={dateIssued}
            fullWidth
            onChange={(e) => {
              setDateIssued(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Valid Until"
            value={validUntil}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Official User"
            value={userprefs.currentUser}
            fullWidth
            onChange={(e) => {
              dispatch(setUserPrefs({ currentUser: e.target.value }));
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Office Unit"
            value={userprefs.currentUnit}
            fullWidth
            onChange={(e) => {
              dispatch(setUserPrefs({ currentUnit: e.target.value }));
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Contract"
            value={userprefs.contract}
            fullWidth
            onChange={(e) => {
              dispatch(setUserPrefs({ contract: e.target.value }));
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gas Station"
            value={userprefs.gasStation}
            fullWidth
            onChange={(e) => {
              dispatch(setUserPrefs({ gasStation: e.target.value }));
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            value={userprefs.gasType}
            onChange={(event, newValue) => {
              dispatch(setUserPrefs({ gasType: newValue }));
            }}
            options={["Diesel", "Gasoline", "Unleaded"]}
            renderInput={(params) => <TextField {...params} label="Product" fullWidth />}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={userprefs.qty}
            onChange={(e) => {
              dispatch(setUserPrefs({ qty: e.target.value }));
            }}
            type="number"
            label="QTY"
          />
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            value={userprefs.gasIssued}
            onChange={(event, newValue) => {
              dispatch(setUserPrefs({ gasIssued: newValue }));
            }}
            id="controllable-states-demo"
            options={["5", "10", "15", "20", "30", "50"]}
            renderInput={(params) => <TextField {...params} label="Gas Issued" fullWidth />}
          />
          <Typography sx={{ ml: 1 }}>LTRS</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Approved By:"
            value={userprefs.approver}
            fullWidth
            onChange={(e) => {
              dispatch(setUserPrefs({ approver: e.target.value }));
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Barcode control={userprefs.latestControl} />
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth onClick={addToPreview}>
            Add to Preview
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ExportPDF />
        </Grid>
      </Grid>
    </Paper>
  );
}

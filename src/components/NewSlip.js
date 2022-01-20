import { Paper, Grid, Typography } from "@mui/material";

const paperStyle = {
  width: 600,
  p: 4,
  mt: 4,
};

export default function NewSlip() {
  return (
    <Paper elevation={2} sx={paperStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">New Slip</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

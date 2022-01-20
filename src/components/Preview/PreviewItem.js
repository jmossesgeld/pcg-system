import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import logo from "../Pdf/logo.png";
import Barcode from "../Slip/Barcode";

const gridStyle = { display: "flex", justifyContent: "center" };

export default function PreviewItem(props) {
  console.log(props);
  return (
    <>
      <Grid item xs={6}>
        <Grid
          container
          sx={{
            border: "solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "center",
            p: 1,
          }}
        >
          <Grid item xs={12} sx={gridStyle}>
            <img src={logo} alt="logo" height={40} width={40} />
            <div>
              <Typography ml={1} variant="h6">
                PHILIPPINE COAST GUARD GAS SLIP
              </Typography>
              <Typography ml={1} variant="subtitle2">
                139 25th Street, South Harbor, Port Area, 1018 Manila
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sx={gridStyle}>
            <Barcode control={props.item.latestControl + 1} width={2.2} height={30} />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">CONTROL NUMBER:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.latestControl + 1}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">DATE OF ISSUANCE:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {new Date(props.item.dateIssued).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">VALID UNTIL:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {new Date(props.item.validUntil).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">OFFICIAL USER:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.currentUser}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">OFFICIAL UNIT:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.currentUnit}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">CONTRACT:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.contract}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">GAS ISSUED:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold" borderBottom={"solid"}>
              {props.item.gasIssued} LITERS
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">GAS STATION:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.gasStation}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={5}>
            <img
              src={logo}
              alt="logo"
              height={100}
              width={100}
              style={{
                position: "absolute",
                opacity: "30%",
                marginLeft: -50,
                marginTop: -50,
              }}
            />
            <Typography variant="body2" fontWeight="bold">
              {props.item.approver}
            </Typography>
          </Grid>
          <Grid item xs={12} mb={1.5}>
            <Typography variant="body2">{props.item.approverTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">NO CONVERSION FROM PRODUCT TO PRODUCT</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* -------------------- RIGHT SIDE -------------------- */}

      <Grid item xs={6}>
        <Grid
          container
          sx={{
            border: "solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "center",
            p: 1,
          }}
        >
          <Grid item xs={12} sx={gridStyle}>
            <img src={logo} alt="logo" height={40} width={40} />
            <div>
              <Typography ml={1} variant="h6">
                PHILIPPINE COAST GUARD GAS SLIP
              </Typography>
              <Typography ml={1} variant="subtitle2">
                139 25th Street, South Harbor, Port Area, 1018 Manila
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sx={gridStyle}>
            <Barcode control={props.item.latestControl + 1} width={2.2} height={30} />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">CONTROL NUMBER:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.latestControl + 1}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">DATE OF ISSUANCE:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {new Date(props.item.dateIssued).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">VALID UNTIL:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {new Date(props.item.validUntil).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">OFFICIAL USER:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.currentUser}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">OFFICIAL UNIT:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.currentUnit}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">CONTRACT:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.contract}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">GAS ISSUED:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold" borderBottom={"solid"}>
              {props.item.gasIssued} LITERS
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">GAS STATION:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              {props.item.gasStation}
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">POL CONTINGENCY:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              ___________________________
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">SIGNATURE:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              ___________________________
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">RECEIVED BY:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              ___________________________
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="body">DATE RECEIVED:</Typography>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "left" }}>
            <Typography ml={2} variant="body" fontWeight="bold">
              ___________________________
            </Typography>
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography variant="body">(PLEASE LEAVE THIS COPY WITH O/CG4)</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

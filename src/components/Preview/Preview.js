import { Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ExportPDF from "../Pdf/ExportPDF";
import PreviewItem from "./PreviewItem";

const paperStyle = {
  display: "flex",
  justifyContent: "center",
  width: 1000,
  m: "auto",
  mt: 8,
  p: 8,
};

export default function Preview(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const noOfPages = Math.ceil(cart.length / 3);
  const pages = [];
  for (let i = 0; i < noOfPages; i++) {
    pages.push(cart.slice(i * 3, (i + 1) * 3));
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return pages.length > 0 ? (
    pages.map((page, index) => {
      return (
        <>
          <Paper elevation={5} key={index} sx={paperStyle} id={`pdf-${index}`}>
            <Grid container spacing={2}>
              {page.map((item, index) => {
                return <PreviewItem key={index} item={item} />;
              })}
            </Grid>
          </Paper>
          <ExportPDF idToPrint={`#pdf-${index}`} noOfItems={page.length} />
        </>
      );
    })
  ) : (
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h4" fontWeight={100}>
        No slips to print yet
      </Typography>
    </Paper>
  );
}

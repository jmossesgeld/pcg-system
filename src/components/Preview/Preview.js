import { Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PreviewItem from "./PreviewItem";

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

  return pages.map((page, index) => {
    return (
      <Paper
        elevation={3}
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 1000,
          m: "auto",
          mt: 8,
          p:8
        }}
      >
        <Grid container spacing={2}>
        {page.map((item, index) => {
          return <PreviewItem key={index} item={item} />;
        })}
        </Grid>
      </Paper>
    );
  });
}

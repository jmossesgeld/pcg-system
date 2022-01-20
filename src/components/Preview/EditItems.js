import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomModal from "../Controls/CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { Edit } from "@mui/icons-material";
import { removeFromCart } from "../../store/cart";

export default function EditItems() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Button color="inherit" onClick={toggle}>
        <EditIcon />
      </Button>
      <CustomModal open={open} onClose={toggle}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Edit Items</Typography>
            <Divider />
          </Grid>
          {cart.map((item, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={4}>
                <Typography variant="body">{item.latestControl}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body">{item.currentUser}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button>
                  <EditIcon />
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button onClick={() => dispatch(removeFromCart(idx))}>
                  <DeleteIcon />
                </Button>
              </Grid>
              <Divider />
            </React.Fragment>
          ))}
        </Grid>
      </CustomModal>
    </>
  );
}

import { Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container direction={"row"}>
      <Grid item xs={4} sx={{ backgroundColor: "yellow" }}>
        asd
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: "green" }}></Grid>
      <Grid item xs={4} sx={{ backgroundColor: "blue" }}></Grid>
    </Grid>
  );
};

export default Header;

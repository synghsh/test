import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12} sx={{ textAlign: "end", backgroundColor:"red" }}>
          <Typography style={{ color: "#ffff", padding: 6, fontSize: 14 }}>
            Developed by
            <a style={{ color: "#fff" }} href="https://www.msqube.com/">
              MSQube
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const UserDashboardView = () => {
  return (
    <Box sx={{ display: "flex", padding: 5 }}>
      <Grid container direction={"column"}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: 18,
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
              color: "#626974",
              //mb: 10,
            }}
          >
            School Management System
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboardView;

import {
  Button,
  Divider,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const SideNav = () => {
  const menuItem: any = ["Dashboard", "Academics"];

  return (
    <div
      style={{
        width: 250,
        minHeight: "100%",
      }}
    >
      <Grid container direction={"row"}>
        <Grid
          item
          xs={12}
          alignItems={"center"}
          display={"flex"}
          sx={{ backgroundColor: "#1572E8", height: "6vh" }}
        >
          <Grid container direction={"row"}>
            <Grid item xs={3}></Grid>
            <Grid item xs={7}>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: 24,
                  fontFamily: "Mukta Poppins, sans-serif",
                  color: "#fff",

                  //mb: 10,
                }}
              >
                SMS
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton sx={{ color: "#fff" }}>
                <DensityMediumIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={12} mt={0.5}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Poppins, sans-serif",
                color: "#626974",
                textAlign: "center",
                //mb: 10,
              }}
            >
              Anju Thapa
            </Typography>
          </Grid>
          <Grid item xs={12} mt={0.5}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Poppins, sans-serif",
                color: "#626974",
                textAlign: "center",
                //mb: 10,
              }}
            >
              TIC
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "#9E9E9E",
            opacity: 0.5,
            width: "90%",
            marginLeft: "5%",
            marginTop: 1,
          }}
        />

        <Grid
          item
          xs={12}
          mt={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#31CE36", height: "3vh" }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: 14,
              fontFamily: "Poppins, sans-serif",
              color: "#fff",
            }}
          >
            ACADEMIC YEAR: 2023
          </Typography>
        </Grid>

        {!!menuItem &&
          menuItem.map((item: any, index: any) => {
            <Grid sx={{ backgroundColor: "#1572E8" }} key={index}>
              {/* <div>
              <Icon
                style={{
                  color: "#4EA6DF",
                  fontSize: 15,
                  marginRight: 6,
                  marginTop: 10,
                }}
                fontSize="small"
              >
                {item.icon}
              </Icon>
            </div> */}

              <div>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: 24,
                    fontFamily: "Mukta Poppins, sans-serif",
                    color: "#fff",
                    //mb: 10,
                  }}
                >
                  {item}
                </Typography>
              </div>
            </Grid>;
          })}
      </Grid>
    </div>
  );
};

export default SideNav;

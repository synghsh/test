import {
  Button,
  Divider,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useLocation, useNavigate } from "react-router-dom";
import "./sideNav.css";
import { environment } from "../../environment";
import CircleIcon from "@mui/icons-material/Circle";

const SideNav = ({}: SideNavProps) => {
  let navigateTo = useNavigate();
  const navigate = (url: any) => {
    navigateTo(url);
  };
  const sideNav = environment.side_nav;
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
        {!!sideNav &&
          sideNav.map((item, index) => (
            <>
              <SideNavMain
                item={item}
                key={index}
                sideNav={sideNav}
                navigate={navigate}
              />
            </>
          ))}
      </Grid>
    </div>
  );
};

export default SideNav;

interface SideNavProps {}
const SideNavMain = ({ item, sideNav, navigate }: SideNavMainProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const sideNavChildMenu = (data: any) => {
    if (
      !!sideNav &&
      sideNav.map((t) => t.menuItem.length > 0 && t.name === data)
    ) {
      setOpenSubMenu(true);
    }
  };
  const location = useLocation();
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          color: location.pathname === item ? "#979DA1" : "#fff",
          backgroundColor: location.pathname === item ? "#fff" : "#1572E8",
        }}
        // key={index}
        className="side-nav-item"
        onClick={() => sideNavChildMenu(item.name)}
        // pt={1}
        mt={1}
        ml={3}
      >
        <div>
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
        </div>
        <div>{item.name}</div>
      </Grid>
      {openSubMenu === true &&
        sideNav
          .find((m) => m.name === item.name)
          ?.menuItem.map((props: any, index2: any) => (
            <SideNavChild
              item={item}
              sideNav={sideNav}
              key={index2}
              props={props}
              navigate={navigate}
            />
          ))}
    </>
  );
};

interface SideNavMainProps {
  item?: any;
  sideNav: any[];
  navigate?: any;
}
const SideNavChild = ({
  props,
  item,
  sideNav,
  navigate,
}: SideNavChildProps) => {
  return (
    <>
      <Grid
        item
        xs={12}
        // key={index2}
        // className="side-nav-item"
        onClick={() => navigate(item.url)}
        pt={1}
        mt={1}
        ml={3}
        pl={5}
        container
        direction={"row"}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#A2A2A7",
            marginTop: 5,
          }}
        ></div>
        <div style={{ paddingLeft: 10 }}>{props.name}</div>
      </Grid>
    </>
  );
};

interface SideNavChildProps {
  item?: any;
  sideNav: any[];
  props?: any;
  navigate?: any;
}

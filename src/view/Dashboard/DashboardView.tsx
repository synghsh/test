import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import AndroidIcon from "@mui/icons-material/Android";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const DashboardView = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const [selectedButton, setselectedButton] = React.useState(Number);
  const [searched, setSearched] = useState<string>("");
  const ButtonList: any = [
    "Govt. School",
    "Other School",
    "Search School (DISE Code)",
    "Search School (Name)",
  ];
  const requestSearch = (props: string) => {};
  const cancelSearch = () => {
    setSearched("");
  };
  let navigateTo = useNavigate();
  const navigate = (url: any) => {
    navigateTo(url);
  };
  return (
    <Paper sx={{ display: "flex", padding: 5, margin: 10 }} elevation={3}>
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: 20,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              color: "#1273DE",
              //mb: 10,
            }}
          >
            School Management System (SMS)
          </Typography>
        </Grid>
        <Grid item xs={12} container direction={"row"}>
          <Grid item xs={3.7} pt={2} mt={2}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: 16,
                fontFamily: "Poppins, sans-serif",
                textAlign: "left",
                color: "#1273DE",
                ml: 8,
              }}
            >
              School Password Reset and Other Instruction :
            </Typography>
          </Grid>
          <Grid item xs={8} pt={2} mt={2}>
            <Marquee style={{ color: "red" }} pauseOnHover={true} speed={25}>
              Please contact respective DI and SI to reset password of school
              login. The password reset is available in their login.             
            </Marquee>
          </Grid>
        </Grid>
        <Grid item xs={12} justifyContent={"center"} pt={2} mt={2}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            variant="fullWidth"
          >
            <Tab
              label="Login to SMS Admin"
              icon={<LoginIcon />}
              iconPosition="start"
              onClick={()=> navigate('/login/registration-login/')}
            />
            <Tab
              label="Login to SMS"
              icon={<LoginIcon />}
              iconPosition="start"
              onClick={()=> navigate('/login/registration-login/')}
            />
            <Tab
              label="Login to e-Portal"
              icon={<LoginIcon />}
              iconPosition="start"
              onClick={()=> navigate('/login/registration-login/')}
            />
          </Tabs>
        </Grid>
        <Grid item xs={12} pt={2} mt={2}>
          <Grid container direction={"row"} display={"flex"}>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <Button
                // onClick={() => navigate("/organization/add-employee-timing/0")}
                size="medium"
                variant="contained"
                startIcon={<AndroidIcon />}
              >
                Download Mobile APP (2022)
              </Button>
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <Button
                // onClick={() => navigate("/organization/add-employee-timing/0")}
                size="medium"
                variant="contained"
                startIcon={<VideocamIcon />}
              >
                Video Tutorial APP (2022)
              </Button>
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <Button
                // onClick={() => navigate("/organization/add-employee-timing/0")}
                size="medium"
                variant="contained"
                startIcon={<VideocamIcon />}
              >
                Video Tutorial WEB (2022)
              </Button>
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <Button
                // onClick={() => navigate("/organization/add-employee-timing/0")}
                size="medium"
                variant="contained"
                startIcon={<ArticleIcon />}
              >
                Syllabus (2022)
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          justifyContent={"center"}
          display={"flex"}
          pt={2}
          mt={2}
        >
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: 18,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              color: "#626974",
              //mb: 10,
            }}
          >
            Admission Notice for Class-XI (2019-2020)
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction={"row"}
          pt={2}
          mt={2}
          justifyContent={"center"}
        >
          <Grid item xs={2.2} display={"flex"} justifyContent={"center"}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="contained"
              startIcon={<NotificationsIcon />}
            >
              Cover Page
            </Button>
          </Grid>
          <Grid item xs={2.2} display={"flex"} justifyContent={"center"}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="contained"
              startIcon={<CampaignIcon />}
            >
              Notice
            </Button>
          </Grid>
          <Grid item xs={2.2} display={"flex"} justifyContent={"center"}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="contained"
              startIcon={<AutoAwesomeMotionIcon />}
            >
              Annexture-I
            </Button>
          </Grid>
          <Grid item xs={2.2} display={"flex"} justifyContent={"center"}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="contained"
              startIcon={<AutoAwesomeMotionIcon />}
            >
              Annexture-II
            </Button>
          </Grid>
          <Grid item xs={2.2} display={"flex"} justifyContent={"center"}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
            >
              Appliaction Form
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} justifyContent={"center"} pt={2} mt={2}>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: 18,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              color: "#626974",
              //mb: 10,
            }}
          >
            Search School
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent={"center"}
          display={"flex"}
          pt={2}
          mt={2}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              // onClick={() => setselectedButton(null)}
              variant={"outlined"}
            >
              All
            </Button>
            {!!ButtonList &&
              ButtonList.map((m: any) => (
                <Button
                  key={m.selectedButton}
                  // onClick={() => setselectedButton(m.)}
                  variant={"outlined"}
                >
                  {m}
                </Button>
              ))}
          </ButtonGroup>
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Grid item xs={10} sx={{ marginTop: 2, marginBottom: 3 }}>
            <TextField
              size="small"
              sx={{ width: "80%" }}
              placeholder="Search..."
              id="fullWidth"
              value={searched}
              onChange={(e: any) => (
                requestSearch(e.target.value), setSearched(e.target.value)
              )}
              InputProps={{
                endAdornment:
                  !!searched && searched.length > 0 ? (
                    <IconButton color="primary" onClick={() => cancelSearch()}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  ),
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction={"row"}
          pt={2}
          mt={2}
          justifyContent={"center"}
        >
          <Grid item xs={3}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="outlined"
              startIcon={<AccountBalanceIcon />}
            >
              Bankura Zila School
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="outlined"
              startIcon={<AccountBalanceIcon />}
            >
              Birbhum Zila School
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="outlined"
              startIcon={<AccountBalanceIcon />}
            >
              Jenkins School
            </Button>
          </Grid>
          {/* <Grid item xs={3}>
            <Button
              // onClick={() => navigate("/organization/add-employee-timing/0")}
              size="medium"
              variant="outlined"
              startIcon={<AutoAwesomeMotionIcon />}
            >
              Annexture-II
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DashboardView;

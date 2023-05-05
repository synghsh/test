import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./common/Footer";
import SideNav from "./common/SideNav";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import UserDashboard from "./view/UserDashboard";
import Header from "./common/Header";

function App() {
  const [initialState, SetinitialState] = useState<string | undefined>(
    undefined
  );
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{ position: "sticky", width: "100%", bottom: 0, zIndex: 999 }}
      >
        <Header />
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          height: "90%",
          display: "flex",
        }}
      >
        <SideNav />
        <div
          style={{
            flex: 1,
            maxHeight: "96%",
            paddingBottom: 100,
            overflowY: "scroll",
          }}
        >
          <MainRouter initialState={initialState} />
        </div>
      </div>
      <div
        style={{ position: "sticky", width: "100%", bottom: 0, zIndex: 999 }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;

const MainRouter = ({
  hasUser,
  initialState = "/registration-login/",
}: MainRouterProps) => {
  return (
    <Routes>
      {hasUser ? (
        <>
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </>
      ) : (
        <>
          <Route path="/registration-login/*" element={<Dashboard />} />
        </>
      )}
      <Route path="/" element={<Navigate replace to={initialState} />} />
      <Route path="*" element={<Navigate replace to={initialState} />} />
    </Routes>
  );
};

interface MainRouterProps {
  hasUser?: any;
  initialState?: string;
}

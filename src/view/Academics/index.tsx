import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ClassLog from "./ClassLog";
import ClassPlan from "./ClassPlan";
import Routine from "./Routine";

const Academics = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/acdemic/acdemic-routine/" element={<Routine />} />
        <Route path="/acdemic/acdemic-class-plan/" element={<ClassPlan />} />
        <Route path="/acdemic/acdemic-class-log/" element={<ClassLog />} />
      </Routes>
    </>
  );
};

export default Academics;

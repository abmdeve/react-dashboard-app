import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import PieChart from "../../components/PieChart/PieChart";

const Pie = () => {
  return (
    <Box m={"20px"}>
      <HeaderComponent title="Pie Chart" subtitle="Simple Pie Chart" />

      <Box height={"75vh"}>
        <PieChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Pie;

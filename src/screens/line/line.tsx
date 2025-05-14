import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import LineChart from "../../components/LineChart/LineChart";

const Line = () => {
  return (
    <Box m={"20px"}>
      <HeaderComponent title="Line Chart" subtitle="Simple Line Chart" />

      <Box height={"75vh"}>
        <LineChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Line;

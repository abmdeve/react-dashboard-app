import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import BarChart from "../../components/BarChart/BarChart";

const Bar = () => {
  return (
    <Box m={"20px"}>
      <Box>
        <HeaderComponent title="Bar Chart" subtitle="Simple Bar Chart" />
      </Box>

      <Box height={"75vh"}>
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;

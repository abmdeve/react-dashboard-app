import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HeaderComponent
          title="DASHBOARD"
          subtitle="Welcome to your dashboard"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;

import { Box, useTheme } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import GeographyChart from "../../components/GeographyChart/GeographyChart";
import { tokens } from "../../context/theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <HeaderComponent
        title="Geography Chart"
        subtitle="Simple Geography Chart"
      />

      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Geography;

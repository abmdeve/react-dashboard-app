import { Box, Typography, useTheme } from "@mui/material";
import React, { type ReactNode } from "react";
import { tokens } from "../../context/theme";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: string;
  increase: string;
}

const StatBox = ({
  icon,
  increase,
  progress,
  subtitle,
  title,
}: StatBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width={"100%"} m={"0 30px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* TITLE, ICON */}
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        {/* PROGRESS CIRCLE */}
        <Box>
          <ProgressCircle progress={progress} size="40" />
        </Box>
      </Box>
      {/* SUBTITLE  */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={"italic"}
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

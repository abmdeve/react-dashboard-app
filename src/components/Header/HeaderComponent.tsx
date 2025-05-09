import React, { type FC } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../../context/theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const HeaderComponent: FC<HeaderProps> = ({ subtitle, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderComponent;

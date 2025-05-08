import React, {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../context/theme";

interface ItemSidebarProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const ItemSidebar: FC<ItemSidebarProps> = ({
  icon,
  selected,
  setSelected,
  title,
  to,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title} </Typography>
      </MenuItem>
    </Link>
  );
};

export default ItemSidebar;

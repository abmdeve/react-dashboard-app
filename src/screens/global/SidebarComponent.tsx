import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  ContactsOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  PersonOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import { tokens } from "../../context/theme";
import user from "../../assets/user.png";
import ItemSidebar from "./ItemSidebar";

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          // border: "none",
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          padding: "5px 35px 5px 20px !important",
          // backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: "#868dfb !important",
          // backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: "#6870fa !important",
          // backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        breakPoint="md"
        backgroundColor={colors.primary[400]}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={"15px"}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER FRAGMENT */}
          {!isCollapsed && (
            <Box mb={"25px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={user}
                  alt="profile-user"
                  width={"100px"}
                  height={"100px"}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight={"bold"}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box padding={isCollapsed ? undefined : "10%"}>
            <ItemSidebar
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <ItemSidebar
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <ItemSidebar
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <ItemSidebar
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <ItemSidebar
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;

import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import {
  DownloadOutlined,
  PointOfSaleOutlined,
  PersonAddOutlined,
  TrafficOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { tokens } from "../../context/theme";
import StatBox from "../../components/StatBox/StatBox";
import LineChart from "../../components/LineChart/LineChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import BarChart from "../../components/BarChart/BarChart";
import GeographyChart from "../../components/GeographyChart/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smsScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box m={"20px"}>
      <Box
        display={smsScreen ? "flex" : "block"}
        flexDirection={smsScreen ? "row" : "column"}
        justifyContent={smsScreen ? "space-between" : "start"}
        alignItems={smsScreen ? "center" : "start"}
        m={"10px 0"}
      >
        <HeaderComponent
          title="DASHBOARD"
          subtitle="Welcome to your dashboard"
        />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* ROW PROGRESS 1 */}
        <Box
          gridColumn={"span 3"}
          bgcolor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailOutlined
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW PROGRESS 2 */}
        <Box
          gridColumn={"span 3"}
          bgcolor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtains"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW PROGRESS 3 */}
        <Box
          gridColumn={"span 3"}
          bgcolor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW PROGRESS 4 */}
        <Box
          gridColumn={"span 3"}
          bgcolor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2222222222222 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          bgcolor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* LINE CHART */}
          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"15px"}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p={"15px"}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transaction.txId}
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transaction.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                bgcolor={colors.greenAccent[500]}
                p={"5px 10px"}
                borderRadius={"4px"}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3333333333333 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={colors.primary[400]}
          p={"30px"}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{ p: "30px 30px 0 30px" }}
          >
            Compaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"25px"}
          >
            <ProgressCircle size="125" progress="0.75" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra expenditures and costs</Typography>
          </Box>
        </Box>

        {/* ROW 444444444444 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={colors.primary[400]}
          p={"30px"}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 5555555555 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

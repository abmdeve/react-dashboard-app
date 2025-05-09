import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../context/theme";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { Invoice_Interface } from "../../utils/types/types";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { mockDataInvoices } from "../../data/mockData";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef<Invoice_Interface>[] = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone Number", width: 100 },

    {
      field: "cost",
      headerName: "Cost",
      width: 100,
      renderCell: ({ row: { cost } }) => {
        return (
          <Box alignItems={"center"} justifyContent={"center"}>
            <Typography textAlign={"center"} color={colors.greenAccent[500]}>
              ${cost}
            </Typography>
          </Box>
        );
      },
    },
    { field: "date", headerName: "Date", width: 100 },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <HeaderComponent title="INVOICES" subtitle="List of Invoice Balances" />
      </Box>

      <Box
        m="8px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiChackbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          //  showToolbar
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;

import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },

    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      cellClassName: "access-column--cell",
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            margin="0 auto"
            padding="5px"
            display="flex"
            justifyContent="center"
            gap="20px"
            bgcolor={
              params.row.access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            <Box
              width="50%"
              gap="10px"
              display="flex"
              justifyContent="flex-start"
            >
              {params.row.access === "admin" && (
                <AdminPanelSettingsOutlinedIcon />
              )}
              {params.row.access === "manager" && <SecurityOutlinedIcon />}
              {params.row.access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.gray[100]}>
                {params.row.access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Members" />
      <Box
        sx={{
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .access-column--cell": {
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell": {
            borderTop: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader":
            {
              borderBottom: "none",
              backgroundColor: "transparent",
            },
          "& .MuiDataGrid-root .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-row:hover": {
            backgroundColor: colors.greenAccent[900],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;

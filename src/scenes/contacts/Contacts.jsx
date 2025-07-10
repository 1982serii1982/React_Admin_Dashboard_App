import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import CustomToolBar from "../../components/CustomToolBar";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="The List of Contactse for Future Reference"
      />
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
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          showToolbar
          slots={{ toolbar: CustomToolBar }}
          slotProps={{
            panel: {
              sx: {
                [`& .MuiDataGrid-columnsManagementHeader .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline`]:
                  { borderColor: colors.greenAccent[800] },
                [`& .MuiDataGrid-columnsManagementHeader .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline`]:
                  {
                    borderWidth: "1px",
                    borderColor: colors.greenAccent[600],
                    boxShadow: `0 0 15px -2px ${colors.greenAccent[600]} inset`,
                  },
                [`& .MuiDataGrid-columnsManagementHeader .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline`]:
                  { borderColor: colors.greenAccent[600] },
                [`& .MuiDataGrid-columnsManagement .MuiButtonBase-root.MuiCheckbox-root`]:
                  {
                    color: colors.greenAccent[600],
                  },
                [`& .MuiDataGrid-columnsManagement .MuiButtonBase-root.MuiCheckbox-root:hover`]:
                  {
                    color: "red",
                  },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

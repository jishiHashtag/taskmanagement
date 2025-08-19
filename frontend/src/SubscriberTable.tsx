import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import "./css/SubscriberTable.css";

type Subscriber = {
  id: string;
  licenceKey: string;
  firstName: string;
  lastName: string;
  organisation: string;
  mobile: string;
  country: string;
  date: string;
  createdDate: string;
  updatedDate: string;
  subscriptionType: string;
  validity: string;
};

export default function SubscriberTable() {
  const [rows, setRows] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  const columns: GridColDef[] = [
    { field: "licenseKey", headerName: "Licence Key", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "organisation", headerName: "Organisation", flex: 1 },
    { field: "mobile", headerName: "Mobile", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "createdAt", headerName: "Created Date", flex: 1 },
    { field: "updatedAt", headerName: "Updated Date", flex: 1 },
    { field: "subscriptionType", headerName: "Subscription Type", flex: 1 },
    { field: "validity", headerName: "Validity", flex: 1 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/subscribers");
        setRows(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Fake dashboard metrics (can be dynamic)
  const totalSubscribers = rows.length;
  const activeToday = Math.floor(totalSubscribers * 0.7); // Just an example
  const totalOrganizations = new Set(rows.map((r) => r.organisation)).size;

  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 🔷 Dashboard Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
          mb: 5,
        }}
      >
        <Box
          sx={{
            p: 3,
            bgcolor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Total Subscribers</Typography>
          <Typography variant="h4" color="primary">
            {totalSubscribers}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            bgcolor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Active Today</Typography>
          <Typography variant="h4" color="primary">
            {activeToday}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            bgcolor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Organizations</Typography>
          <Typography variant="h4" color="primary">
            {totalOrganizations}
          </Typography>
        </Box>
      </Box>

      {/* 📋 Table Title */}
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, fontWeight: 600, color: "primary.main" }}
      >
        Subscriber List
      </Typography>

      {/* 📊 DataGrid Table */}
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.id}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10, 25, 50]}
        pagination
        autoHeight
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#00b24f",
            backgroundImage: "linear-gradient(90deg, #00b24f, #e600ff)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            color: "#000",
            borderBottom: "2px solid #ccc",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#ffffff",
          },
          "& .MuiDataGrid-row": {
            fontSize: "14px",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#fafafa",
          },
        }}
      />
    </Box>
  );
}

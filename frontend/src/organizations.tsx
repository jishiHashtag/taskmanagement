import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  GridLegacy as Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../src/css/org.css";
import axios from "axios";

type OrgInfo = {
  id: number;
  name: string;
  licenseKey: string;
  country: string;
  subscription: string;
};

type Subscriber = {
  id: number;
  licenseKey: string;
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

export default function OrganizationsPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
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

  const handleCardClick = (organisation: string) => {
    navigate(`/dashboard/employees/${organisation}`);
  };
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Organizations
      </Typography>

      <Grid container spacing={3}>
        {rows.map((org) => (
          <Grid item xs={12} sm={6} md={4} key={org.id}>
            <Card
              onClick={() => handleCardClick(org.organisation)}
              sx={{
                color: "black",
                borderRadius: 3,
                boxShadow: 5,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ color: "#00b24f" }}>
                  {org.organisation}
                </Typography>
                <Typography variant="body2" mt={1}>
                  <strong>License:</strong> {org.licenseKey}
                </Typography>
                <Typography variant="body2">
                  <strong>Country:</strong> {org.country}
                </Typography>
                <Typography variant="body2">
                  <strong>Subscription:</strong> {org.subscriptionType}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setRows(data: any) {
  throw new Error("Function not implemented.");
}

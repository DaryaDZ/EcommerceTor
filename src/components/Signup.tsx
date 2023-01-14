import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    margin: "20px auto",
    width: 280,
  };
  const headerStyle = {
    margin: 10,
  };
  const avatarStyle = {
    backgroundColor: "#FFC4C4",
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sing Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter Yout Name..."
            style={{ margin: "10px auto" }}
          />
          <TextField
            fullWidth
            label="Phone"
            placeholder="Enter Yout Phone..."
            style={{ margin: "10px auto" }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FF9494",
              color: "white",
              fontWeight: "bold",
              margin: "50px auto",
            }}
            fullWidth
          >
            Sing Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;

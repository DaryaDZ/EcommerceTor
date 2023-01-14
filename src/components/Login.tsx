import React from "react";
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from '@material-ui/core/Checkbox';


const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  // const AvatarStyle={backgroundColor:"#0081B4"}
  const AvatarStyle = { backgroundColor: "#97DECE" };
  const btnstyle={margin:'8px 0', backgroundColor: "#B5D5C5"}

  // const mainstyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  // padding:'30px 20px', width:300, margin:"20px auto"
  return (
    <div>
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
            <Avatar style={AvatarStyle}>
              <LockIcon />
            </Avatar>
            <h1>LOGIN</h1>
            {/* <Typography variant='caption' >Please fill this form</Typography> */}
          </Grid>
          <TextField label='Username' placeholder="Enter Username" fullWidth required />
          <TextField label='Password' placeholder="Enter Password" type='password' fullWidth required />
          <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography style={{marginTop: "10px"}} >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
      </Grid>
    </div>
  );
};

export default Login;

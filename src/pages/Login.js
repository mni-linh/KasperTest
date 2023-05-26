import React from "react";

import {
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Divider,
  Avatar,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginY: 8,
              marginX: 4,
              display: "flex",
              flexDirection: "column",
              padding: 5,
            }}
          >
            <Avatar sx={{ margin: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Box marginBottom={2}>
              <Typography
                gutterBottom
                component="h1"
                variant="h5"
                sx={{
                  opacity: 1,
                  textTransform: "none",
                  color: "#344767",
                  fontWeight: 700,
                }}
              >
                Welcome back!
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 1,
                  textTransform: "none",
                  color: "#67748e",
                }}
              >
                Enter to get unlimited access to data & infomation.
              </Typography>
            </Box>
            <Box noValidate color="#344767">
              <Box
                marginBottom={2}
                sx={{ opacity: 1, background: "transparent" }}
                color="#344767"
                component="form"
              >
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                  component="span"
                >
                  Email{" "}
                  <Typography color="red" component="span">
                    *
                  </Typography>
                </Typography>
                <TextField
                  id="email"
                  placeholder="Enter your mail address"
                  type="email"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 3 } }}
                />
              </Box>
              <Box
                marginBottom={2}
                sx={{ opacity: 1, background: "transparent" }}
                color="#344767"
                component="form"
              >
                <Typography
                  component="span"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Password{" "}
                  <Typography color="red" component="span">
                    *
                  </Typography>
                </Typography>
                <TextField
                  id="input-with-icon-textfield"
                  placeholder="Enter password"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    sx: { borderRadius: 3 },
                    endAdornment: (
                      <InputAdornment position="end" sx={{ margin: 1 }}>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>{" "}
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Box>
              <Grid container alignItems="center">
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link to="#" variant="body2" sx={{ textDecoration: "none" }}>
                    Forgot your Password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                size="large"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 3, borderRadius: 3, textTransform: "none" }}
              >
                Sign In
              </Button>
              <Box marginY={2} sx={{ color: "#c1bdbd" }}>
                <Divider>Or, Login with</Divider>
              </Box>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  marginBottom: 3,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ paddingRight: 5 }}
                >
                  <path
                    d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with google
              </Button>
              <Typography align="center">
                Don't have an account?{" "}
                {/* <Typography sx={{ textDecoration: "none" }}> */}
                <Link to="/register" sx={{ textDecoration: "none" }}>
                  Register here
                </Link>
                {/* </Typography> */}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </>
  );
};

export default Login;

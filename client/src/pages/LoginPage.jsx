import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Grow, Link, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../features/usersApiSlice";
import { setCredentials } from "../features/authReducer";
import MoonLoader from "react-spinners/MoonLoader";
import { toast } from "react-toastify";

import HomeButton from "../components/HomeButton";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/scores");
    }
  }, [navigate, userInfo]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Submit function for form controls
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const theme = useTheme();
  return (
    <>
      <HomeButton />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#005e23",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grow in={true} timeout={700}>
          <Container maxWidth="lg">
            <Paper elevation={5} sx={{ minHeight: "380px", minWidth: "100%" }}>
              <Typography
                align="left"
                variant="h2"
                color="black"
                p="15px"
                sx={{
                  fontSize: "1.7rem",
                  fontFamily: "Dosis",
                  fontWeight: "500",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "2.6rem",
                    marginTop: "10px",
                  },
                }}
              >
                SIGN IN
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    aria-describedby="email"
                    placeholder="Email"
                    fullWidth
                    sx={{
                      mb: "15px",
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #e8b923",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#005e23",
                        },
                      },
                    }}
                  />
                  <TextField
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    aria-describedby="password"
                    placeholder="Password"
                    fullWidth
                    sx={{
                      mb: "15px",
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #e8b923",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#005e23",
                        },
                      },
                    }}
                  />
                  {isLoading && (
                    <Box margin="auto" display="block">
                      {" "}
                      <MoonLoader size={50} />
                    </Box>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "10px",

                      padding: "15px",
                      fontSize: "1.4rem",
                      fontFamily: "Dosis",
                      fontWeight: "600",
                      height: "50px",
                      backgroundColor: "#e8b923",
                      "&:hover": {
                        backgroundColor: "#e8b923",
                        transform: "scale(1.02)",
                        transition: "all 0.1s ease-in-out",
                      },
                      [theme.breakpoints.up("lg")]: {
                        fontSize: "2rem",

                        width: "fit-content",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                  <Typography mt="10px" pt="15px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "0.9rem" }}>
                    Need an account? {""}
                    <Link href="/register" sx={{ cursor: "pointer" }}>
                      Click Here
                    </Link>
                  </Typography>
                </FormControl>
              </form>
            </Paper>
          </Container>
        </Grow>
      </Box>
    </>
  );
};

export default LoginPage;

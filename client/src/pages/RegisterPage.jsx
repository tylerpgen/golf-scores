import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MoonLoader from "react-spinners/MoonLoader";
import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Grow, Link, Paper, TextField, Typography } from "@mui/material";
import HomeButton from "../components/HomeButton";
import { useRegisterMutation } from "../features/usersApiSlice";
import { setCredentials } from "../features/authReducer";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // Handle Submit function for form controls
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do no match");
    } else {
      try {
        const res = await register(formData).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
        console.log(error?.data?.message || error.error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
            <Paper elevation={5} sx={{ minHeight: "500px", minWidth: "100%" }}>
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
                CREATE AN ACCOUNT
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: "flex", flexDirection: "row", padding: "15px" }}>
                  <TextField
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    aria-describedby="first-name"
                    placeholder="Full Name"
                    fullWidth
                    sx={{
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
                </FormControl>

                {/* Two FormControl components in order to have full width TextFields */}

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
                  <TextField
                    type="password"
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    aria-describedby="confirm-password"
                    placeholder="Confirm Password"
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
                  <Typography p="10px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "1rem" }}>
                    By creating an account, I agree to the terms of service of the site, in accordance to the{" "}
                    <b>PRIVACY POLICY</b>
                  </Typography>
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
                        marginLeft: "10px",
                        width: "fit-content",
                      },
                    }}
                  >
                    Create Account
                  </Button>
                  <Typography mt="10px" p="10px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "0.9rem" }}>
                    Already have an account? {""}
                    <Link href="/login" sx={{ cursor: "pointer" }}>
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

export default RegisterPage;

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

// RegisterPage Component
const RegisterPage = () => {
  // State for form data (name, email, password, and password2)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Use the useRegisterMutation hook to handle the register user API call
  const [register, { isLoading }] = useRegisterMutation();

  // Get user info from the Redux store
  const { userInfo } = useSelector((state) => state.auth);

  // Use useEffect to redirect to the home page if the user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const theme = useTheme();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      try {
        // Call the register mutation with the form data and unwrap the result
        const res = await register(formData).unwrap();
        // Dispatch the credentials to update the user state
        dispatch(setCredentials({ ...res }));
        // Redirect to the home page after successful registration
        navigate("/");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
        console.log(error?.data?.message || error.error);
      }
    }
  };

  return (
    <>
      {/* Render the HomeButton component */}
      <HomeButton />

      {/* Main content */}
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
              {/* Register Heading */}
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
                    marginTop: "10px", // Adjust margin for large screens using theme breakpoints
                  },
                }}
              >
                CREATE AN ACCOUNT
              </Typography>

              {/* Register Form */}
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <FormControl sx={{ display: "flex", flexDirection: "row", padding: "15px" }}>
                  <TextField
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    aria-describedby="first-name"
                    placeholder="Name"
                    autoComplete="off"
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

                {/* Two FormControl components are used to have full-width TextFields */}

                {/* Email Input */}
                <FormControl sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    aria-describedby="email"
                    placeholder="Email"
                    autoComplete="off"
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
                  {/* Password Input */}
                  <TextField
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    aria-describedby="password"
                    placeholder="Password"
                    fullWidth
                    autoComplete="off"
                    inputProps={{
                      minLength: 6,
                    }}
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
                  {/* Confirm Password Input */}
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
                  {/* Terms and Conditions */}
                  <Typography p="10px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "1rem" }}>
                    By creating an account, I agree to the terms of service of the site, in accordance with the{" "}
                    <b>PRIVACY POLICY</b>
                  </Typography>

                  {/* Loading spinner while submitting */}
                  {isLoading && (
                    <Box margin="auto" display="block">
                      <MoonLoader size={50} />
                    </Box>
                  )}

                  {/* Submit Button */}
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
                        marginLeft: "10px", // Adjust margin for large screens using theme breakpoints
                        width: "fit-content",
                      },
                    }}
                  >
                    Create Account
                  </Button>

                  {/* Login link for users who already have an account */}
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

// Export the RegisterPage component
export default RegisterPage;

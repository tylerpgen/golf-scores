import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Grow, Paper, TextField, Typography } from "@mui/material";
import MoonLoader from "react-spinners/MoonLoader";
import { setCredentials } from "../features/authReducer";
import { useUpdateUserMutation } from "../features/usersApiSlice";
import HomeButton from "../components/HomeButton";

// ProfilePage Component
const ProfilePage = () => {
  // State for form data (name, email, password, and password2)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Get user info from the Redux store
  const { userInfo } = useSelector((state) => state.auth);

  // Use the useUpdateUserMutation hook to handle the update user API call
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  // Use useEffect to update the form data with user information when userInfo changes
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: userInfo.name,
      email: userInfo.email,
    }));
  }, [userInfo]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Get the current theme using the useTheme hook from @emotion/react
  const theme = useTheme();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      try {
        // Call the updateProfile mutation with the updated user data
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        // Dispatch the updated credentials to update the user state
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated");
      } catch (error) {
        toast.error(error?.data.message || error.error);
      }
    }
  };

  // Return JSX for rendering the ProfilePage component
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
        <Grow in={true} timeout={500}>
          <Container maxWidth="lg">
            <Paper elevation={5} sx={{ minHeight: "500px", minWidth: "100%" }}>
              {/* Profile Update Heading */}
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
                UPDATE PROFILE
              </Typography>

              {/* Profile Update Form */}
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
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

                  {/* Loading spinner while updating profile */}
                  {isLoading && (
                    <Box margin="auto" display="block">
                      <MoonLoader size={50} />
                    </Box>
                  )}

                  {/* Update Profile Button */}
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
                    Update Profile
                  </Button>
                </FormControl>
              </form>
            </Paper>
          </Container>
        </Grow>
      </Box>
    </>
  );
};

// Export the ProfilePage component
export default ProfilePage;

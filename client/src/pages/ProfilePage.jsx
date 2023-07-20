import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Grow, Paper, TextField, Typography } from "@mui/material";
import MoonLoader from "react-spinners/MoonLoader";
import { setCredentials } from "../features/authReducer";
import { useUpdateUserMutation } from "../features/usersApiSlice";
import HomeButton from "../components/HomeButton";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    // Update form data when userInfo changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: userInfo.name,
      email: userInfo.email,
    }));
  }, [userInfo]);

  // Handle Submit function for form controls
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do no match");
    } else {
      try {
        // Call updateProfile mutation with the updated user data
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

  const handleChange = (e) => {
    // Update form data as the user types into the input fields
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
        <Grow in={true} timeout={500}>
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
                UPDATE PROFILE
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

export default ProfilePage;

import { useTheme } from "@emotion/react";
import { Typography, Container, Box, Button, Link, Fade } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// HomePage Component
const HomePage = () => {
  // Extract user info from Redux store
  const { userInfo } = useSelector((state) => state.auth);

  // Get the navigate function to programmatically navigate to routes
  const navigate = useNavigate();

  // Use useEffect to automatically redirect to the scores page if the user is logged in
  useEffect(() => {
    if (userInfo) {
      navigate("/scores");
    }
  }, [navigate, userInfo]);

  const theme = useTheme();

  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Landing Page */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#005e23",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg" sx={{ paddingBottom: "150px" }}>
            {/* Main Heading */}
            <Typography
              align="center"
              variant="h1"
              sx={{
                mb: "8px",
                color: "white",
                fontSize: "4rem",
                fontFamily: "Dancing Script",
                fontWeight: "700",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "10rem", // Adjust font size for large screens using theme breakpoints
                },
              }}
            >
              18 Bogeys
            </Typography>

            {/* Subheading */}
            <Typography
              align="center"
              variant="h2"
              color="white"
              sx={{
                fontSize: "1.5rem",
                fontFamily: "Dosis",
                fontWeight: "500",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "2.6rem", // Adjust font size for large screens using theme breakpoints
                  marginTop: "10px", // Adjust margin for large screens using theme breakpoints
                },
              }}
            >
              Keep track of your scores easily!
            </Typography>

            {/* Container for the Sign Up button */}
            <Container align="center">
              {/* Link to the registration page */}
              <Link href="/register" sx={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    fontSize: "1.4rem",
                    fontFamily: "Dosis",
                    fontWeight: "600",
                    height: "50px",
                    width: "fit-content",
                    backgroundColor: "#e8b923",
                    "&:hover": {
                      backgroundColor: "#e8b923",
                      transform: "scale(1.1)", // Add a scale effect on hover
                      transition: "all 0.1s ease-in-out", // Add a smooth transition on hover
                    },
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "2rem", // Adjust font size for large screens using theme breakpoints
                      width: "250px", // Adjust button width for large screens using theme breakpoints
                    },
                  }}
                >
                  Sign UP Now
                </Button>
              </Link>
            </Container>
          </Container>
        </Fade>
      </Box>
    </>
  );
};

// Export the HomePage component
export default HomePage;

import { useTheme } from "@emotion/react";
import { Typography, Container, Box, Button, Link, Fade } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/scores");
    }
  }, [navigate, userInfo]);

  const theme = useTheme();
  return (
    <>
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
                  fontSize: "10rem",
                },
              }}
            >
              18 Bogeys
            </Typography>
            <Typography
              align="center"
              variant="h2"
              color="white"
              sx={{
                fontSize: "1.5rem",
                fontFamily: "Dosis",
                fontWeight: "500",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "2.6rem",
                  marginTop: "10px",
                },
              }}
            >
              Keep track of your scores easily!
            </Typography>
            <Container align="center">
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
                      transform: "scale(1.1)",
                      transition: "all 0.1s ease-in-out",
                    },
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "2rem",
                      width: "250px",
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

export default HomePage;

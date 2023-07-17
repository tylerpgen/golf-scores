import { useTheme } from "@emotion/react";
import { Typography, Container, Box, Button, Link, Fade } from "@mui/material";
import Navbar from "../components/Navbar";

const ScoresPage = () => {
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
          flexDirection: "column",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg" sx={{}}>
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
              Your Scores
            </Typography>
            <Container align="center"></Container>
          </Container>
        </Fade>
      </Box>
    </>
  );
};

export default ScoresPage;

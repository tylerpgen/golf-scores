import { useTheme } from "@emotion/react";
import { Typography, Container, Box, Button, Link } from "@mui/material";
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
      </Box>
    </>
  );
};

export default ScoresPage;

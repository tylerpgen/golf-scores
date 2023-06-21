import { useTheme } from "@emotion/react";
import { Typography, Container, Box, Button, Link } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  return (
    // Landing Page
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#005e23",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg" sx={{ paddingBottom: "150px" }}>
        <Typography
          align="center"
          variant="h1"
          sx={{
            mb: "8px",
            // pt: "16px",
            color: "white",
            fontSize: "4rem",
            fontFamily: "Dancing Script",
            fontWeight: "700",
            [theme.breakpoints.up("lg")]: {
              fontSize: "10rem",
            },
          }}
        >
          Golf Scores
        </Typography>
        <Typography
          align="center"
          variant="h2"
          color="white"
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
          Keep track of your scores easily!
        </Typography>
        <Container align="center">
          <Link href="/signup" sx={{ textDecoration: "none" }}>
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
    </Box>
  );
};

export default HomePage;

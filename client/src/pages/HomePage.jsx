import { useTheme } from "@emotion/react";
import { Typography, Container } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  return (
    // Landing Page
    <Container maxWidth="lg">
      <Typography
        align="center"
        variant="h1"
        sx={{
          mb: "8px",
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
    </Container>
  );
};

export default HomePage;

import { useTheme } from "@emotion/react";
import { Container, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ScoreBox = ({ course, date, score }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="md" sx={{ padding: "15px" }}>
      <Paper
        elevation={5}
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
          },
        }}
      >
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Course Name:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            fontWeight: "00",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0",
            },
          }}
        >
          {course}
        </Typography>
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Date:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0",
            },
          }}
        >
          {date}
        </Typography>
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Score:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0",
            },
          }}
        >
          {score}
        </Typography>
      </Paper>
    </Container>
  );
};

ScoreBox.propTypes = {
  course: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default ScoreBox;

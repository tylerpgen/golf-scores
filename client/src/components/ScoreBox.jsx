import { useTheme } from "@emotion/react";
import { Container, Paper, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

const ScoreBox = ({ course, date, score, scoreId, handleDeleteClick }) => {
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
        <IconButton onClick={() => handleDeleteClick(scoreId)} sx={{ color: "#e8b923" }}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

ScoreBox.propTypes = {
  course: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  scoreId: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default ScoreBox;

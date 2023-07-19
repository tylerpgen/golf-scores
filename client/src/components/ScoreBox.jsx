import { Container, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ScoreBox = (props) => {
  return (
    <Container maxWidth="sm" sx={{ padding: "15px" }}>
      <Paper sx={{ padding: "15px" }}>
        <Typography variant="h5">Course Name:</Typography>
        <Typography variant="h6">{props.course}</Typography>
        <Typography variant="h5">Date:</Typography>
        <Typography variant="h6">{props.date}</Typography>
        <Typography variant="h5">Score:</Typography>
        <Typography variant="h6">{props.score}</Typography>
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

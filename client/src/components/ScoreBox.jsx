// Import necessary libraries and components
import { useTheme } from "@emotion/react";
import { Container, Paper, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

// ScoreBox Component
const ScoreBox = ({ course, date, score, scoreId, handleDeleteClick }) => {
  // Get the current theme using the useTheme hook from @emotion/react
  const theme = useTheme();

  // Return JSX for rendering the ScoreBox component
  return (
    <Container maxWidth="md" sx={{ padding: "15px" }}>
      {/* Paper component representing the score box */}
      <Paper
        elevation={5}
        sx={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row", // Switch to row direction for large screens using theme breakpoints
          },
        }}
      >
        {/* Course Name */}
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Course Name:
        </Typography>
        {/* Display the name of the course */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            fontWeight: "00",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0", // Remove margin for large screens using theme breakpoints
            },
          }}
        >
          {course}
        </Typography>
        {/* Date */}
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Date:
        </Typography>
        {/* Display the date */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0", // Remove margin for large screens using theme breakpoints
            },
          }}
        >
          {date}
        </Typography>
        {/* Score */}
        <Typography variant="h5" fontFamily="Dosis" fontWeight="700">
          Score:
        </Typography>
        {/* Display the score */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Dosis",
            my: "8px",
            [theme.breakpoints.up("lg")]: {
              my: "0", // Remove margin for large screens using theme breakpoints
            },
          }}
        >
          {score}
        </Typography>
        {/* Delete Icon Button */}
        <IconButton onClick={() => handleDeleteClick(scoreId)} sx={{ color: "#e8b923" }}>
          {/* Render the delete icon from MUI icons */}
          <DeleteIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

// Define PropTypes for type checking of props
ScoreBox.propTypes = {
  course: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  scoreId: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

// Export the ScoreBox component
export default ScoreBox;

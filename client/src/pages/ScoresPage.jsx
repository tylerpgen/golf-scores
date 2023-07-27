import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { toast } from "react-toastify";
import {
  Typography,
  Container,
  Box,
  Fade,
  IconButton,
  Modal,
  Paper,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useCreateScoreMutation, useDeleteScoreMutation, useGetScoresMutation } from "../features/scoresApiSlice";
import { setScoresData } from "../features/scoreSlice";
import ScoreBox from "../components/ScoreBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// ScoresPage Component
const ScoresPage = () => {
  // State for form data (course, date, and score)
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    score: "",
  });

  // State to control the open/close state of the modal
  const [isOpen, setIsOpen] = useState(false);

  const { course, date, score } = formData;

  // Get user info from the Redux store
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Hooks for API calls to get scores, create a score, and delete a score
  const [getScores, { isLoading: isGettingScores }] = useGetScoresMutation();
  const [createScore, { isLoading: isCreatingScore }] = useCreateScoreMutation();
  const [deleteScore] = useDeleteScoreMutation();

  // Get scores data from the Redux store
  const { scoresData } = useSelector((state) => state.scores);

  // useEffect to fetch scores data when the component mounts
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await getScores();
        const scores = response.data;
        dispatch(setScoresData(scores));
      } catch (error) {
        toast.error(error?.data?.message || error.error);
        console.log(error?.data?.message || error.error);
      }
    };
    fetchScores();
  }, []);

  // Handle opening the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Handle closing the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // Handle form submission to create a new score
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createScore(formData);
      dispatch(setScoresData([...scoresData, response.data]));

      // Close the modal and reset form data
      handleClose();

      setFormData({
        course: "",
        date: "",
        score: "",
      });

      toast.success("Score created successfully");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      console.log(error?.data?.message || error.error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle click event to delete a score
  const handleDeleteClick = async (scoreId) => {
    try {
      await deleteScore(scoreId);
      toast.success("Score deleted successfully");

      // Update the Redux store with the filtered scoresData (remove the deleted score)
      dispatch(setScoresData(scoresData.filter((score) => score._id !== scoreId)));
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      console.log(error?.data?.message || error.error);
    }
  };

  console.log(scoresData);
  const theme = useTheme();

  // Return JSX for rendering the ScoresPage component
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
          flexDirection: "column",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg" sx={{}}>
            <Box>
              {/* Display user's name and "Scores" */}
              <Typography
                align="center"
                variant="h3"
                sx={{
                  mb: "15px",
                  color: "white",
                  fontSize: "3rem",
                  fontFamily: "Dancing Script",
                  fontWeight: "700",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "7rem",
                  },
                }}
              >
                {userInfo.name}'s Scores
              </Typography>
            </Box>

            {/* Add Score Button */}
            <Container maxWidth="lg">
              <IconButton sx={{ color: "#e8b923" }} onClick={handleOpen}>
                <AddCircleIcon
                  sx={{
                    fontSize: "2.5rem",
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "3rem",
                      my: "8px",
                    },
                  }}
                />
              </IconButton>
            </Container>

            {/* Modal for Adding a New Score */}
            <Modal
              open={isOpen}
              onClose={handleClose}
              sx={{ minHeight: "800px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Container maxWidth="sm">
                <Paper elevation={4}>
                  <form onSubmit={handleSubmit}>
                    <FormControl sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
                      {/* Course Input */}
                      <TextField
                        id="course"
                        name="course"
                        value={course}
                        onChange={handleChange}
                        aria-describedby="course"
                        placeholder="Course"
                        fullWidth
                        autoComplete="off"
                        sx={{
                          mb: "15px",
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #e8b923",
                          },
                          "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                              borderColor: "#005e23",
                            },
                          },
                        }}
                      />

                      {/* Date Input */}
                      <TextField
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        aria-describedby="date"
                        placeholder="Date"
                        fullWidth
                        sx={{
                          mb: "15px",
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #e8b923",
                          },
                          "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                              borderColor: "#005e23",
                            },
                          },
                        }}
                      />

                      {/* Score Input */}
                      <TextField
                        id="score"
                        name="score"
                        value={score}
                        onChange={handleChange}
                        aria-describedby="score"
                        placeholder="Score"
                        fullWidth
                        autoComplete="off"
                        sx={{
                          mb: "15px",
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #e8b923",
                          },
                          "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                              borderColor: "#005e23",
                            },
                          },
                        }}
                      />

                      {/* Loading spinner while creating the score */}
                      {isCreatingScore && (
                        <Box margin="auto" display="block">
                          <MoonLoader size={50} />
                        </Box>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          marginTop: "10px",
                          padding: "15px",
                          fontSize: "1.4rem",
                          fontFamily: "Dosis",
                          fontWeight: "600",
                          height: "50px",
                          backgroundColor: "#e8b923",
                          "&:hover": {
                            backgroundColor: "#e8b923",
                            transform: "scale(1.02)",
                            transition: "all 0.1s ease-in-out",
                          },
                          [theme.breakpoints.up("lg")]: {
                            fontSize: "1.5rem",
                            width: "fit-content",
                          },
                        }}
                      >
                        Create Score
                      </Button>
                    </FormControl>
                  </form>
                </Paper>
              </Container>
            </Modal>

            {/* Display Scores */}
            <Box>
              {isGettingScores ? (
                // Loading spinner while getting scores
                <Box margin="auto" display="flex" justifyContent="center">
                  <MoonLoader size={80} />
                </Box>
              ) : (
                <>
                  {scoresData && scoresData.length > 0 ? (
                    // Display ScoreBox component for each score
                    <Container maxWidth="lg" sx={{ padding: "15px" }}>
                      {scoresData.map((score) => (
                        <ScoreBox
                          key={score._id}
                          scoreId={score._id}
                          course={score.course}
                          date={score.date}
                          score={score.score}
                          handleDeleteClick={handleDeleteClick}
                        />
                      ))}
                    </Container>
                  ) : (
                    // Display message if there are no scores
                    <Typography
                      align="center"
                      variant="h1"
                      sx={{
                        mt: "60px",
                        color: "white",
                        fontSize: "2rem",
                        fontFamily: "Dosis",
                        fontWeight: "700",
                        [theme.breakpoints.up("lg")]: {
                          fontSize: "2rem",
                        },
                      }}
                    >
                      You have no scores...
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Container>
        </Fade>
      </Box>
    </>
  );
};

export default ScoresPage;

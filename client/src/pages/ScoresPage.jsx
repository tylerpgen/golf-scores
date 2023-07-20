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

const ScoresPage = () => {
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    score: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const { course, date, score } = formData;
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [getScores, { isLoading: isGettingScores }] = useGetScoresMutation();
  const [createScore, { isLoading: isCreatingScore }] = useCreateScoreMutation();
  const [deleteScore] = useDeleteScoreMutation();
  const { scoresData } = useSelector((state) => state.scores);

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createScore(formData);
      dispatch(setScoresData([...scoresData, response.data]));

      handleClose();

      setFormData({
        course: "",
        date: "",
        score: "",
      });

      toast.success("Score created succesfully");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      console.log(error?.data?.message || error.error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteClick = async (scoreId) => {
    try {
      await deleteScore(scoreId);
      toast.success("Score deleted succesfully");

      dispatch(setScoresData(scoresData.filter((score) => score._id !== scoreId)));
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      console.log(error?.data?.message || error.error);
    }
  };

  console.log(scoresData);

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
            <Box>
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
            <Modal
              open={isOpen}
              onClose={handleClose}
              sx={{ minHeight: "800px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Container maxWidth="sm">
                <Paper elevation={4}>
                  <form onSubmit={handleSubmit}>
                    <FormControl sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
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
                      {isCreatingScore && (
                        <Box margin="auto" display="block">
                          {" "}
                          <MoonLoader size={50} />
                        </Box>
                      )}
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
            <Box>
              {isGettingScores ? (
                <Box margin="auto" display="flex" justifyContent="center">
                  {" "}
                  <MoonLoader size={80} />
                </Box>
              ) : (
                <>
                  {scoresData && scoresData.length > 0 ? (
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

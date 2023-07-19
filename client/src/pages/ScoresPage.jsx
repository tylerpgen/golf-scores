import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { toast } from "react-toastify";
import { Typography, Container, Box, Button, Link, Fade, Paper } from "@mui/material";
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useCreateScoreMutation, useGetScoresMutation } from "../features/scoresApiSlice";
import { setScoresData } from "../features/scoreSlice";
import ScoreBox from "../components/ScoreBox";

const ScoresPage = () => {
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    score: "",
  });

  const { course, date, score } = formData;
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [getScores, { isLoading: isGettingScores }] = useGetScoresMutation();
  const [createScore, { isLoading: isCreatingScore }] = useCreateScoreMutation();
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
                        <ScoreBox key={score._id} course={score.course} date={score.date} score={score.score} />
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

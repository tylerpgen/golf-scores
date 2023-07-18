import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { toast } from "react-toastify";
import { Typography, Container, Box, Button, Link, Fade } from "@mui/material";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useCreateScoreMutation, useGetScoresMutation } from "../features/scoresApiSlice";

const ScoresPage = () => {
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    score: "",
  });

  const { course, date, score } = formData;

  const dispatch = useDispatch();

  const [getScores, { isLoading: isGettingScores }] = useGetScoresMutation();
  const [createScore, { isLoading: isCreatingScore }] = useCreateScoreMutation();
  // const { scoresData } = useSelector((state) => state.data);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scores = await getScores();
        console.log(scores.data);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
        console.log(error?.data?.message || error.error);
      }
    };
    fetchScores();
  }, [getScores]);

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
        </Fade>
      </Box>
    </>
  );
};

export default ScoresPage;

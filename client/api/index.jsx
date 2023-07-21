import axios from "axios";

const api = axios.create({
  baseURL: "https://golf-scores-api.onrender.com",
});

// Posts API
export const fetchScores = () => api.get("/scores");
export const addScore = (newScore) => api.post("/scores/add", newScore);
export const updateScore = (id, updatedScore) => api.put(`/scores/${id}`, updatedScore);
export const deleteScore = (id) => api.delete(`/scores/${id}`);

//Authentication API
export const signIn = (formData) => api.post("/user/signin", formData);
export const signUp = (formData) => api.post("/user/signup", formData);

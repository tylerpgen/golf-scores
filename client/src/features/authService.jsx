import axios from "axios";

const API_URL = "/api/users/";

//Registers a new user

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // Setting response to local storage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;

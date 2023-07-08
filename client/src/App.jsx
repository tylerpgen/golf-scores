import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <Outlet />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

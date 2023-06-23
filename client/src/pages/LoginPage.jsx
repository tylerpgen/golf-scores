import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Link, Paper, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  // Handle Submit function for form controls
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#005e23",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={5} sx={{ minHeight: "380px", minWidth: "100%" }}>
          <Typography
            align="left"
            variant="h2"
            color="black"
            p="15px"
            sx={{
              fontSize: "1.7rem",
              fontFamily: "Dosis",
              fontWeight: "500",
              [theme.breakpoints.up("lg")]: {
                fontSize: "2.6rem",
                marginTop: "10px",
              },
            }}
          >
            SIGN IN
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
              <TextField
                id="email"
                aria-describedby="email"
                placeholder="Email"
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
                id="password"
                aria-describedby="password"
                placeholder="Password"
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
                    fontSize: "2rem",

                    width: "fit-content",
                  },
                }}
              >
                LOGIN
              </Button>
              <Typography mt="10px" pt="15px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "0.9rem" }}>
                Need an account? {""}
                <Link href="/register" sx={{ cursor: "pointer" }}>
                  Click Here
                </Link>
              </Typography>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;

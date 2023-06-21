import { useTheme } from "@emotion/react";
import { Box, Button, Container, FormControl, Paper, TextField, Typography } from "@mui/material";

const RegisterPage = () => {
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
        <Paper elevation={5} sx={{ minHeight: "500px", minWidth: "100%" }}>
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
            CREATE AN ACCOUNT
          </Typography>
          <FormControl sx={{ display: "flex", flexDirection: "row", padding: "15px" }}>
            <TextField
              id="first-name"
              aria-describedby="first-name"
              placeholder="First Name"
              sx={{
                flex: "1",
                maxWidth: "48%",
                marginRight: "10px",
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
              id="last-name"
              aria-describedby="last-name"
              placeholder="Last Name"
              sx={{
                flex: "1",
                minWidth: "40%",
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
          </FormControl>
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
            <TextField
              id="confirm-password"
              aria-describedby="confirm-password"
              placeholder="Confirm Password"
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
            <Typography p="10px" sx={{ fontFamily: "Dosis", fontWeight: "500", fontSize: "1rem" }}>
              By creating an account, I agree to the terms of service of the site, in accordance to the{" "}
              <b>PRIVACY POLICY</b>
            </Typography>
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
              Create Account
            </Button>
          </FormControl>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;

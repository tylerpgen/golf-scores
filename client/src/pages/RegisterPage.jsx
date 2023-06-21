import { useTheme } from "@emotion/react";
import { Box, Container, FormControl, Paper, TextField, Typography } from "@mui/material";

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
                minWidth: "40%",
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
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;

import { useState } from "react";
import {
  AppBar,
  IconButton,
  Link,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Divider,
  List,
  Box,
  Button,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/usersApiSlice";
import { logout } from "../features/authReducer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // State to control the visibility of the SwipeableDrawer on mobile screens
  const [open, setOpen] = useState(false);

  // Extract user info from Redux store
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handler function for user logout
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#005e23", boxShadow: "none" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
        {isNonMobileScreens && (
          <>
            {userInfo ? (
              /* If the user is logged in, show profile, scores, and logout links */
              <>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/profile"}
                  sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Profile
                  </Typography>
                </Link>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/scores"}
                  sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Scores
                  </Typography>
                </Link>
                <Button
                  color="white"
                  variant="button"
                  underline="none"
                  sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
                  onClick={logoutHandler}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Logout
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/login"}
                  sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Login
                  </Typography>
                </Link>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/register"}
                  sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Sign Up
                  </Typography>
                </Link>
              </>
            )}
          </>
        )}

        {/* Show the menu icon for mobile screens */}
        {!isNonMobileScreens ? (
          <IconButton sx={{ ml: "auto" }}>
            <MenuIcon sx={{ color: "white", fontSize: 40 }} onClick={() => setOpen(true)} />
          </IconButton>
        ) : null}
      </Toolbar>

      {/* SwipeableDrawer for mobile screens */}
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        PaperProps={{ style: { height: "100vh", width: "100%", background: "#005e23" } }}
      >
        <IconButton>
          <ChevronRightIcon sx={{ color: "white", fontSize: 40 }} onClick={() => setOpen(false)} />
        </IconButton>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <List>
          {userInfo ? (
            /* Show profile, scores, and logout links in the mobile drawer if the user is logged in */
            <>
              <Box align="center" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/profile"}
                  sx={{
                    my: "50px",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Profile
                  </Typography>
                </Link>

                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/scores"}
                  sx={{
                    my: "50px",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Scores
                  </Typography>
                </Link>

                <Button
                  color="white"
                  variant="button"
                  underline="none"
                  sx={{ my: "50px", color: "white", "&:hover": { textDecoration: "none" } }}
                  onClick={logoutHandler}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Logout
                  </Typography>
                </Button>
              </Box>
            </>
          ) : (
            /* Show login and sign up links in the mobile drawer if the user is not logged in */
            <>
              <Box align="center" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/login"}
                  sx={{ my: "50px", "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Login
                  </Typography>
                </Link>
                <Link
                  color="white"
                  variant="button"
                  underline="none"
                  href={"/register"}
                  sx={{ my: "50px", "&:hover": { textDecoration: "none" } }}
                >
                  <Typography variant="h5" fontWeight="600" fontFamily="Dosis">
                    Sign Up
                  </Typography>
                </Link>
              </Box>
            </>
          )}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;

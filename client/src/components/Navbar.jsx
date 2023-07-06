import { useState } from "react";
import { AppBar, IconButton, Link, SwipeableDrawer, Toolbar, Typography, Divider, List, ListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navigationLinks = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/register" },
];

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <AppBar position="sticky" sx={{ background: "#005e23", boxShadow: "none" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
        {isNonMobileScreens ? (
          <Link
            color="white"
            variant="button"
            underline="none"
            href={userInfo ? "" : "/login"}
            sx={{ mx: 4, "&:hover": { textDecoration: "none" } }}
          >
            <Typography id="username" variant="h6" fontWeight="600" fontFamily="Inter">
              {userInfo ? userInfo.name : "Login"}
            </Typography>
          </Link>
        ) : null}
        {!isNonMobileScreens ? (
          <IconButton sx={{ ml: "auto" }}>
            <MenuIcon sx={{ color: "white", fontSize: 40 }} onClick={() => setOpen(true)} />
          </IconButton>
        ) : null}
      </Toolbar>
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
          {navigationLinks.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                sx={{ color: "white", "&:hover": { color: "white" } }}
              >
                <Typography variant="h6" fontWeight="600" fontFamily="Inter" sx={{ fontSize: "1.5rem" }}>
                  {item.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;

import { AppBar, IconButton, Link, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const HomeButton = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#005e23", boxShadow: "none" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
        <IconButton sx={{ ml: "auto" }}>
          <Link href="/" sx={{ cursor: "pointer" }}>
            <HomeIcon sx={{ color: "white", fontSize: 40 }} />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HomeButton;
